import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { translations } from '../../data/translations'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const { isDarkMode, toggleTheme } = useTheme()
    const { language, changeLanguage, languages } = useLanguage()

    const t = translations[language]

    const navItems = [
        { label: t.home, href: '#home' },
        { label: t.menu, href: '#menu' },
        { label: t.matchmaker, href: '#matchmaker' },
        { label: t.story, href: '#story' },
        { label: t.vouchers, href: '#vouchers' },
        { label: t.contact, href: '#contact' },
    ]

    const handleNavigation = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-[0.2em] text-black"
                >
                    SALVATORE
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-black transition hover:text-[#D4AF37]"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Language selector */}
                    <div className="flex items-center gap-2">
                        <Globe
                            size={18}
                            className="text-[#D4AF37]"
                        />

                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="cursor-pointer bg-transparent text-sm font-medium text-black outline-none"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Theme toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        title={isDarkMode ? t.dayMode : t.nightMode}
                        className="rounded-full p-2 text-black transition hover:text-[#D4AF37]"
                    >
                        {isDarkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Reserve button */}
                    <a
                        href="#reservations"
                        className="rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:scale-105"
                    >
                        {t.reserve}
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-[#D4AF37]/20 bg-white px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">

                        {/* Mobile navigation */}
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleNavigation}
                                className="text-base font-medium text-black transition hover:text-[#D4AF37]"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Mobile reserve button */}
                        <a
                            href="#reservations"
                            onClick={handleNavigation}
                            className="w-fit rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black"
                        >
                            {t.reserve}
                        </a>

                        {/* Mobile language selector */}
                        <div className="flex items-center gap-3">
                            <Globe
                                size={18}
                                className="text-[#D4AF37]"
                            />

                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    type="button"
                                    onClick={() => changeLanguage(lang)}
                                    className={`text-sm font-medium transition ${
                                        language === lang
                                            ? 'text-[#D4AF37]'
                                            : 'text-black'
                                    }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        {/* Mobile theme toggle */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex w-fit items-center gap-2 text-sm text-black"
                        >
                            {isDarkMode ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}

                            {isDarkMode ? t.dayMode : t.nightMode}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar