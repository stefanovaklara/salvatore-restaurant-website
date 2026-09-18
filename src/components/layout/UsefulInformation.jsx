function UsefulInformation() {
    const information = [
        {
            title: 'Valet Parking',
            text: 'За гостите на ресторанот е достапна valet parking услуга.'
        },
        {
            title: 'Тераса',
            text: 'Ресторанот располага со отворена тераса за пријатно уживање во амбиентот.'
        },
        {
            title: 'Пури',
            text: 'Достапен е простор наменет за уживање во пури.'
        },
        {
            title: 'Lounge',
            text: 'Lounge просторот е наменет за опуштено дружење и уживање.'
        },
        {
            title: 'Музика во живо и DJ',
            text: 'Во ресторанот има музика во живо и DJ настапи.'
        },
        {
            title: 'Прикладно за деца',
            text: 'Деца од сите возрасти се добредојдени во ресторанот. Деца од 0 до 10 години можат да влезат во ресторанот до 22:00 часот.'
        },
        {
            title: 'Пристапно за лица со намалена подвижност',
            text: 'Ресторанот е пристапен за лица со намалена подвижност.'
        },
        {
            title: 'Дозволено со миленици',
            text: 'Кучиња се дозволени само во отворениот простор на ресторанот за време на ручекот, односно до 19:00 часот.'
        }
    ]

    return (
        <section
            id="useful-information"
            className="bg-[var(--color-salvatore-cream)] px-6 py-24"
        >
            <div className="mx-auto max-w-5xl">

                <div className="mb-16 text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                        Salvatore
                    </p>

                    <h2 className="mt-3 font-serif-luxury text-4xl text-[var(--color-salvatore-green)] md:text-6xl">
                        Корисни информации
                    </h2>

                    <div className="mx-auto mt-6 h-px w-20 bg-[var(--accent-gold)]" />
                </div>

                <div className="border-y border-[var(--accent-gold)]/30">

                    <div className="px-4 py-10 md:px-8">

                        <p className="mb-3 text-center text-xs uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                            Информации за гостите
                        </p>

                        <h3 className="text-center font-serif-luxury text-3xl text-[var(--color-salvatore-green)] md:text-4xl">
                            Кодекс
                        </h3>

                    </div>

                    <div className="border-t border-[var(--accent-gold)]/20">

                        <article className="px-4 py-8 md:px-8">
                            <h4 className="font-serif-luxury text-2xl text-[var(--color-salvatore-green)]">
                                Кодекс на облекување
                            </h4>

                            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-primary)]/75 md:text-base">
                                <p>
                                    Не се дозволени спортски шорцеви, апостолки и гумени сандали.
                                </p>

                                <p>
                                    Влегувањето во ресторанот со капути и јакни не е дозволено.
                                    Ве молиме користете ја гардеробата.
                                </p>
                            </div>
                        </article>

                    </div>

                    <div className="border-t border-[var(--accent-gold)]/20">

                        {information.map((item, index) => (
                            <article
                                key={item.title}
                                className={`px-4 py-7 md:px-8 md:py-8 ${
                                    index !== information.length - 1
                                        ? 'border-b border-[var(--accent-gold)]/15'
                                        : ''
                                }`}
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-12">

                                    <h4 className="min-w-[280px] font-serif-luxury text-xl text-[var(--color-salvatore-green)] md:text-2xl">
                                        {item.title}
                                    </h4>

                                    <p className="max-w-3xl text-sm leading-7 text-[var(--text-primary)]/75 md:text-base">
                                        {item.text}
                                    </p>

                                </div>
                            </article>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default UsefulInformation