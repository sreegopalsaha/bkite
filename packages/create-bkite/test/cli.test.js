import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdtempSync, rmSync, existsSync, readFileSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import validateProjectName from '../utils/validateProjectName.js'
import scanTemplates from '../utils/scanTemplates.js'
import copyTemplate from '../utils/copyTemplate.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMPLATES_DIR = path.resolve(__dirname, '../templates')

test('validateProjectName', async (t) => {
    await t.test('accepts valid project names', () => {
        assert.equal(validateProjectName('my-backend-app'), undefined)
        assert.equal(validateProjectName('bkite_test_123'), undefined)
        assert.equal(validateProjectName('api'), undefined)
    })

    await t.test('rejects empty or whitespace names', () => {
        assert.match(validateProjectName(''), /required/)
        assert.match(validateProjectName('   '), /required/)
    })

    await t.test('rejects uppercase names (npm rule)', () => {
        assert.match(validateProjectName('MyApp'), /lowercase/)
        assert.match(validateProjectName('My-Backend'), /lowercase/)
    })

    await t.test('rejects names starting with special characters', () => {
        assert.match(validateProjectName('-app'), /cannot start with/)
        assert.match(validateProjectName('_app'), /cannot start with/)
        assert.match(validateProjectName('.app'), /cannot start with/)
    })

    await t.test('rejects spaces and unsupported characters', () => {
        assert.match(validateProjectName('my app'), /lowercase letters, numbers/)
        assert.match(validateProjectName('app@name'), /lowercase letters, numbers/)
    })
})

test('scanTemplates', () => {
    const templates = scanTemplates(TEMPLATES_DIR)
    assert.ok(templates.length >= 4, 'Should find at least 4 templates')

    const coreJs = templates.find(t => t.dir === 'core-js')
    assert.ok(coreJs)
    assert.equal(coreJs.lang, 'js')
    assert.equal(coreJs.db, 'none')
    assert.equal(coreJs.orm, 'none')

    const coreTs = templates.find(t => t.dir === 'core-ts')
    assert.ok(coreTs)
    assert.equal(coreTs.lang, 'ts')

    const mongoJs = templates.find(t => t.dir === 'mongodb-mongoose-js')
    assert.ok(mongoJs)
    assert.equal(mongoJs.db, 'mongodb')
    assert.equal(mongoJs.orm, 'mongoose')
    assert.equal(mongoJs.lang, 'js')

    const mongoTs = templates.find(t => t.dir === 'mongodb-mongoose-ts')
    assert.ok(mongoTs)
    assert.equal(mongoTs.db, 'mongodb')
    assert.equal(mongoTs.orm, 'mongoose')
    assert.equal(mongoTs.lang, 'ts')
})

test('copyTemplate scaffolding and placeholders', () => {
    const tempDir = mkdtempSync(path.join(tmpdir(), 'bkite-test-'))
    const testAppName = 'test-express-api'
    const targetDir = path.join(tempDir, testAppName)

    try {
        const templatePath = path.join(TEMPLATES_DIR, 'core-ts')
        copyTemplate(templatePath, targetDir, testAppName)

        assert.ok(existsSync(path.join(targetDir, '.gitignore')), '.gitignore should exist')
        assert.ok(!existsSync(path.join(targetDir, '_gitignore')), '_gitignore should be renamed')
        assert.ok(existsSync(path.join(targetDir, 'tsconfig.json')), 'tsconfig.json should exist')

        const pkgJson = JSON.parse(readFileSync(path.join(targetDir, 'package.json'), 'utf8'))
        assert.equal(pkgJson.name, testAppName, 'package.json name should match project name')

        const readme = readFileSync(path.join(targetDir, 'README.md'), 'utf8')
        assert.ok(readme.includes(`# ${testAppName}`), 'README should contain replaced project name')
    } finally {
        rmSync(tempDir, { recursive: true, force: true })
    }
})

test('template integrity checks', async (t) => {
    const templates = scanTemplates(TEMPLATES_DIR)

    for (const tpl of templates) {
        await t.test(`template ${tpl.dir} has valid files and scripts`, () => {
            const tplDir = path.join(TEMPLATES_DIR, tpl.dir)

            // Check package.json
            const pkgPath = path.join(tplDir, 'package.json')
            assert.ok(existsSync(pkgPath), `${tpl.dir} must have package.json`)
            const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
            assert.ok(pkg.scripts?.dev, `${tpl.dir} must have dev script`)
            assert.ok(pkg.scripts?.start, `${tpl.dir} must have start script`)

            // Check _gitignore
            const gitignorePath = path.join(tplDir, '_gitignore')
            assert.ok(existsSync(gitignorePath), `${tpl.dir} must have _gitignore`)
            const gitignore = readFileSync(gitignorePath, 'utf8')
            assert.ok(gitignore.includes('node_modules'))
            assert.ok(gitignore.includes('.env'))

            // Check TypeScript specific files
            if (tpl.lang === 'ts') {
                assert.ok(existsSync(path.join(tplDir, 'tsconfig.json')), `${tpl.dir} must have tsconfig.json`)
                assert.ok(pkg.scripts?.build, `${tpl.dir} must have build script`)
                assert.ok(gitignore.includes('dist'), `${tpl.dir} must ignore dist in _gitignore`)
            }

            // Check models in mongodb templates are not empty
            if (tpl.db === 'mongodb') {
                const modelExt = tpl.lang === 'ts' ? 'ts' : 'js'
                const modelPath = path.join(tplDir, `src/models/example.models.${modelExt}`)
                assert.ok(existsSync(modelPath), `model file should exist in ${tpl.dir}`)
                const modelSize = statSync(modelPath).size
                assert.ok(modelSize > 50, `model file in ${tpl.dir} should not be empty`)
            }
        })
    }
})
