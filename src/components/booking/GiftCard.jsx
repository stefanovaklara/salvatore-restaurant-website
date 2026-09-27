import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

function GiftCard() {
    const { language } = useLanguage()
    const t = translations[language]

    const [amount, setAmount] = useState('50')

    const handlePurchase = () => {
        alert(`Gift Card selected: €${amount}`)
    }

    return (
        <section
            id="vouchers"
            className="scroll-mt-20 bg-[#FDFBF7] px-6 py-16"
        >
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    {t.perfectGift}
                </p>

                <h2 className="mb-4 text-4xl font-serif text-[#0A1F1C]">
                    {t.giftCardTitle}
                </h2>

                <p className="mx-auto mb-8 max-w-xl text-gray-600">
                    {t.giftCardDescription}
                </p>

                <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
                    <label className="mb-3 block text-left font-medium">
                        {t.chooseAmount}
                    </label>

                    <select
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mb-6 w-full rounded-lg border border-gray-300 p-3"
                    >
                        <option value="25">€25</option>
                        <option value="50">€50</option>
                        <option value="100">€100</option>
                        <option value="150">€150</option>
                        <option value="200">€200</option>
                    </select>

                    <button
                        onClick={handlePurchase}
                        className="w-full rounded-lg bg-[#0A1F1C] px-6 py-3 text-white transition hover:bg-[#163a34]"
                    >
                        {t.purchaseGiftCard}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GiftCard