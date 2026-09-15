import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        const hour = new Date().getHours()
        return hour >= 18 || hour < 6
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])

    const toggleTheme = () => {
        setIsDark((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}