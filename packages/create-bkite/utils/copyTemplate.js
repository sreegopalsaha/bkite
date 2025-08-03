import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { spinner } from '@clack/prompts'

const copyTemplate = (src, dest, name) => {
    const s = spinner()
    s.start('Creating project structure...')

    try {
        if (!existsSync(dest)) mkdirSync(dest, { recursive: true })

        function copyRecursive(srcDir, destDir) {
            for (const file of readdirSync(srcDir)) {
                const srcFile = path.join(srcDir, file)
                const destFile = path.join(destDir, file === '_gitignore' ? '.gitignore' : file)

                if (statSync(srcFile).isDirectory()) {
                    if (!existsSync(destFile)) mkdirSync(destFile, { recursive: true })
                    copyRecursive(srcFile, destFile)
                } else {
                    let content = readFileSync(srcFile, 'utf8')

                    // Update package.json with project name
                    if (file === 'package.json') {
                        try {
                            const pkg = JSON.parse(content)
                            pkg.name = name
                            content = JSON.stringify(pkg, null, 2) + '\n'
                        } catch {
                            // ignore broken JSON, keep original content
                        }
                    }

                    // Replace template placeholders
                    content = content.replace(/{{PROJECT_NAME}}/g, name)

                    writeFileSync(destFile, content)
                }
            }
        }

        copyRecursive(src, dest)
        s.stop('Project structure created successfully')
    } catch (error) {
        s.stop('✖ Failed to create project structure')
        throw error
    }
}

export default copyTemplate;