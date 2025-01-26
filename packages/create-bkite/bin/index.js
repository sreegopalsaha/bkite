#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sanitizeProjectName = (name) => {
    name.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase()
}

const copyDir = (srcDir, destDir) => {
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
        const src = path.join(srcDir, file)
        const dest = path.join(destDir, file)
        const stat = fs.statSync(src)
        if (stat.isDirectory()) {
            copyDir(src, dest)
        } else {
            fs.copyFileSync(src, dest)
        }
    }
}

const main = async () => {
    const { projectName } = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'Enter your project name:',
        initial: 'my-js-app',
        validate: (input) =>
            input.trim() !== '' || 'Project name cannot be empty.',
    })

    if (!projectName) {
        console.log('Operation cancelled.')
        process.exit(1)
    }

    const sanitized = sanitizeProjectName(projectName)
    const targetDir = path.resolve(process.cwd(), sanitized)

    const templateDir = path.resolve(__dirname, '../templates/template-js')

    if (!fs.existsSync(templateDir)) {
        console.error(`❌ Template directory not found at ${templateDir}`)
        process.exit(1)
    }

    if (fs.existsSync(targetDir)) {
        console.error(`❌ Directory "${sanitized}" already exists.`)
        process.exit(1)
    }

    copyDir(templateDir, targetDir)

    console.log(`✅ Project "${sanitized}" created successfully!`)
    console.log(`➡️  Run: cd ${sanitized} && npm install`)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
