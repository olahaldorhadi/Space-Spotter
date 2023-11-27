export const setItem = (key: string, value: any) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error('Error setting sessionStorage item:', error)
    }
}

export const getItem = (key: string) => {
    try {
        const value = sessionStorage.getItem(key)
        return value ? JSON.parse(value) : null
    } catch (error) {
        console.error('Error getting sessionStorage item:', error)
        return null
    }
}

export const removeItem = (key: string) => {
    try {
        sessionStorage.removeItem(key)
    } catch (error) {
        console.error('Error removing sessionStorage item:', error)
    }
}

export const toggleFavorite = (key: string) => {
    try {
        const currentVal = checkIfFavoriteIsTrue(key)
        const newVal = !currentVal
        setItem(key, newVal)
    } catch (error) {
        console.error('Error toggling favorite in sessionStorage:', error)
    }
}

export const checkIfFavoriteIsTrue = (key: string) => {
    try {
        return getItem(key) || false
    } catch (error) {
        console.error(
            'Error checking if favorite is true in sessionStorage:',
            error
        )
    }
}
