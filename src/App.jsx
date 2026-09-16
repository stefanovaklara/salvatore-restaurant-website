import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import { useLanguage } from './context/LanguageContext'
import { translations } from './data/translations'


function App() {
    const { language } = useLanguage()
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <section
                    id="menu"
                    className="flex min-h-[50vh] items-center justify-center bg-[var(--color-salvatore-cream)] px-6"
                >
                    <h2 className="text-4xl font-bold text-[var(--color-salvatore-green)]">
                        {translations[language].ourMenu}
                    </h2>
                </section>

                <section
                    id="reservations"
                    className="flex min-h-[40vh] items-center justify-center bg-[var(--color-salvatore-green)] px-6"
                >
                    <h2 className="text-4xl font-bold text-[var(--color-salvatore-gold)]">
                        {translations[language].reservationTitle}
                    </h2>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App