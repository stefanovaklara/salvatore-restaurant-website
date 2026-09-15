import {Globe, Menu, Moon, Sun, X} from 'lucide-react'
import {useState} from 'react'
import {useLanguage} from '../../context/LanguageContext'
import {useTheme} from '../../context/ThemeContext'
import {translations} from '../../data/translations'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const {isDarkMode, toggleTheme} = useTheme()
    const {language, changeLanguage, languages} = useLanguage()
    const t = translations[language]

    const navItems = [
        {label: t.home, href: '#home'},
        {label: t.menu, href: '#menu'},
        {label: t.matchmaker, href: '#matchmaker'},
        {label: t.story, href: '#story'},
        {label: t.vouchers, href: '#vouchers'},
        {label: t.contact, href: '#contact'},
    ]

    const handleNavigation = () => {
        setIsOpen(false)
    }

    return (
        <nav
            className="fixed top-0 z-50 w-full border-b border-[var(--color-salvatore-gold)]/30 bg-[var(--color-salvatore-cream)]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-[0.2em] text-[var(--color-salvatore-green)]"
                >
                    SALVATORE
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-[var(--color-salvatore-green)] transition hover:text-[var(--color-salvatore-gold)]"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Language selector */}
                    <div className="flex items-center gap-2">
                        <Globe size={18} className="text-[var(--color-salvatore-gold)]"/>

                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="cursor-pointer bg-transparent text-sm font-medium text-[var(--color-salvatore-green)] outline-none"
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
                        className="rounded-full p-2 text-[var(--color-salvatore-green)] transition hover:text-[var(--color-salvatore-gold)]"
                    >
                        {isDarkMode ? <Sun size={20}/> : <Moon size={20}/>}
                    </button>

                    {/* Reserve button */}
                    <a
                        href="#reservations"
                        className="rounded-full bg-[var(--color-salvatore-gold)] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-salvatore-green)] transition hover:scale-105"
                    >
                        {t.reserve}
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[var(--color-salvatore-green)] md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    className="border-t border-[var(--color-salvatore-gold)]/20 bg-[var(--color-salvatore-cream)] px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">

                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleNavigation}
                                className="text-base font-medium text-[var(--color-salvatore-green)] transition hover:text-[var(--color-salvatore-gold)]"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="#reservations"
                            onClick={handleNavigation}
                            className="w-fit rounded-full bg-[var(--color-salvatore-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-salvatore-green)]"
                        >
                            {t.reserve}
                        </a>

                        {/* Mobile language selector */}
                        <div className="flex items-center gap-3">
                            <Globe
                                size={18}
                                className="text-[var(--color-salvatore-gold)]"
                            />

                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    type="button"
                                    onClick={() => changeLanguage(lang)}
                                    className={`text-sm font-medium transition ${
                                        language === lang
                                            ? 'text-[var(--color-salvatore-gold)]'
                                            : 'text-[var(--color-salvatore-green)]'
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
                            className="flex w-fit items-center gap-2 text-sm text-[var(--color-salvatore-green)]"
                        >
                            {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
                            {isDarkMode ? t.dayMode : t.nightMode}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar