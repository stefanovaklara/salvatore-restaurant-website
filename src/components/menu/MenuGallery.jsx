import { useEffect, useState } from 'react'

function getRandomImages(images, count = 3, previousImages = []) {
    if (!images.length) return []

    const availableImages = images.filter(
        (image) => !previousImages.includes(image)
    )

    const source = availableImages.length >= count
        ? availableImages
        : images

    const shuffled = [...source].sort(() => Math.random() - 0.5)

    return shuffled.slice(0, Math.min(count, images.length))
}

function MenuGallery({ images, title }) {
    const [visibleImages, setVisibleImages] = useState(() =>
        getRandomImages(images)
    )

    useEffect(() => {
        if (!images.length) return

        setVisibleImages(getRandomImages(images))

        const interval = setInterval(() => {
            setVisibleImages((previousImages) =>
                getRandomImages(images, 3, previousImages)
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [images])

    if (!images.length) {
        return null
    }

    return (
        <section className="bg-[var(--color-salvatore-green)] px-6 py-12 md:py-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center">

                <div className="flex w-full items-center justify-center gap-4 md:gap-8">

                    {visibleImages.map((image, index) => (
                        <div
                            key={`${image}-${index}`}
                            className="relative aspect-square w-[28vw] max-w-[360px] min-w-0 overflow-hidden"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="h-full w-full object-cover transition-all duration-1000"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            {index === 1 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-[var(--accent-gold)] md:text-sm">
                                            Salvatore
                                        </p>

                                        <h1 className="font-serif-luxury text-4xl md:text-6xl lg:text-7xl">
                                            {title}
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

                <div className="mt-8 flex items-center gap-2">
                    {visibleImages.map((image, index) => (
                        <span
                            key={`${image}-dot`}
                            className={`h-1 transition-all duration-500 ${
                                index === 1
                                    ? 'w-10 bg-[var(--accent-gold)]'
                                    : 'w-5 bg-white/40'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default MenuGallery