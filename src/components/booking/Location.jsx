function Location() {
    return (
        <section id="location" className="bg-[#0A1F1C] px-6 py-16 text-white">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                        Find Us
                    </p>

                    <h2 className="text-4xl font-serif">
                        Location & Contact
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="text-center">
                        <h3 className="mb-5 text-2xl font-serif text-[#D4AF37]">
                            Salvatore Skopje
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Skopje, North Macedonia
                            </p>

                            <p>
                                Contact: +389 70 248 248
                            </p>

                            <p>
                                Email: info@salvatore.mk
                            </p>

                            <div className="pt-2">
                                <p className="font-medium text-white">
                                    Opening Hours
                                </p>

                                <p className="mt-2 text-sm leading-7 text-[var(--color-salvatore-cream)]/70">
                                    Monday – Thursday: 12:00 – 00:00<br />
                                    Friday, Saturday & Public Holidays: 12:00 – 01:00<br />
                                    Sunday: 12:00 – 00:00
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-[#163a34] p-8 text-center">
                        <div>
                            <p className="mb-4 text-5xl"></p>

                            <h3 className="mb-3 text-xl font-serif">
                                Visit Salvatore
                            </h3>

                            <p className="mb-6 text-gray-300">
                                Find us in the heart of Skopje.
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
    );
}

export default Location;