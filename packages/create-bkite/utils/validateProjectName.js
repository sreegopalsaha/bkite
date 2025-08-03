const validateProjectName = (name) => {
    if (!name || name.trim().length === 0) {
        return 'Project name is required'
    }

    if (!/^[a-zA-Z0-9-_]+$/.test(name.trim())) {
        return 'Project name can only contain letters, numbers, hyphens, and underscores'
    }

    if (name.trim().length > 50) {
        return 'Project name must be 50 characters or less'
    }

    return undefined
}

export default validateProjectName;
