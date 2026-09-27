import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function SecretClub() {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section
            id="secret-club"
            className="bg-[#0A1F1C] px-6 py-16 text-white"
        >
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    {t.exclusiveExperience}
                </p>

                <h2 className="mb-5 text-4xl font-serif">
                    {t.secretClubTitle}
                </h2>

                <p className="mb-8 leading-7 text-gray-300">
                    {t.secretClubDescription}
                </p>

                <button className="rounded-lg border border-[#D4AF37] px-7 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0A1F1C]">
                    {t.joinSecretClub}
                </button>
            </div>
        </section>
    )
}

export default SecretClub