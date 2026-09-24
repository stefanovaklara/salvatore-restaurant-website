import Reservation from "./components/booking/Reservation";
import SecretClub from "./components/booking/SecretClub";
import GiftCard from "./components/booking/GiftCard";
import Location from "./components/booking/Location";

import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import UsefulInformation from './components/layout/UsefulInformation'
import FoodMenuPage from './components/menu/FoodMenuPage'
import DrinksMenuPage from './components/menu/DrinksMenuPage'
import DigitalMenu from './components/menu/DigitalMenu'
import { useEffect, useState } from 'react'

function App() {
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

                <UsefulInformation />

                <Reservation />

                <SecretClub />

                <GiftCard />

                <Location />
            </main>

            <Footer />
        </>
    )
}

export default App