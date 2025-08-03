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

            targetDir = path.join(cwd, projectName.trim())
        } else {
            // If argument provided, validate it first
            if (targetDir !== '.') {
                const validationError = validateProjectName(targetDir)
                if (validationError) {
                    cancel(`Invalid project name "${targetDir}": ${validationError}`)
                    return
                }
                projectName = targetDir
                targetDir = path.join(cwd, targetDir)
            } else {
                // Using current directory - validate the directory name
                projectName = path.basename(cwd)
                const validationError = validateProjectName(projectName)
                if (validationError) {
                    cancel(`Invalid current directory name "${projectName}": ${validationError}`)
                    return
                }
                targetDir = '.'
            }
        }

        // Check if directory exists and is not empty
        if (targetDir !== '.' && existsSync(targetDir)) {
            const files = readdirSync(targetDir)
            if (files.length > 0) {
                const overwrite = await confirm({
                    message: `Directory "${projectName}" is not empty. Overwrite?`,
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
        const isCurrentDir = targetDir === '.'
        const cdCommand = isCurrentDir ? '' : `cd ${projectName}\n  `

        note(
            `Now run:\n\n  ${cdCommand}npm install\n  npm dev`,
            'Project ready'
        )

        outro('Done.')

    } catch (error) {
        cancel(`✖ An unexpected error occurred: ${error.message}`)
    }
}
