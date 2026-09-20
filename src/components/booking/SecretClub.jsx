function SecretClub() {
    return (
        <section
            id="secret-club"
            className="bg-[#0A1F1C] px-6 py-16 text-white"
        >
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    Exclusive Experience
                </p>

                <h2 className="mb-5 text-4xl font-serif">
                    Salvatore Secret Club
                </h2>

                <p className="mb-8 leading-7 text-gray-300">
                    Become part of our private community and discover exclusive
                    events, special dinners, wine experiences and surprises created
                    for our members.
                </p>

                <button className="rounded-lg border border-[#D4AF37] px-7 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0A1F1C]">
                    Join the Secret Club
                </button>
            </div>
        </section>
    );
}

export default SecretClub;