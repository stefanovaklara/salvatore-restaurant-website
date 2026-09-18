import { useEffect, useState } from 'react'
import { foodImages, drinkImages } from '../../data/menuImages'

function getRandomImage(images, previousImage = '') {
    if (!images.length) return ''

    const available = images.filter((image) => image !== previousImage)

    return available[Math.floor(Math.random() * available.length)]
}

function MenuCard({ title, description, images, onClick }) {
    const [image, setImage] = useState(() => getRandomImage(images))

    useEffect(() => {
        if (!images.length) return

        const interval = setInterval(() => {
            setImage((previousImage) =>
                getRandomImage(images, previousImage)
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [images])

    return (
        <button
            type="button"
            onClick={onClick}
            className="group relative aspect-square w-full cursor-pointer overflow-hidden text-left"
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">

                    <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[var(--accent-gold)]">
                        IL MENU
                    </p>

                    <h3 className="font-serif-luxury text-4xl md:text-5xl">
                        {title}
                    </h3>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/80">
                        {description}
                    </p>

                    <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                        View menu
                    </p>

                </div>
            </div>
        </button>
    )
}

function DigitalMenu() {
    const navigateTo = (path) => {
        window.history.pushState({}, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
        <section
            id="menu"
            className="bg-[var(--color-salvatore-cream)] px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-12 text-center">

                    <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                        Salvatore
                    </p>

                    <h2 className="mt-3 font-serif-luxury text-4xl text-[var(--color-salvatore-green)] md:text-5xl">
                        Нашето мени
                    </h2>

                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    <MenuCard
                        title="Food"
                        description="Discover our Italian cuisine and traditional dishes."
                        images={foodImages}
                        onClick={() => navigateTo('/food')}
                    />

                    <MenuCard
                        title="Drinks"
                        description="Explore our selection of wines, cocktails and spirits."
                        images={drinkImages}
                        onClick={() => navigateTo('/drinks')}
                    />

                </div>

            </div>
        </section>
    )
}

export default DigitalMenu