import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import coverImage from '../../assets/cover.webp'
import ambientMusic from '../../assets/ambient.mp3'

function Hero() {
    const { language } = useLanguage()
    const t = translations[language]

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        const audio = new Audio(ambientMusic)

        audio.loop = true
        audio.volume = 0.4

        audioRef.current = audio

        return () => {
            audio.pause()
            audio.currentTime = 0
        }
    }, [])

    const toggleMusic = async () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            try {
                await audioRef.current.play()
                setIsPlaying(true)
            } catch (error) {
                console.error('Could not play audio:', error)
            }
        }
    }

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-white"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${coverImage})`,
                }}
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-[var(--color-salvatore-gold)]">
                    {t.FineItalianDining}
                </span>

                <h1 className="font-serif-luxury text-5xl font-bold tracking-wide sm:text-6xl md:text-8xl">
                    {t.heroTitle}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                    {t.heroDescription}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#reservations"
                        className="rounded-sm bg-[var(--color-salvatore-gold)] px-7 py-3 font-semibold text-[var(--color-salvatore-green)] transition hover:scale-105"
                    >
                        {t.reserveTable}
                    </a>

                    <a
                        href="#menu"
                        className="rounded-sm border border-[var(--color-salvatore-gold)] px-7 py-3 font-semibold text-white transition hover:bg-[var(--color-salvatore-gold)] hover:text-[var(--color-salvatore-green)]"
                    >
                        {t.exploreMenu}
                    </a>
                </div>
            </div>

            <button
                type="button"
                onClick={toggleMusic}
                className="absolute bottom-8 right-6 z-10 flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs text-white backdrop-blur-sm transition hover:border-[var(--color-salvatore-gold)] hover:text-[var(--color-salvatore-gold)]"
                aria-label={isPlaying ? t.musicOn : t.musicOff}
            >
                {isPlaying ? (
                    <Volume2 size={16} />
                ) : (
                    <VolumeX size={16} />
                )}

                {isPlaying ? t.musicOn : t.musicOff}
            </button>
        </section>
    )
}

export default Hero