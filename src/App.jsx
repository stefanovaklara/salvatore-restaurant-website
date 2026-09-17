import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import FoodMenuPage from './components/menu/FoodMenuPage'
import DrinksMenuPage from './components/menu/DrinksMenuPage'
import DigitalMenu from './components/menu/DigitalMenu'
import { useLanguage } from './context/LanguageContext'
import { translations } from './data/translations'
import { useEffect, useState } from 'react'

function App() {
    const { language } = useLanguage()
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [])

    if (path === '/food') {
        return (
            <>
                <Navbar />
                <FoodMenuPage />
                <Footer />
            </>
        )
    }

    if (path === '/drinks') {
        return (
            <>
                <Navbar />
                <DrinksMenuPage />
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <DigitalMenu />

                <section
                    id="reservations"
                    className="flex min-h-[40vh] items-center justify-center bg-[var(--color-salvatore-green)] px-6"
                >
                    <h2 className="font-serif-luxury text-4xl text-[var(--color-salvatore-gold)]">
                        {translations[language].reservationTitle}
                    </h2>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App