import { ArrowDown, CalendarDays } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Hero() {
    const { language } = useLanguage()
    const t = translations[language]
    return (
        <section
            id="home"
            className="flex min-h-screen items-center justify-center bg-[var(--color-salvatore-green)] px-6 pt-20 text-[var(--color-salvatore-cream)]"
        >
            <div className="mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--color-salvatore-gold)]">
                    {t.subtitle}
                </p>

                <h1 className="text-5xl font-bold tracking-wide sm:text-6xl md:text-8xl">
                    Salvatore
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-salvatore-cream)]/80 md:text-xl">
                    {t.heroDescription}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#reservations"
                        className="flex items-center gap-2 bg-[var(--color-salvatore-gold)] px-7 py-3 font-semibold text-[var(--color-salvatore-green)] transition hover:scale-105"
                    >
                        <CalendarDays size={18} />
                        {t.reserve}
                    </a>

                    <a
                        href="#menu"
                        className="border border-[var(--color-salvatore-gold)] px-7 py-3 font-semibold text-[var(--color-salvatore-cream)] transition hover:bg-[var(--color-salvatore-gold)] hover:text-[var(--color-salvatore-green)]"
                    >
                        {t.explore}
                    </a>
                </div>

                <a
                    href="#menu"
                    className="mt-16 inline-flex animate-bounce text-[var(--color-salvatore-gold)]"
                    aria-label="Scroll to menu"
                >
                    <ArrowDown size={24} />
                </a>
            </div>
        </section>
    )
}

export default Hero