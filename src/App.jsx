import Reservation from './components/booking/Reservation'
import SecretClub from './components/booking/SecretClub'
import GiftCard from './components/booking/GiftCard'
import Location from './components/booking/Location'

import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import NavBar from './components/layout/NavBar'
import UsefulInformation from './components/layout/UsefulInformation'

import Esperienza from './components/layout/Esperienza'
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
            window.removeEventListener(
                'popstate',
                handlePopState
            )
        }
    }, [])

    if (path === '/food') {
        return (
            <>
            <NavBar />
                <FoodMenuPage />
                <Footer />
            </>
        )
    }

    if (path === '/drinks') {
        return (
            <>
            <NavBar />
                <DrinksMenuPage />
                <Footer />
            </>
        )
    }

    return (
        <>
            <NavBar />

            <main>
                <Hero />

                <DigitalMenu />

                <Esperienza />

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