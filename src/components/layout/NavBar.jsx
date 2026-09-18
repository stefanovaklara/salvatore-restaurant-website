import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { translations } from '../../data/translations'
import logo from '../../assets/logo.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const { isDarkMode, toggleTheme } = useTheme()
    const { language, changeLanguage, languages } = useLanguage()

    const t = translations[language]

    const navItems = [
        { label: t.home, href: '/' },
        { label: t.menu, href: '/#menu' },
        { label: t.matchmaker, href: '/#matchmaker' },
        { label: t.usefulInformation, href: '/#useful-information' },
        { label: t.vouchers, href: '/#vouchers' },
        { label: t.contact, href: '/#contact' },
    ]

    const handleNavigation = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black">
            <div className="flex w-full items-center justify-between px-6 py-3 md:px-8">

                <a
                    href="/"
                    onClick={handleNavigation}
                    className="flex items-center"
                    aria-label="Salvatore home"
                >
                    <img
                        src={logo}
                        alt="Salvatore"
                        className="h-12 w-auto object-contain"
                    />
                </a>

                <div className="hidden items-center justify-end gap-5 md:flex">

                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-white transition hover:text-[#D4AF37]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="flex items-center gap-2">
                        <Globe
                            size={18}
                            className="text-[#D4AF37]"
                        />

                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="cursor-pointer bg-black text-sm font-medium text-white outline-none"
                        >
                            {languages.map((lang) => (
                                <option
                                    key={lang}
                                    value={lang}
                                    className="bg-black text-white"
                                >
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        title={isDarkMode ? t.dayMode : t.nightMode}
                        className="cursor-pointer rounded-full p-2 text-white transition hover:text-[#D4AF37]"
                    >
                        {isDarkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    <a
                        href="/#reservations"
                        className="rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:scale-105"
                    >
                        {t.reserve}
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer text-white transition hover:text-[#D4AF37] md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">

                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleNavigation}
                                className="text-base font-medium text-white transition hover:text-[#D4AF37]"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="/#reservations"
                            onClick={handleNavigation}
                            className="w-fit rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black"
                        >
                            {t.reserve}
                        </a>

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
                                    className={`cursor-pointer text-sm font-medium transition ${
                                        language === lang
                                            ? 'text-[#D4AF37]'
                                            : 'text-white hover:text-[#D4AF37]'
                                    }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex w-fit cursor-pointer items-center gap-2 text-sm text-white transition hover:text-[#D4AF37]"
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