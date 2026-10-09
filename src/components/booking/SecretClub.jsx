
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const messages = {
  MK: {
    eyebrow: 'ЕКСКЛУЗИВНО ИСКУСТВО',
    title: 'Salvatore Secret Club',
    description: 'Откријте посебен свет на италијанска гастрономија, внимателно избрани вина и ексклузивни настани.',
    join: 'Приклучи се во Secret Club',
    first: 'Име',
    last: 'Презиме',
    email: 'Е-пошта',
    phone: 'Телефон за контакт',
    birthday: 'Датум на раѓање',
    optional: 'Опционално',
    interests: 'Што ве интересира?',
    interestsHint: 'Изберете ги искуствата што ве привлекуваат.',
    tastings: 'Дегустации и специјални менија',
    events: 'Приватни настани',
    wines: 'Вина и гастрономски доживувања',
    marketing: 'Сакам да добивам новости, покани и специјални понуди од Salvatore.',
    privacy: 'Оваа демо-форма не ги испраќа податоците до сервер.',
    submit: 'Испрати пријава',
    cancel: 'Откажи',
    close: 'Затвори',
    successTitle: 'Добредојдовте во нашиот свет',
    successText: 'Вашата пријава е подготвена.',
    done: 'Во ред',
  },
  EN: {
    eyebrow: 'AN EXCLUSIVE EXPERIENCE',
    title: 'Salvatore Secret Club',
    description: 'Discover a special world of Italian gastronomy, carefully selected wines and exclusive events.',
    join: 'Join the Secret Club',
    first: 'First name',
    last: 'Last name',
    email: 'Email address',
    phone: 'Contact phone',
    birthday: 'Date of birth',
    optional: 'Optional',
    interests: 'What interests you?',
    interestsHint: 'Choose the experiences that appeal to you.',
    tastings: 'Tastings and special menus',
    events: 'Private events',
    wines: 'Wines and gastronomic experiences',
    marketing: 'I would like to receive news, invitations and special offers from Salvatore.',
    privacy: 'This demo form does not send your details to a server.',
    submit: 'Submit registration',
    cancel: 'Cancel',
    close: 'Close',
    successTitle: 'Welcome to our world',
    successText: 'Your registration is ready.',
    done: 'Done',
  },
  IT: {
    eyebrow: 'UN’ESPERIENZA ESCLUSIVA',
    title: 'Salvatore Secret Club',
    description: 'Scoprite un mondo speciale di gastronomia italiana, vini selezionati ed eventi esclusivi.',
    join: 'Entra nel Secret Club',
    first: 'Nome',
    last: 'Cognome',
    email: 'Indirizzo e-mail',
    phone: 'Telefono di contatto',
    birthday: 'Data di nascita',
    optional: 'Facoltativo',
    interests: 'Cosa ti interessa?',
    interestsHint: 'Scegli le esperienze che preferisci.',
    tastings: 'Degustazioni e menu speciali',
    events: 'Eventi privati',
    wines: 'Vini ed esperienze gastronomiche',
    marketing: 'Desidero ricevere novità, inviti e offerte speciali da Salvatore.',
    privacy: 'Questa demo non invia i dati a un server.',
    submit: 'Invia la registrazione',
    cancel: 'Annulla',
    close: 'Chiudi',
    successTitle: 'Benvenuto nel nostro mondo',
    successText: 'La registrazione è pronta.',
    done: 'Fatto',
  },
  FR: {
    eyebrow: 'UNE EXPÉRIENCE EXCLUSIVE',
    title: 'Salvatore Secret Club',
    description: 'Découvrez un univers de gastronomie italienne, de vins soigneusement sélectionnés et d’événements exclusifs.',
    join: 'Rejoindre le Secret Club',
    first: 'Prénom',
    last: 'Nom',
    email: 'Adresse e-mail',
    phone: 'Téléphone de contact',
    birthday: 'Date de naissance',
    optional: 'Facultatif',
    interests: 'Qu’est-ce qui vous intéresse ?',
    interestsHint: 'Choisissez les expériences qui vous attirent.',
    tastings: 'Dégustations et menus spéciaux',
    events: 'Événements privés',
    wines: 'Vins et expériences gastronomiques',
    marketing: 'Je souhaite recevoir les actualités, invitations et offres spéciales de Salvatore.',
    privacy: 'Ce formulaire de démonstration n’envoie pas vos données à un serveur.',
    submit: 'Envoyer l’inscription',
    cancel: 'Annuler',
    close: 'Fermer',
    successTitle: 'Bienvenue dans notre univers',
    successText: 'Votre inscription est prête.',
    done: 'Terminé',
  },
  DE: {
    eyebrow: 'EIN EXKLUSIVES ERLEBNIS',
    title: 'Salvatore Secret Club',
    description: 'Entdecken Sie italienische Gastronomie, sorgfältig ausgewählte Weine und exklusive Veranstaltungen.',
    join: 'Dem Secret Club beitreten',
    first: 'Vorname',
    last: 'Nachname',
    email: 'E-Mail-Adresse',
    phone: 'Telefonnummer',
    birthday: 'Geburtsdatum',
    optional: 'Optional',
    interests: 'Was interessiert Sie?',
    interestsHint: 'Wählen Sie die Erlebnisse aus, die Sie ansprechen.',
    tastings: 'Verkostungen und spezielle Menüs',
    events: 'Private Veranstaltungen',
    wines: 'Weine und kulinarische Erlebnisse',
    marketing: 'Ich möchte Neuigkeiten, Einladungen und Sonderangebote von Salvatore erhalten.',
    privacy: 'Dieses Demo-Formular sendet keine Daten an einen Server.',
    submit: 'Anmeldung senden',
    cancel: 'Abbrechen',
    close: 'Schließen',
    successTitle: 'Willkommen in unserer Welt',
    successText: 'Ihre Anmeldung ist vorbereitet.',
    done: 'Fertig',
  },
}

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
  interests: [],
  marketingConsent: false,
}

function SecretClub() {
  const { language } = useLanguage()
  const t = messages[language] || messages.EN
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)

  const closeModal = () => {
    setIsOpen(false)
    setSubmitted(false)
    setForm(initialForm)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const toggleInterest = (interest) => {
    setForm((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'mt-2 w-full rounded-sm border border-[#D4AF37]/35 bg-[#071713] px-4 py-3 text-sm text-[#F5F0E7] outline-none placeholder:text-[#F5F0E7]/30 focus:border-[#D4AF37]'

  return (
    <>
      <section id="secret-club" className="bg-[#0A1F1C] px-6 py-20 text-[#F5F0E7] md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">{t.eyebrow}</p>
          <h2 className="font-serif text-3xl tracking-wide md:text-5xl">{t.title}</h2>
          <div className="mx-auto my-6 h-px w-16 bg-[#D4AF37]" />
          <p className="mx-auto max-w-xl text-sm leading-7 text-[#F5F0E7]/75 md:text-base">{t.description}</p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-9 border border-[#D4AF37] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0A1F1C]"
          >
            {t.join}
          </button>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal()
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="secret-club-title"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-[#D4AF37]/45 bg-[#0A1F1C] text-[#F5F0E7] shadow-2xl"
          >
            <div className="p-6 sm:p-9 md:p-11">
              <button
                type="button"
                onClick={closeModal}
                aria-label={t.close}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-[#D4AF37]/35 text-xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1F1C]"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <p className="mb-3 pr-10 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">{t.eyebrow}</p>
                  <h3 id="secret-club-title" className="pr-8 font-serif text-2xl sm:text-3xl">{t.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#F5F0E7]/70">{t.description}</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="block text-xs tracking-wide">
                        {t.first} *
                        <input className={inputClass} name="firstName" autoComplete="given-name" value={form.firstName} onChange={handleChange} required />
                      </label>
                      <label className="block text-xs tracking-wide">
                        {t.last} *
                        <input className={inputClass} name="lastName" autoComplete="family-name" value={form.lastName} onChange={handleChange} required />
                      </label>
                      <label className="block text-xs tracking-wide">
                        {t.email} *
                        <input className={inputClass} type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required />
                      </label>
                      <label className="block text-xs tracking-wide">
                        {t.phone} *
                        <input className={inputClass} type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} required />
                      </label>
                      <label className="block text-xs tracking-wide sm:col-span-2">
                        {t.birthday} <span className="text-[#F5F0E7]/45"> ({t.optional})</span>
                        <input className={inputClass} type="date" name="birthday" autoComplete="bday" value={form.birthday} onChange={handleChange} />
                      </label>
                    </div>

                    <div className="border-t border-[#D4AF37]/20 pt-6">
                      <h4 className="font-serif text-lg">{t.interests}</h4>
                      <p className="mt-1 text-xs leading-5 text-[#F5F0E7]/60">{t.interestsHint}</p>
                      <div className="mt-4 space-y-3">
                        {[
                          ['tastings', t.tastings],
                          ['events', t.events],
                          ['wines', t.wines],
                        ].map(([value, label]) => (
                          <label key={value} className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-[#F5F0E7]/85">
                            <input
                              type="checkbox"
                              checked={form.interests.includes(value)}
                              onChange={() => toggleInterest(value)}
                              className="mt-1 h-4 w-4 accent-[#D4AF37]"
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#D4AF37]/20 pt-6">
                      <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#F5F0E7]/80">
                        <input
                          type="checkbox"
                          name="marketingConsent"
                          checked={form.marketingConsent}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 accent-[#D4AF37]"
                        />
                        <span>{t.marketing}</span>
                      </label>
                      <p className="mt-4 text-xs leading-5 text-[#F5F0E7]/45">{t.privacy}</p>
                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-[#D4AF37]/20 pt-6 sm:flex-row sm:justify-end">
                      <button type="button" onClick={closeModal} className="border border-[#F5F0E7]/25 px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#F5F0E7]/75 hover:border-[#D4AF37] hover:text-[#D4AF37]">
                        {t.cancel}
                      </button>
                      <button type="submit" className="border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#0A1F1C] hover:bg-transparent hover:text-[#D4AF37]">
                        {t.submit}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center sm:py-12">
                  <div className="mx-auto mb-6 h-px w-16 bg-[#D4AF37]" />
                  <h3 id="secret-club-title" className="font-serif text-2xl sm:text-3xl">{t.successTitle}</h3>
                  <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#F5F0E7]/70">{t.successText}</p>
                  <button type="button" onClick={closeModal} className="mt-8 border border-[#D4AF37] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1F1C]">
                    {t.done}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SecretClub
