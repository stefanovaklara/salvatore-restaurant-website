import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { translations } from '../../data/translations'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()
    const { language, changeLanguage, languages } = useLanguage()
    const t = translations[language]

    const navItems = [
        { label: t.home, href: '#home' },
        { label: t.menu, href: '#menu' },
        { label: t.story, href: '#story' },
        { label: t.reservations, href: '#reservations' },
        { label: t.contact, href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-[var(--color-salvatore-gold)]/30 bg-[var(--color-salvatore-cream)]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-[0.2em] text-[var(--color-salvatore-green)]"
                >
                    SALVATORE
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-[var(--color-salvatore-green)] transition hover:text-[var(--color-salvatore-gold)]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <select
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="bg-transparent text-sm font-medium text-[var(--color-salvatore-green)] outline-none"
                        aria-label="Select language"
                    >
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="text-[var(--color-salvatore-green)] transition hover:text-[var(--color-salvatore-gold)]"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[var(--color-salvatore-green)] md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-[var(--color-salvatore-gold)]/30 bg-[var(--color-salvatore-cream)] px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-[var(--color-salvatore-green)]"
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4">
                            <select
                                value={language}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="bg-transparent text-[var(--color-salvatore-green)] outline-none"
                                aria-label="Select language"
                            >
                                {languages.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang}
                                    </option>
                                ))}
                            </select>

                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="text-[var(--color-salvatore-green)]"
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar