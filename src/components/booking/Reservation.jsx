import { useState } from "react";

function Reservation() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: "2",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `Reservation received for ${formData.name} on ${formData.date} at ${formData.time}.`
        );
    };

    return (
        <section id="reservation" className="bg-[#FDFBF7] px-6 py-16">
            <div className="mx-auto max-w-3xl">
                <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    Salvatore Skopje
                </p>

                <h2 className="mb-3 text-center text-4xl font-serif text-[#0A1F1C]">
                    Make a Reservation
                </h2>

                <p className="mb-10 text-center text-gray-600">
                    Reserve your table and enjoy an authentic Italian experience.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-5 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-[#D4AF37]"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Number of guests
                        </label>

                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 p-3"
                        >
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                            <option value="7">7 guests</option>
                            <option value="8">8 guests</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Date
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
                            Time
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
                        className="md:col-span-2 rounded-lg bg-[#0A1F1C] px-6 py-3 font-medium text-white transition hover:bg-[#163a34]"
                    >
                        Reserve a Table
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Reservation;