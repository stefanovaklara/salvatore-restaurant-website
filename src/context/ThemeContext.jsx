import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const THEME_STORAGE_KEY = 'salvatore-theme'

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

        // Dark mode is the default for first-time visitors.
        if (savedTheme === null) {
            return true
        }

        return savedTheme === 'dark'
    })

    useEffect(() => {
        const root = document.documentElement

        if (isDarkMode) {
            root.classList.add('dark')
            localStorage.setItem(THEME_STORAGE_KEY, 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem(THEME_STORAGE_KEY, 'light')
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode((previousTheme) => !previousTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
