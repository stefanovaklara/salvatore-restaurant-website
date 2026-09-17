import { ArrowRight, Utensils, Wine } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function DigitalMenu() {
    const { language } = useLanguage()

    const goToMenu = (type) => {
        window.history.pushState({}, '', `/${type}`)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const content = {
        MK: {
            eyebrow: 'IL MENU',
            title: 'Менито на Salvatore',
            description:
                'Откријте внимателно подготвена селекција на италијански вкусови, инспирирани од традицијата и современата гастрономија.',
            food: 'Храна',
            foodText: 'Истражете ја нашата кујна',
            drinks: 'Пијалоци',
            drinksText: 'Откријте ја нашата карта на пијалоци',
            explore: 'Истражи',
        },

        EN: {
            eyebrow: 'IL MENU',
            title: 'Salvatore Menu',
            description:
                'Discover a carefully prepared selection of Italian flavours inspired by tradition and contemporary gastronomy.',
            food: 'Food',
            foodText: 'Explore our cuisine',
            drinks: 'Drinks',
            drinksText: 'Discover our drinks selection',
            explore: 'Explore',
        },

        IT: {
            eyebrow: 'IL MENU',
            title: 'Il Menu di Salvatore',
            description:
                'Scopri una selezione curata di sapori italiani ispirati alla tradizione e alla gastronomia contemporanea.',
            food: 'Cucina',
            foodText: 'Scopri la nostra cucina',
            drinks: 'Bevande',
            drinksText: 'Scopri la nostra selezione di bevande',
            explore: 'Scopri',
        },

        FR: {
            eyebrow: 'IL MENU',
            title: 'Menu Salvatore',
            description:
                'Découvrez une sélection raffinée de saveurs italiennes inspirées de la tradition et de la gastronomie contemporaine.',
            food: 'Cuisine',
            foodText: 'Découvrir notre cuisine',
            drinks: 'Boissons',
            drinksText: 'Découvrir notre sélection',
            explore: 'Découvrir',
        },

        DE: {
            eyebrow: 'IL MENU',
            title: 'Salvatore Speisekarte',
            description:
                'Entdecken Sie eine sorgfältig zusammengestellte Auswahl italienischer Aromen.',
            food: 'Küche',
            foodText: 'Unsere Küche entdecken',
            drinks: 'Getränke',
            drinksText: 'Unsere Getränke entdecken',
            explore: 'Entdecken',
        },
    }

    const t = content[language]

    return (
        <section
            id="menu"
            className="bg-[var(--bg-primary)] px-6 py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                        {t.eyebrow}
                    </p>

                    <h2 className="font-serif-luxury text-4xl font-semibold text-[var(--text-primary)] md:text-6xl">
                        {t.title}
                    </h2>

                    <p className="mt-6 text-base leading-8 opacity-70 md:text-lg">
                        {t.description}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    <button
                        type="button"
                        onClick={() => goToMenu('food')}
                        className="group relative min-h-[420px] overflow-hidden border border-[var(--accent-gold)]/30 text-left"
                    >
                        <img
                            src="/src/assets/menu/food/Screenshot 2026-09-17 122300.png"
                            alt="Salvatore Food"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/55" />

                        <div className="relative flex min-h-[420px] flex-col justify-end p-8 md:p-12">

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)]">
                                <Utensils size={24} />
                            </div>

                            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                                Salvatore
                            </p>

                            <h3 className="font-serif-luxury text-4xl text-white md:text-5xl">
                                {t.food}
                            </h3>

                            <p className="mt-3 max-w-md text-white/75">
                                {t.foodText}
                            </p>

                            <div className="mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white">
                                {t.explore}
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-2"
                                />
                            </div>

                        </div>
                    </button>

                    <button
                        type="button"
                        onClick={() => goToMenu('drinks')}
                        className="group relative min-h-[420px] overflow-hidden border border-[var(--accent-gold)]/30 text-left"
                    >
                        <img
                            src="/src/assets/menu/drinks/Screenshot 2026-09-17 122914.png"
                            alt="Salvatore Drinks"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/55" />

                        <div className="relative flex min-h-[420px] flex-col justify-end p-8 md:p-12">

                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)]">
                                <Wine size={24} />
                            </div>

                            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                                Salvatore
                            </p>

                            <h3 className="font-serif-luxury text-4xl text-white md:text-5xl">
                                {t.drinks}
                            </h3>

                            <p className="mt-3 max-w-md text-white/75">
                                {t.drinksText}
                            </p>

                            <div className="mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white">
                                {t.explore}
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-2"
                                />
                            </div>

                        </div>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default DigitalMenu