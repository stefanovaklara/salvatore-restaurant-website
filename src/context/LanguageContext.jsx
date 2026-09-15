import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const languages = ['MK', 'EN', 'IT', 'FR', 'DE']

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('MK')

    const changeLanguage = (newLanguage) => {
        if (languages.includes(newLanguage)) {
            setLanguage(newLanguage)
        }
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
                languages,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}