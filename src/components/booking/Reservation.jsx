import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

const reservationMessages = {
    MK: {
        eyebrow: 'SALVATORE',
        success: 'Вашето барање е примено',
        title: 'Вашата маса ве очекува.',
        description:
            'Ви благодариме што го избравте Salvatore. ',
        summary: 'Детали за вашата посета',
        guest: 'Име',
        date: 'Датум',
        time: 'Време',
        people: 'Број на гости',
        close: 'Во ред',
        closeLabel: 'Затвори го прозорецот',
    },
    EN: {
        eyebrow: 'SALVATORE',
        success: 'Your request has been received',
        title: 'Your table awaits.',
        description:
            'Thank you for choosing Salvatore.',
        summary: 'Your visit details',
        guest: 'Name',
        date: 'Date',
        time: 'Time',
        people: 'Number of guests',
        close: 'Wonderful',
        closeLabel: 'Close the window',
    },
    IT: {
        eyebrow: 'SALVATORE',
        success: 'La tua richiesta è stata ricevuta',
        title: 'Il tuo tavolo ti aspetta.',
        description:
            'Grazie per aver scelto Salvatore.',
        summary: 'Dettagli della tua visita',
        guest: 'Nome',
        date: 'Data',
        time: 'Ora',
        people: 'Numero di ospiti',
        close: 'Perfetto',
        closeLabel: 'Chiudi la finestra',
    },
    FR: {
        eyebrow: 'SALVATORE',
        success: 'Votre demande a bien été reçue',
        title: 'Votre table vous attend.',
        description:
            'Merci d’avoir choisi Salvatore.',
        summary: 'Détails de votre visite',
        guest: 'Nom',
        date: 'Date',
        time: 'Heure',
        people: 'Nombre de personnes',
        close: 'Parfait',
        closeLabel: 'Fermer la fenêtre',
    },
    DE: {
        eyebrow: 'SALVATORE',
        success: 'Ihre Anfrage ist eingegangen',
        title: 'Ihr Tisch erwartet Sie.',
        description:
            'Vielen Dank, dass Sie sich für Salvatore entschieden haben. ',
        summary: 'Details Ihres Besuchs',
        guest: 'Name',
        date: 'Datum',
        time: 'Uhrzeit',
        people: 'Anzahl der Gäste',
        close: 'Wunderbar',
        closeLabel: 'Fenster schließen',
    },
}

function Reservation() {
    const { language } = useLanguage()
    const t = translations[language]
    const message = reservationMessages[language] || reservationMessages.EN

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '2',
    })

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

    const today = new Date().toLocaleDateString('en-CA')

    useEffect(() => {
        if (!isConfirmationOpen) return

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsConfirmationOpen(false)
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleEscape)
        }
    }, [isConfirmationOpen])

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsConfirmationOpen(true)
    }

    const closeConfirmation = () => {
        setIsConfirmationOpen(false)
    }

    return (
        <section
            id="reservation"
            className="scroll-mt-20 bg-[var(--bg-primary)] px-6 py-16"
        >
            <div className="mx-auto max-w-3xl">
                <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    {t.reservationTitle}
                </p>

                <h2 className="mb-3 text-center font-serif text-4xl text-[var(--text-primary)]">
                    {t.reservationHeading}
                </h2>

                <p className="mb-10 text-center text-[var(--text-primary)]/70">
                    {t.reservationDescription}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-5 rounded-2xl border border-[#D4AF37]/20 bg-white p-8 shadow-lg dark:bg-[#102A26]"
                >
                    <div>
                        <label
                            htmlFor="reservation-name"
                            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                        >
                            {t.name}
                        </label>

                        <input
                            id="reservation-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] dark:border-white/20 dark:bg-[#0A1F1C] dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="reservation-guests"
                            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                        >
                            {t.numberOfGuests}
                        </label>

                        <select
                            id="reservation-guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-[#D4AF37] dark:border-white/20 dark:bg-[#0A1F1C] dark:text-white"
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
                        <label
                            htmlFor="reservation-date"
                            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                        >
                            {t.date}
                        </label>

                        <input
                            id="reservation-date"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={today}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-[#D4AF37] dark:border-white/20 dark:bg-[#0A1F1C] dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="reservation-time"
                            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                        >
                            {t.time}
                        </label>

                        <input
                            id="reservation-time"
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-[#D4AF37] dark:border-white/20 dark:bg-[#0A1F1C] dark:text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 rounded-lg bg-[#0A1F1C] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#163a34] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 dark:bg-[#D4AF37] dark:text-[#0A1F1C] dark:hover:bg-[#C5A059]"
                    >
                        {t.reserveTable}
                    </button>
                </form>
            </div>

            {isConfirmationOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeConfirmation()
                        }
                    }}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="reservation-confirmation-title"
                        className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-[#0A1F1C] text-white shadow-2xl"
                    >
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                        <button
                            type="button"
                            onClick={closeConfirmation}
                            aria-label={message.closeLabel}
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-white/70 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                        >
                            ×
                        </button>

                        <div className="px-6 pb-8 pt-10 text-center sm:px-10 sm:pb-10">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 text-[#D4AF37]">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="h-8 w-8"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12.5l4.5 4.5L19 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
                                {message.eyebrow}
                            </p>

                            <p className="mb-3 text-sm text-[#D4AF37]">
                                {message.success}
                            </p>

                            <h3
                                id="reservation-confirmation-title"
                                className="mb-4 font-serif text-3xl leading-tight sm:text-4xl"
                            >
                                {message.title}
                            </h3>

                            <p className="mx-auto mb-8 max-w-sm text-sm leading-7 text-white/70">
                                {message.description}
                            </p>

                            <div className="mb-6 rounded-xl border border-[#D4AF37]/25 bg-white/[0.04] p-5 text-left">
                                <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                                    {message.summary}
                                </h4>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white/55">
                                            {message.guest}
                                        </span>
                                        <span className="text-right font-medium">
                                            {formData.name}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white/55">
                                            {message.date}
                                        </span>
                                        <span className="text-right">
                                            {formData.date}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white/55">
                                            {message.time}
                                        </span>
                                        <span className="text-right">
                                            {formData.time}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white/55">
                                            {message.people}
                                        </span>
                                        <span className="text-right">
                                            {formData.guests}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-7 text-xs leading-6 text-white/45">
                                {message.note}
                            </p>

                            <button
                                type="button"
                                onClick={closeConfirmation}
                                className="w-full rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold tracking-wide text-[#0A1F1C] transition duration-300 hover:bg-[#E5C65C] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A1F1C]"
                            >
                                {message.close}
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </section>
    )
}

export default Reservation