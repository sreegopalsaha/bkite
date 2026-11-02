const validateProjectName = (name) => {
    const trimmed = name?.trim()
    if (!trimmed || trimmed.length === 0) {
        return 'Project name is required'
    }

    if (trimmed !== trimmed.toLowerCase()) {
        return 'Project name must be lowercase (npm requirement)'
    }

    if (/^[._-]/.test(trimmed)) {
        return 'Project name cannot start with a dot, underscore, or hyphen'
    }

    if (!/^[a-z0-9-_]+$/.test(trimmed)) {
        return 'Project name can only contain lowercase letters, numbers, hyphens, and underscores'
    }

    if (trimmed.length > 50) {
        return 'Project name must be 50 characters or less'
    }

    return undefined
}

export default validateProjectName;
