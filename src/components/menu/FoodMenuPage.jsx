import { useMemo } from 'react'
import MenuGallery from './MenuGallery'
import { foodImages } from '../../data/menuImages'
import fixedMenuImage from '../../assets/Screenshot 2026-09-17 122018.png'
import {
    getFoodMenu,
    getExtraSupplements,
    getMenuInformation
} from '../../data/salvatoreData'
// ВНИМАНИЕ: прилагоди ги патеките според твојот проект
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function FoodMenuPage() {
    const { language } = useLanguage()
    const t = translations[language] ?? translations.MK

    const foodMenu = useMemo(() => getFoodMenu(language), [language])
    const extraSupplements = useMemo(() => getExtraSupplements(language), [language])
    const menuInformation = useMemo(() => getMenuInformation(language), [language])

    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            <MenuGallery
                images={foodImages}
                title={t.food}
            />

            <section className="relative overflow-hidden">
                <img
                    src={fixedMenuImage}
                    alt="Salvatore restaurant"
                    className="h-[420px] w-full object-cover md:h-[500px]"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="max-w-3xl text-center text-white">

                        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">

                        </p>

                        <h2 className="font-serif-luxury text-4xl md:text-6xl">
                            {t.ourFoodMenu}
                        </h2>

                        <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
                            {t.foodDescription}
                        </p>

                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">

                <div className="mb-16 text-center">

                    <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                        Salvatore
                    </p>

                    <h2 className="mt-3 font-serif-luxury text-4xl md:text-6xl">
                        {t.foodMenu}
                    </h2>

                </div>

                <div className="space-y-20">

                    {foodMenu.map((category) => (
                        <section key={category.category}>

                            <div className="mb-8 flex items-end justify-between border-b border-[var(--accent-gold)]/30 pb-4">
                                <h3 className="font-serif-luxury text-2xl text-[var(--accent-gold)] md:text-3xl">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="space-y-0">

                                {category.items.map((item) => (
                                    <article
                                        key={item.name}
                                        className="border-b border-black/10 py-6 dark:border-white/10"
                                    >

                                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                                            <div className="max-w-4xl">

                                                <h4 className="font-serif-luxury text-lg font-semibold md:text-xl">
                                                    {item.name}
                                                </h4>

                                                {item.description && (
                                                    <p className="mt-2 max-w-3xl text-sm leading-7 opacity-70 md:text-base">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {item.note && (
                                                    <p className="mt-2 text-xs italic text-[var(--accent-gold)]">
                                                        {item.note}
                                                    </p>
                                                )}

                                                {item.allergens.length > 0 && (
                                                    <div className="mt-4 flex flex-wrap gap-2">

                                                        {item.allergens.map((allergen) => (
                                                            <span
                                                                key={allergen}
                                                                className="border border-[var(--accent-gold)]/30 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--accent-gold)]"
                                                            >
                                                                {allergen}
                                                            </span>
                                                        ))}

                                                    </div>
                                                )}

                                            </div>

                                            <div className="shrink-0 text-left md:text-right">

                                                <p className="font-serif-luxury text-lg font-semibold md:text-xl">
                                                    {item.price}
                                                </p>

                                            </div>

                                        </div>

                                    </article>
                                ))}

                            </div>

                        </section>
                    ))}

                </div>

                <section className="mt-20 border border-[var(--accent-gold)]/30 p-6 md:p-10">

                    <h3 className="font-serif-luxury text-2xl uppercase text-[var(--accent-gold)]">
                        {t.extraSupplement}
                    </h3>

                    <div className="mt-6 space-y-3">

                        {extraSupplements.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/10"
                            >
                                <span className="text-sm md:text-base">
                                    {item.name}
                                </span>

                                <span className="font-serif-luxury">
                                    {item.price}
                                </span>
                            </div>
                        ))}

                    </div>

                </section>

            </section>

            <section className="bg-[var(--color-salvatore-green)] px-6 py-20 text-white">

                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                            {t.importantInformation}
                        </p>

                        <h2 className="mt-3 font-serif-luxury text-3xl md:text-5xl">
                            {t.importantMenuInformation}
                        </h2>

                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2">

                        <div className="border border-white/10 p-6">
                            <h3 className="font-serif-luxury text-xl text-[var(--accent-gold)]">
                                {t.pricesAndService}
                            </h3>

                            <div className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                                <p>{menuInformation.vat}</p>
                                <p>{menuInformation.minimumOrder}</p>
                                <p>{menuInformation.service}</p>
                            </div>
                        </div>

                        <div className="border border-white/10 p-6">
                            <h3 className="font-serif-luxury text-xl text-[var(--accent-gold)]">
                                {t.allergies}
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/75">
                                {menuInformation.allergies}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 border border-white/10 p-6">

                        <h3 className="font-serif-luxury text-xl text-[var(--accent-gold)]">
                            {t.allergens}
                        </h3>

                        <div className="mt-5 flex flex-wrap gap-3">

                            {menuInformation.allergens.map((allergen) => (
                                <span
                                    key={allergen}
                                    className="border border-[var(--accent-gold)]/40 px-4 py-2 text-xs uppercase tracking-[0.1em] text-white/80"
                                >
                                    {allergen}
                                </span>
                            ))}

                        </div>

                    </div>

                    <div className="mt-8 border border-white/10 p-6">

                        <h3 className="font-serif-luxury text-xl text-[var(--accent-gold)]">
                            {t.kitchenProducts}
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                            {menuInformation.products.map((product) => (
                                <li key={product}>
                                    • {product}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="mt-8 border border-white/10 p-6">

                        <h3 className="font-serif-luxury text-xl text-[var(--accent-gold)]">
                            {t.onTheTable}
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">
                            {menuInformation.tableNotes.map((note) => (
                                <li key={note}>
                                    • {note}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default FoodMenuPage