import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-salvatore-gold)]/30 bg-[var(--color-salvatore-green)] px-6 py-12 text-[var(--color-salvatore-cream)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-[0.2em]">
            SALVATORE
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-salvatore-cream)]/70">
            {t.footerDescription}
          </p>

          {/* Social media */}
          <div className="mt-5 flex gap-4">
  <a
    href="#"
    aria-label="Instagram"
    className="text-sm font-semibold transition hover:text-[var(--color-salvatore-gold)]"
  >
    Instagram
  </a>

  <a
    href="#"
    aria-label="Facebook"
    className="text-sm font-semibold transition hover:text-[var(--color-salvatore-gold)]"
  >
    Facebook
  </a>
</div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[var(--color-salvatore-gold)]">
            {t.footercontact}
          </h3>

          <p className="mt-3 text-sm text-[var(--color-salvatore-cream)]/70">
            {t.footerLocation}
          </p>

          <p className="mt-2 text-sm text-[var(--color-salvatore-cream)]/70">
            +389 2 123 4567
          </p>
        </div>

        {/* Opening hours */}
        <div>
          <h3 className="font-semibold text-[var(--color-salvatore-gold)]">
            {t.footerOpeningHours}
          </h3>

          <p className="mt-3 text-sm text-[var(--color-salvatore-cream)]/70">
            {t.footerDays}
          </p>

          <p className="mt-2 text-sm text-[var(--color-salvatore-cream)]/70">
            12:00 – 00:00
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-[var(--color-salvatore-cream)]/10 pt-6 text-center text-xs text-[var(--color-salvatore-cream)]/50">
        © {new Date().getFullYear()} Salvatore. {t.footerRights}.
      </div>
    </footer>
  )
}

export default Footer