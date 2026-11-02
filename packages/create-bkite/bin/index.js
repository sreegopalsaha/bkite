#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { outro, isCancel, cancel, text, select, note, spinner, confirm } from '@clack/prompts'
import { existsSync, readdirSync } from 'node:fs'
import scanTemplates from '../utils/scanTemplates.js'
import copyTemplate from '../utils/copyTemplate.js'
import validateProjectName from '../utils/validateProjectName.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMPLATES_DIR = path.resolve(__dirname, '../templates')

main().catch(err => {
    console.error('✖ Error:', err.message)
    process.exit(1)
})

async function main() {
    try {
        const argTarget = process.argv[2]
        let targetDir = argTarget?.trim() || undefined
        let projectName = targetDir

        const cwd = process.cwd()

        // If no argument provided, ask for project name
        if (!targetDir) {
            const defaultProjectName = 'my-bkite-app'

            projectName = await text({
                message: 'Project name:',
                defaultValue: defaultProjectName,
                placeholder: 'my-backend-app',
                validate: validateProjectName
            })

            if (isCancel(projectName)) {
                cancel('Operation cancelled.')
                return
            }

            projectName = projectName.trim()
            targetDir = path.resolve(cwd, projectName)
        } else {
            // If argument provided, validate it first
            if (targetDir !== '.') {
                projectName = path.basename(targetDir)
                const validationError = validateProjectName(projectName)
                if (validationError) {
                    cancel(`Invalid project name "${projectName}": ${validationError}`)
                    return
                }
                targetDir = path.resolve(cwd, targetDir)
            } else {
                // Using current directory - sanitize directory name for npm package name
                projectName = path.basename(cwd).toLowerCase().replace(/[^a-z0-9-_]/g, '-')
                const validationError = validateProjectName(projectName)
                if (validationError) {
                    cancel(`Invalid current directory name "${projectName}": ${validationError}`)
                    return
                }
                targetDir = cwd
            }
        }

        // Check if directory exists and is not empty
        if (existsSync(targetDir)) {
            const files = readdirSync(targetDir)
            if (files.length > 0) {
                const dirDisplayName = targetDir === cwd ? 'Current directory' : `Directory "${projectName}"`
                const overwrite = await confirm({
                    message: `${dirDisplayName} is not empty. Overwrite existing files?`,
                    initialValue: false
                })

                if (isCancel(overwrite) || !overwrite) {
                    cancel('Operation cancelled.')
                    return
                }
            }
        }

        // Scan templates with error handling
        let templates
        try {
            templates = scanTemplates(TEMPLATES_DIR)
        } catch (error) {
            cancel(`${error.message}`)
            return
        }

        // Language selection
        const availableLanguages = [...new Set(templates.map(t => t.lang))].sort()
        const lang = await select({
            message: 'Choose your preferred language:',
            options: availableLanguages.map(l => ({
                label: l === 'js' ? 'JavaScript' : l === 'ts' ? 'TypeScript' : l.toUpperCase(),
                value: l
            })),
        })

        if (isCancel(lang)) {
            cancel('Operation cancelled.')
            return
        }

        // Database selection
        const availableDbs = [...new Set(templates.filter(t => t.lang === lang).map(t => t.db))].sort()
        const db = await select({
            message: 'Choose your database:',
            options: availableDbs.map(database => {
                const label = database === 'none' ? 'No Database' : database.charAt(0).toUpperCase() + database.slice(1)
                return {
                    label: label,
                    value: database
                }
            }),
        })

        if (isCancel(db)) {
            cancel('Operation cancelled.')
            return
        }

        let orm, selected

        // Skip ORM selection if no database is chosen
        if (db === 'none') {
            selected = templates.find(t => t.lang === lang && t.db === 'none' && t.orm === 'none')
        } else {
            // ORM selection
            const availableOrms = [...new Set(templates.filter(t => t.lang === lang && t.db === db).map(t => t.orm))].sort()
            orm = await select({
                message: 'Choose your ORM/ODM:',
                options: availableOrms.map(ormOption => {
                    const label = ormOption === 'none' ? 'No ORM' : ormOption.charAt(0).toUpperCase() + ormOption.slice(1)
                    return {
                        label: label,
                        value: ormOption
                    }
                }),
            })

            if (isCancel(orm)) {
                cancel('Operation cancelled.')
                return
            }

            selected = templates.find(t => t.lang === lang && t.db === db && t.orm === orm)
        }

        if (!selected) {
            const combination = db === 'none' ? `core-${lang}` : `${db}-${orm}-${lang}`
            cancel(`Template not found for combination: \x1b[1m${combination}\x1b[0m`)
            return
        }

        // Copy template
        const templatePath = path.join(TEMPLATES_DIR, selected.dir)
        await copyTemplate(templatePath, targetDir, projectName.trim())

        // Success message with next steps
        const isCurrentDir = path.resolve(targetDir) === cwd
        const cdCommand = isCurrentDir ? '' : `cd ${projectName}\n  `

        note(
            `Now run:\n\n  ${cdCommand}npm install\n  npm run dev`,
            'Project ready'
        )

        outro('Done.')

    } catch (error) {
        cancel(`✖ An unexpected error occurred: ${error.message}`)
    }
}
