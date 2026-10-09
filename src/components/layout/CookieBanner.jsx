import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)

    const { language } = useLanguage()
    const t = translations[language]

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent')

        if (!cookieConsent) {
            setShowBanner(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setShowBanner(false)
    }

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setShowBanner(false)
    }

    if (!showBanner) {
        return null
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-4xl rounded-2xl border border-[#D4AF37]/30 bg-white p-5 shadow-2xl dark:bg-[#102A26] md:flex md:items-center md:justify-between md:gap-6">
            <div className="mb-4 md:mb-0">
                <h3 className="mb-2 font-serif text-xl font-semibold text-[#1C1917] dark:text-white">
                    {t.cookieTitle}
                </h3>

                <p className="text-sm leading-6 text-[#1C1917]/70 dark:text-white/70">
                    {t.cookieDescription}
                </p>
            </div>

            <div className="flex shrink-0 gap-3">
                <button
                    type="button"
                    onClick={handleDecline}
                    className="rounded-lg border border-[#0A1F1C] px-5 py-2.5 text-sm font-medium text-[#0A1F1C] transition hover:bg-[#0A1F1C] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0A1F1C]"
                >
                    {t.cookieDecline}
                </button>

                <button
                    type="button"
                    onClick={handleAccept}
                    className="rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0A1F1C] transition hover:bg-[#C5A059]"
                >
                    {t.cookieAccept}
                </button>
            </div>
        </div>
    )
}

export default CookieBanner