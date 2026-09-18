import { useLanguage } from '../../context/LanguageContext'

const informationTranslations = {
    MK: {
        sectionLabel: 'Salvatore',
        title: 'Корисни информации',
        subtitle: 'Информации за гостите',
        code: 'Кодекс',
        dressCode: 'Кодекс на облекување',
        dressCodeText1:
            'Не се дозволени спортски шорцеви, апостолки и гумени сандали.',
        dressCodeText2:
            'Влегувањето во ресторанот со капути и јакни не е дозволено. Ве молиме користете ја гардеробата.',
        valet: 'Valet Parking',
        valetText:
            'За гостите на ресторанот е достапна valet parking услуга.',
        terrace: 'Тераса',
        terraceText:
            'Ресторанот располага со отворена тераса за пријатно уживање во амбиентот.',
        cigars: 'Пури',
        cigarsText:
            'Достапен е простор наменет за уживање во пури.',
        lounge: 'Lounge',
        loungeText:
            'Lounge просторот е наменет за опуштено дружење и уживање.',
        liveMusic: 'Музика во живо и DJ',
        liveMusicText:
            'Во ресторанот има музика во живо и DJ настапи.',
        children: 'Прикладно за деца',
        childrenText:
            'Деца од сите возрасти се добредојдени во ресторанот. Деца од 0 до 10 години можат да влезат во ресторанот до 22:00 часот.',
        accessibility: 'Пристапно за лица со намалена подвижност',
        accessibilityText:
            'Ресторанот е пристапен за лица со намалена подвижност.',
        pets: 'Дозволено со миленици',
        petsText:
            'Кучиња се дозволени само во отворениот простор на ресторанот за време на ручекот, односно до 19:00 часот.',
    },

    EN: {
        sectionLabel: 'Salvatore',
        title: 'Useful Information',
        subtitle: 'Guest Information',
        code: 'Code of Conduct',
        dressCode: 'Dress Code',
        dressCodeText1:
            'Sports shorts, flip-flops and rubber sandals are not permitted.',
        dressCodeText2:
            'Entering the restaurant with coats and jackets is not permitted. Please use the cloakroom.',
        valet: 'Valet Parking',
        valetText:
            'Valet parking service is available for restaurant guests.',
        terrace: 'Terrace',
        terraceText:
            'The restaurant features an outdoor terrace for guests to enjoy the atmosphere.',
        cigars: 'Cigars',
        cigarsText:
            'A dedicated space is available for enjoying cigars.',
        lounge: 'Lounge',
        loungeText:
            'The lounge area is designed for relaxed socializing and enjoyment.',
        liveMusic: 'Live Music & DJ',
        liveMusicText:
            'The restaurant features live music and DJ performances.',
        children: 'Child Friendly',
        childrenText:
            'Children of all ages are welcome in the restaurant. Children aged 0 to 10 may enter the restaurant until 10:00 PM.',
        accessibility: 'Accessible for People with Reduced Mobility',
        accessibilityText:
            'The restaurant is accessible for people with reduced mobility.',
        pets: 'Pet Friendly',
        petsText:
            'Dogs are allowed only in the outdoor area of the restaurant during lunch, until 7:00 PM.',
    },

    IT: {
        sectionLabel: 'Salvatore',
        title: 'Informazioni utili',
        subtitle: 'Informazioni per gli ospiti',
        code: 'Codice di comportamento',
        dressCode: 'Codice di abbigliamento',
        dressCodeText1:
            'Non sono consentiti pantaloncini sportivi, infradito e sandali di gomma.',
        dressCodeText2:
            'Non è consentito entrare nel ristorante con cappotti e giacche. Si prega di utilizzare il guardaroba.',
        valet: 'Valet Parking',
        valetText:
            'Il servizio di valet parking è disponibile per gli ospiti del ristorante.',
        terrace: 'Terrazza',
        terraceText:
            'Il ristorante dispone di una terrazza all’aperto dove gli ospiti possono godersi l’atmosfera.',
        cigars: 'Sigari',
        cigarsText:
            'È disponibile uno spazio dedicato al consumo di sigari.',
        lounge: 'Lounge',
        loungeText:
            'L’area lounge è pensata per momenti di relax e convivialità.',
        liveMusic: 'Musica dal vivo e DJ',
        liveMusicText:
            'Il ristorante propone musica dal vivo e DJ set.',
        children: 'Adatto ai bambini',
        childrenText:
            'I bambini di tutte le età sono i benvenuti al ristorante. I bambini da 0 a 10 anni possono entrare nel ristorante fino alle 22:00.',
        accessibility: 'Accessibile alle persone con mobilità ridotta',
        accessibilityText:
            'Il ristorante è accessibile alle persone con mobilità ridotta.',
        pets: 'Animali domestici ammessi',
        petsText:
            'I cani sono ammessi esclusivamente nell’area esterna del ristorante durante il pranzo, fino alle 19:00.',
    },

    FR: {
        sectionLabel: 'Salvatore',
        title: 'Informations utiles',
        subtitle: 'Informations pour les clients',
        code: 'Code de conduite',
        dressCode: 'Code vestimentaire',
        dressCodeText1:
            'Les shorts de sport, les tongs et les sandales en caoutchouc ne sont pas autorisés.',
        dressCodeText2:
            'L’entrée au restaurant avec des manteaux et des vestes n’est pas autorisée. Veuillez utiliser le vestiaire.',
        valet: 'Valet Parking',
        valetText:
            'Un service de voiturier est disponible pour les clients du restaurant.',
        terrace: 'Terrasse',
        terraceText:
            'Le restaurant dispose d’une terrasse extérieure où les clients peuvent profiter de l’ambiance.',
        cigars: 'Cigares',
        cigarsText:
            'Un espace dédié est disponible pour déguster des cigares.',
        lounge: 'Lounge',
        loungeText:
            'L’espace lounge est conçu pour se détendre et passer un moment convivial.',
        liveMusic: 'Musique live et DJ',
        liveMusicText:
            'Le restaurant propose de la musique live et des prestations de DJ.',
        children: 'Adapté aux enfants',
        childrenText:
            'Les enfants de tous âges sont les bienvenus au restaurant. Les enfants de 0 à 10 ans peuvent entrer dans le restaurant jusqu’à 22h00.',
        accessibility: 'Accessible aux personnes à mobilité réduite',
        accessibilityText:
            'Le restaurant est accessible aux personnes à mobilité réduite.',
        pets: 'Animaux domestiques autorisés',
        petsText:
            'Les chiens sont autorisés uniquement dans l’espace extérieur du restaurant pendant le déjeuner, jusqu’à 19h00.',
    },

    DE: {
        sectionLabel: 'Salvatore',
        title: 'Nützliche Informationen',
        subtitle: 'Informationen für Gäste',
        code: 'Verhaltenskodex',
        dressCode: 'Kleiderordnung',
        dressCodeText1:
            'Sportshorts, Flip-Flops und Gummisandalen sind nicht erlaubt.',
        dressCodeText2:
            'Das Betreten des Restaurants mit Mänteln und Jacken ist nicht gestattet. Bitte benutzen Sie die Garderobe.',
        valet: 'Valet Parking',
        valetText:
            'Für die Gäste des Restaurants steht ein Valet-Parkservice zur Verfügung.',
        terrace: 'Terrasse',
        terraceText:
            'Das Restaurant verfügt über eine Außenterrasse, auf der die Gäste die Atmosphäre genießen können.',
        cigars: 'Zigarren',
        cigarsText:
            'Ein eigener Bereich zum Genießen von Zigarren steht zur Verfügung.',
        lounge: 'Lounge',
        loungeText:
            'Der Lounge-Bereich ist zum Entspannen und geselligen Beisammensein gedacht.',
        liveMusic: 'Live-Musik & DJ',
        liveMusicText:
            'Im Restaurant gibt es Live-Musik und DJ-Auftritte.',
        children: 'Kinderfreundlich',
        childrenText:
            'Kinder jeden Alters sind im Restaurant willkommen. Kinder von 0 bis 10 Jahren dürfen das Restaurant bis 22:00 Uhr betreten.',
        accessibility: 'Barrierefrei für Personen mit eingeschränkter Mobilität',
        accessibilityText:
            'Das Restaurant ist für Personen mit eingeschränkter Mobilität zugänglich.',
        pets: 'Haustiere erlaubt',
        petsText:
            'Hunde sind nur im Außenbereich des Restaurants während des Mittagessens bis 19:00 Uhr erlaubt.',
    },
}

function UsefulInformation() {
    const { language } = useLanguage()

    const t =
        informationTranslations[language] ||
        informationTranslations.MK

    const information = [
        {
            title: t.valet,
            text: t.valetText,
        },
        {
            title: t.terrace,
            text: t.terraceText,
        },
        {
            title: t.cigars,
            text: t.cigarsText,
        },
        {
            title: t.lounge,
            text: t.loungeText,
        },
        {
            title: t.liveMusic,
            text: t.liveMusicText,
        },
        {
            title: t.children,
            text: t.childrenText,
        },
        {
            title: t.accessibility,
            text: t.accessibilityText,
        },
        {
            title: t.pets,
            text: t.petsText,
        },
    ]

    return (
        <section
            id="useful-information"
            className="bg-[var(--color-salvatore-cream)] px-6 py-24"
        >
            <div className="mx-auto max-w-5xl">

                <div className="mb-16 text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                        {t.sectionLabel}
                    </p>

                    <h2 className="mt-3 font-serif-luxury text-4xl text-[var(--color-salvatore-green)] md:text-6xl">
                        {t.title}
                    </h2>

                    <div className="mx-auto mt-6 h-px w-20 bg-[var(--accent-gold)]" />
                </div>

                <div className="border-y border-[var(--accent-gold)]/30">

                    <div className="px-4 py-10 md:px-8">
                        <p className="mb-3 text-center text-xs uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                            {t.subtitle}
                        </p>

                        <h3 className="text-center font-serif-luxury text-3xl text-[var(--color-salvatore-green)] md:text-4xl">
                            {t.code}
                        </h3>
                    </div>

                    <div className="border-t border-[var(--accent-gold)]/20">

                        <article className="px-4 py-8 md:px-8">
                            <h4 className="font-serif-luxury text-2xl text-[var(--color-salvatore-green)]">
                                {t.dressCode}
                            </h4>

                            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-primary)]/75 md:text-base">
                                <p>
                                    {t.dressCodeText1}
                                </p>

                                <p>
                                    {t.dressCodeText2}
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