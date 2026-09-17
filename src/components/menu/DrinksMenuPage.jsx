import MenuGallery from './MenuGallery'
import { drinkImages } from '../../data/menuImages'
import fixedMenuImage from '../../assets/Screenshot 2026-09-17 122018.png'
import { drinksMenu, drinksInformation } from '../../data/drinksData'

function DrinksMenuPage() {
    return (
        <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            <MenuGallery
                images={drinkImages}
                title="Drinks"
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
                            IL MENU
                        </p>

                        <h2 className="font-serif-luxury text-4xl md:text-6xl">
                            Нашата карта на пијалоци
                        </h2>

                        <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
                            Избрана колекција на италијански и светски вина,
                            шампањ, коктели, жестоки пијалоци и безалкохолни
                            пијалоци за секој момент во Salvatore.
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
                        Drinks Menu
                    </h2>

                </div>

                <div className="space-y-20">

                    {drinksMenu.map((category) => (
                        <section key={category.category}>

                            <div className="mb-8 border-b border-[var(--accent-gold)]/30 pb-4">
                                <h3 className="font-serif-luxury text-2xl text-[var(--accent-gold)] md:text-3xl">
                                    {category.category}
                                </h3>
                            </div>

                            <div>
                                {category.items.map((item) => (
                                    <article
                                        key={`${category.category}-${item[0]}`}
                                        className="border-b border-black/10 py-5 dark:border-white/10"
                                    >

                                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

                                            <div className="max-w-4xl">

                                                <h4 className="font-serif-luxury text-base font-semibold md:text-lg">
                                                    {item[0]}
                                                </h4>

                                                {item[2] && (
                                                    <p className="mt-2 text-sm leading-6 opacity-65">
                                                        {item[2]}
                                                    </p>
                                                )}

                                            </div>

                                            <p className="shrink-0 font-serif-luxury text-base font-semibold md:text-lg">
                                                {item[1]}
                                            </p>

                                        </div>

                                    </article>
                                ))}
                            </div>

                        </section>
                    ))}

                </div>

            </section>

            <section className="bg-[var(--color-salvatore-green)] px-6 py-20 text-white">

                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                            Salvatore
                        </p>

                        <h2 className="mt-3 font-serif-luxury text-3xl md:text-5xl">
                            Важни информации
                        </h2>

                    </div>

                    <div className="mt-12 space-y-6 text-sm leading-7 text-white/75">

                        <p>{drinksInformation.coravin}</p>

                        <p>{drinksInformation.coravinEnglish}</p>

                        <p>{drinksInformation.vat}</p>

                        <p>{drinksInformation.minimumFood}</p>

                        <p>{drinksInformation.service}</p>

                        <p>{drinksInformation.outsideWine}</p>

                        <p>{drinksInformation.outsideChampagne}</p>

                        <p>{drinksInformation.outsideAlcohol}</p>

                        <p>{drinksInformation.byGlass}</p>

                        <p className="pt-4 text-center font-serif-luxury text-[var(--accent-gold)]">
                            {drinksInformation.wifi}
                        </p>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default DrinksMenuPage