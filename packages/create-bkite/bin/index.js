#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const currentDir = process.cwd()
const args = process.argv.slice(2)

const sanitizeProjectName = (name) => {
    return name.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase()
}

const isValidPackageName = (name) => {
    return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(name)
}

const copyDir = (srcDir, destDir, projectName) => {
    fs.mkdirSync(destDir, { recursive: true })

    for (const file of fs.readdirSync(srcDir)) {
        const src = path.join(srcDir, file)

        // Rename _gitignore to .gitignore
        const destFileName = file === '_gitignore' ? '.gitignore' : file
        const dest = path.join(destDir, destFileName)

        const stat = fs.statSync(src)

        if (stat.isDirectory()) {
            copyDir(src, dest, projectName)
        } else {
            if (file === 'package.json') {
                const pkg = JSON.parse(fs.readFileSync(src, 'utf-8'))
                pkg.name = projectName
                fs.writeFileSync(dest, JSON.stringify(pkg, null, 2) + '\n', 'utf-8')
            } else {
                fs.copyFileSync(src, dest)
            }
        }
    }
}

const promptProjectName = async () => {
    const res = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'Enter your project name:',
        initial: 'my-backend-app',
        validate: (input) => input.trim() !== '' || 'Project name cannot be empty.',
    })
    return sanitizeProjectName(res.projectName)
}

const templateDir = path.resolve(__dirname, '../templates/template-js')

if (!fs.existsSync(templateDir)) {
    console.error(`❌ Template directory not found at ${templateDir}`)
    process.exit(1)
}

let projectName, targetDir

// Case 1: No args => ask for name
if (args.length === 0) {
    projectName = await promptProjectName()
    targetDir = path.join(currentDir, projectName)
}

// Case 2: `.` => current directory
else if (args[0] === '.') {
    targetDir = currentDir
    projectName = sanitizeProjectName(path.basename(currentDir))
}

// Case 3: `npm create mycli@latest folder-name`
else {
    projectName = sanitizeProjectName(args[0])
    targetDir = path.join(currentDir, projectName)
}

if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
    console.error(`❌ Directory "${projectName}" already exists and is not empty.`)
    process.exit(1)
}

copyDir(templateDir, targetDir, projectName)

console.log(`\n✅ Project "${projectName}" created in "${targetDir}"`)
if (targetDir !== currentDir) {
    console.log(`\nNext steps:`)
    console.log(`   cd ${projectName}`)
}
console.log(`   npm install`)
console.log(`   npm run dev\n`)
