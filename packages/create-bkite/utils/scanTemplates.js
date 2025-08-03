import { existsSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const scanTemplates = (TEMPLATES_DIR) => {
    try {
        if (!existsSync(TEMPLATES_DIR)) {
            throw new Error(`Templates directory not found: ${TEMPLATES_DIR}`)
        }

        const dirs = readdirSync(TEMPLATES_DIR).filter(dir => {
            const fullPath = path.join(TEMPLATES_DIR, dir)
            return statSync(fullPath).isDirectory()
        })

        const templates = dirs.map(dir => {
            const parts = dir.split('-')
            if (parts.length === 2 && parts[0] === 'core') {
                return {
                    dir,
                    db: 'none',
                    orm: 'none',
                    lang: parts[1],
                    display: `Core ${parts[1].toUpperCase()}`,
                    description: `Basic ${parts[1]} setup without database`
                }
            }

            if (parts.length === 3) {
                return {
                    dir,
                    db: parts[0],
                    orm: parts[1],
                    lang: parts[2],
                    display: `${parts[2].toUpperCase()} + ${parts[0].toUpperCase()} + ${parts[1].toUpperCase()}`,
                    description: `${parts[2]} with ${parts[0]} database and ${parts[1]} ORM`
                }
            }

            return null
        }).filter(Boolean)

        if (templates.length === 0) {
            throw new Error('No templates found in templates directory')
        }

        return templates
    } catch (error) {
        throw new Error(`Failed to scan templates: ${error.message}`)
    }
}

export default scanTemplates;