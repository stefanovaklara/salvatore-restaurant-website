function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-[var(--color-salvatore-gold)]/30 bg-[var(--color-salvatore-green)] px-6 py-12 text-[var(--color-salvatore-cream)]"
        >
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
                <div>
                    <h2 className="text-2xl font-bold tracking-[0.2em]">
                        SALVATORE
                    </h2>
                    <p className="mt-3 text-sm text-[var(--color-salvatore-cream)]/70">
                        Cucina Italiana • Skopje
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-[var(--color-salvatore-gold)]">
                        Contact
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-salvatore-cream)]/70">
                        Skopje, North Macedonia
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-salvatore-cream)]/70">
                        +389 2 123 4567
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-[var(--color-salvatore-gold)]">
                        Opening Hours
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-salvatore-cream)]/70">
                        Monday – Sunday
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-salvatore-cream)]/70">
                        12:00 – 00:00
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-7xl border-t border-[var(--color-salvatore-gold)]/20 pt-6 text-center text-xs text-[var(--color-salvatore-cream)]/50">
                © {new Date().getFullYear()} Salvatore. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer