import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Location() {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <section id="location" className="bg-[#0A1F1C] px-6 py-16 text-white">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                        {t.findUs}
                    </p>

                    <h2 className="text-4xl font-serif">
                        {t.locationContact}
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="text-center">
                        <h3 className="mb-5 text-2xl font-serif text-[#D4AF37]">
                            Salvatore Skopje
                        </h3>

                        <div className="space-y-4 text-gray-300">
                            <p>{t.location}</p>

                            <p>
                                {t.contact}: +389 70 248 248
                            </p>

                            <p>
                                {t.email}: info@salvatore.mk
                            </p>

                            <div className="pt-2">
                                <p className="font-medium text-white">
                                    {t.openingHours}
                                </p>

                                <p className="mt-2 text-sm leading-7 text-[var(--color-salvatore-cream)]/70">
                                    {t.mondayThursday}
                                    <br />
                                    {t.fridaySaturdayHolidays}
                                    <br />
                                    {t.sunday}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-[#163a34] p-8 text-center">
                        <div>
                            <h3 className="mb-3 text-xl font-serif">
                                {t.visitSalvatore}
                            </h3>

                            <p className="mb-6 text-gray-300">
                                {t.visitDescription}
                            </p>

                            <a
                                href="https://www.google.com/maps/place/Salvatore+Italian+Restaurant/@41.9837484,21.4223475,17z/data=!3m1!4b1!4m6!3m5!1s0x135415b1ff1496e7:0x27bd810dac891cdd!8m2!3d41.9837484!4d21.4223475!16s%2Fg%2F11y5b42l70?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block rounded-lg bg-[#D4AF37] px-6 py-3 font-medium text-[#0A1F1C]"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location