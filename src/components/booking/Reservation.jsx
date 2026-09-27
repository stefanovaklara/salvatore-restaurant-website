import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function Reservation() {
    const { language } = useLanguage()
    const t = translations[language]

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '2',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(
            `Reservation received for ${formData.name} on ${formData.date} at ${formData.time}.`
        )
    }

    return (
        <section id="reservation" className="bg-[#FDFBF7] px-6 py-16">
            <div className="mx-auto max-w-3xl">
                <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    {t.reservationTitle}
                </p>

                <h2 className="mb-3 text-center text-4xl font-serif text-[#0A1F1C]">
                    {t.reservationHeading}
                </h2>

                <p className="mb-10 text-center text-gray-600">
                    {t.reservationDescription}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-5 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            {t.name}
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#D4AF37]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            {t.numberOfGuests}
                        </label>

                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 p-3"
                        >
                            {Array.from({ length: 8 }, (_, index) => {
                                const number = index + 1

                                return (
                                    <option key={number} value={number}>
                                        {number}{' '}
                                        {number === 1 ? t.guest : t.guests}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            {t.date}
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 p-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            {t.time}
                        </label>

                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 p-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg bg-[#0A1F1C] px-6 py-3 font-medium text-white transition hover:bg-[#163a34] md:col-span-2"
                    >
                        {t.reserveTable}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Reservation