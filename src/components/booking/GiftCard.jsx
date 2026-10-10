
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const translations = {
  MK: {
    eyebrow: 'ПОДАРЕТЕ ИСКЛУЧИТЕЛНО ИСКУСТВО',
    title: 'Подарочен ваучер',
    description: 'Подарете вечера исполнета со италијански вкусови, внимателно избрани вина и незаборавни моменти.',
    chooseAmount: 'Изберете вредност',
    from: 'Од',
    to: 'За',
    create: 'Креирај ваучер',
    formTitle: 'Вашиот подарок',
    formDescription: 'Пополнете ги податоците за да го подготвите ваучерот.',
    buyer: 'Име и презиме на купувачот',
    recipient: 'Име и презиме на примателот',
    email: 'Е-пошта на купувачот',
    emailRequired: 'Е-поштата е задолжителна. Во финалната верзија, на оваа адреса ќе добиете е-пошта со линк до посебна страница за наплата. По успешната наплата, ќе го добиете официјалниот ваучер во PDF-формат со QR-код и ќе можете да му го препратите на лицето за кое е наменет.',
    message: 'Лична порака (опционално)',
    messagePlaceholder: 'Напишете порака за посебната пригода...',
    cancel: 'Откажи',
    generate: 'Прикажи ваучер',
    previewTitle: 'Вашиот ваучер е подготвен',
    previewDescription: 'Превртете ја картичката за да ја видите задната страна.',
    flip: 'ПРЕВРТИ',
    close: 'Затвори',
    required: 'Ве молиме пополнете ги задолжителните полиња.',
    demoNotice: 'Ова е демо-верзија. Податоците и кодот прикажани овде не претставуваат платен или активен ваучер. Во финалната верзија, наплатата ќе се извршува преку посебна страница до која ќе добиете линк по е-пошта. По наплатата ќе биде издаден PDF-ваучер со QR-код, кој можете да му го препратите на примателот.',
    validity: 'Ваучерот е валиден само ако е приложен официјалниот PDF-документ со QR-код издаден по успешната наплата. Овој демо-приказ не може да се искористи за наплата или искористување на ваучер.'
  },

  EN: {
    eyebrow: 'GIVE AN EXTRAORDINARY EXPERIENCE',
    title: 'Gift Card',
    description: 'Give the gift of Italian flavours, thoughtfully selected wines and unforgettable moments.',
    chooseAmount: 'Choose an amount',
    from: 'From',
    to: 'To',
    create: 'Create gift card',
    formTitle: 'Your gift',
    formDescription: 'Enter the details to prepare your gift card.',
    buyer: 'Buyer full name',
    recipient: 'Recipient full name',
    email: 'Buyer email address',
    emailRequired: 'Your email address is required. In the final version, you will receive an email at this address with a link to a separate payment page. After successful payment, you will receive the official voucher as a PDF with a QR code and can forward it to the recipient.',
    message: 'Personal message (optional)',
    messagePlaceholder: 'Write a message for this special occasion...',
    cancel: 'Cancel',
    generate: 'Preview gift card',
    previewTitle: 'Your gift card is ready',
    previewDescription: 'Flip the card to see its reverse side.',
    flip: 'FLIP',
    close: 'Close',
    required: 'Please complete all required fields.',
    demoNotice: 'This is a demo version. The details and code shown here do not represent a paid or active voucher. In the final version, payment will take place on a separate page linked in the email you receive. After payment, an official PDF voucher with a QR code will be issued, and you can forward it to the recipient.',
    validity: 'The voucher is valid only when the official PDF document with the QR code issued after successful payment is presented. This demo preview cannot be used to pay for or redeem a voucher.'
  },

  IT: {
    eyebrow: 'REGALA UN’ESPERIENZA STRAORDINARIA',
    title: 'Buono regalo',
    description: 'Regala sapori italiani, vini selezionati con cura e momenti indimenticabili.',
    chooseAmount: 'Scegli un importo',
    from: 'Da',
    to: 'A',
    create: 'Crea il buono',
    formTitle: 'Il tuo regalo',
    formDescription: 'Inserisci i dati per preparare il buono regalo.',
    buyer: 'Nome e cognome dell’acquirente',
    recipient: 'Nome e cognome del destinatario',
    email: 'Email dell’acquirente',
    emailRequired: 'L’indirizzo email è obbligatorio. Nella versione finale riceverai un’email con un link a una pagina di pagamento separata. Dopo il pagamento riceverai il buono ufficiale in PDF con codice QR e potrai inoltrarlo al destinatario.',
    message: 'Messaggio personale (facoltativo)',
    messagePlaceholder: 'Scrivi un messaggio per questa occasione speciale...',
    cancel: 'Annulla',
    generate: 'Visualizza il buono',
    previewTitle: 'Il tuo buono è pronto',
    previewDescription: 'Gira la carta per vedere il retro.',
    flip: 'GIRA',
    close: 'Chiudi',
    required: 'Compila tutti i campi obbligatori.',
    demoNotice: 'Questa è una versione demo. I dati e il codice mostrati non rappresentano un buono pagato o attivo. Nella versione finale il pagamento avverrà tramite una pagina separata, raggiungibile dal link ricevuto via email. Dopo il pagamento verrà emesso un buono ufficiale PDF con codice QR, che potrai inoltrare al destinatario.',
    validity: 'Il buono è valido solo presentando il documento PDF ufficiale con il codice QR rilasciato dopo il pagamento. Questa anteprima demo non può essere utilizzata per pagare o riscattare un buono.'
  },

  FR: {
    eyebrow: 'OFFREZ UNE EXPÉRIENCE EXCEPTIONNELLE',
    title: 'Carte cadeau',
    description: 'Offrez des saveurs italiennes, des vins soigneusement sélectionnés et des moments inoubliables.',
    chooseAmount: 'Choisissez un montant',
    from: 'De',
    to: 'À',
    create: 'Créer la carte cadeau',
    formTitle: 'Votre cadeau',
    formDescription: 'Renseignez les informations pour préparer votre carte cadeau.',
    buyer: 'Nom complet de l’acheteur',
    recipient: 'Nom complet du destinataire',
    email: 'Adresse e-mail de l’acheteur',
    emailRequired: 'Votre adresse e-mail est obligatoire. Dans la version finale, vous recevrez un e-mail contenant un lien vers une page de paiement séparée. Après le paiement, vous recevrez le bon officiel au format PDF avec un code QR et pourrez le transmettre au destinataire.',
    message: 'Message personnel (facultatif)',
    messagePlaceholder: 'Écrivez un message pour cette occasion spéciale...',
    cancel: 'Annuler',
    generate: 'Aperçu de la carte',
    previewTitle: 'Votre carte cadeau est prête',
    previewDescription: 'Retournez la carte pour voir le verso.',
    flip: 'RETOURNER',
    close: 'Fermer',
    required: 'Veuillez remplir tous les champs obligatoires.',
    demoNotice: 'Ceci est une version démo. Les informations et le code affichés ne constituent pas un bon payé ou actif. Dans la version finale, le paiement sera effectué sur une page séparée accessible depuis le lien envoyé par e-mail. Après le paiement, un bon officiel PDF avec code QR sera émis et vous pourrez le transmettre au destinataire.',
    validity: 'Le bon est valable uniquement sur présentation du document PDF officiel avec le code QR émis après le paiement. Cet aperçu démo ne permet ni de payer ni d’utiliser un bon.'
  },

  DE: {
    eyebrow: 'VERSCHENKEN SIE EIN BESONDERES ERLEBNIS',
    title: 'Geschenkgutschein',
    description: 'Verschenken Sie italienische Aromen, sorgfältig ausgewählte Weine und unvergessliche Momente.',
    chooseAmount: 'Wert auswählen',
    from: 'Von',
    to: 'Für',
    create: 'Gutschein erstellen',
    formTitle: 'Ihr Geschenk',
    formDescription: 'Geben Sie die Daten ein, um den Gutschein vorzubereiten.',
    buyer: 'Vollständiger Name des Käufers',
    recipient: 'Vollständiger Name des Empfängers',
    email: 'E-Mail-Adresse des Käufers',
    emailRequired: 'Ihre E-Mail-Adresse ist erforderlich. In der finalen Version erhalten Sie eine E-Mail mit einem Link zu einer separaten Zahlungsseite. Nach erfolgreicher Zahlung erhalten Sie den offiziellen Gutschein als PDF mit QR-Code und können ihn an den Empfänger weiterleiten.',
    message: 'Persönliche Nachricht (optional)',
    messagePlaceholder: 'Schreiben Sie eine Nachricht für diesen besonderen Anlass...',
    cancel: 'Abbrechen',
    generate: 'Gutschein ansehen',
    previewTitle: 'Ihr Gutschein ist fertig',
    previewDescription: 'Drehen Sie die Karte um, um die Rückseite zu sehen.',
    flip: 'DREHEN',
    close: 'Schließen',
    required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    demoNotice: 'Dies ist eine Demo-Version. Die angezeigten Angaben und der Code stellen keinen bezahlten oder aktiven Gutschein dar. In der finalen Version erfolgt die Zahlung über eine separate Seite, die Sie über einen Link in Ihrer E-Mail erreichen. Nach der Zahlung wird ein offizieller PDF-Gutschein mit QR-Code ausgestellt, den Sie an den Empfänger weiterleiten können.',
    validity: 'Der Gutschein ist nur gültig, wenn das offizielle PDF-Dokument mit dem nach der Zahlung ausgestellten QR-Code vorgelegt wird. Diese Demo-Vorschau kann nicht zur Zahlung oder Einlösung eines Gutscheins verwendet werden.'
  }
}

const amounts = [25, 50, 100, 150, 200]

function GiftCard() {
  const languageContext = useLanguage()
  const language =
    languageContext?.language ||
    languageContext?.lang ||
    languageContext?.currentLanguage ||
    'MK'

  const t = translations[String(language).toUpperCase()] || translations.MK

  const [selectedAmount, setSelectedAmount] = useState(100)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isVoucherOpen, setIsVoucherOpen] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const [formData, setFormData] = useState({
    buyer: '',
    recipient: '',
    email: '',
    message: ''
  })

  const [voucher, setVoucher] = useState(null)

  useEffect(() => {
    if (!isFormOpen && !isVoucherOpen) return undefined

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsFormOpen(false)
        setIsVoucherOpen(false)
        setIsFlipped(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [isFormOpen, isVoucherOpen])

  function updateField(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  function handleGenerate(event) {
    event.preventDefault()

    const newVoucher = {
      amount: selectedAmount,
      buyer: formData.buyer.trim(),
      recipient: formData.recipient.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      code: '123456789ABC'
    }

    setVoucher(newVoucher)
    setIsFormOpen(false)
    setIsFlipped(false)
    setIsVoucherOpen(true)
  }

  return (
    <section
      id="vouchers"
      className="relative overflow-hidden bg-[#102f28] px-5 py-20 text-[#f4efe5] sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c7a66b]/15" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#c7a66b]/15" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c7a66b]">
            {t.eyebrow}
          </p>

          <h2 className="max-w-xl font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#e0ddd4]/75">
            {t.description}
          </p>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#c7a66b]">
              {t.chooseAmount}
            </p>

            <div className="flex flex-wrap gap-3">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  aria-pressed={selectedAmount === amount}
                  className={`min-w-[82px] border px-5 py-3 text-sm transition duration-200 ${
                    selectedAmount === amount
                      ? 'border-[#c7a66b] bg-[#c7a66b] text-[#102f28]'
                      : 'border-[#c7a66b]/35 bg-transparent text-[#f4efe5] hover:border-[#c7a66b] hover:bg-white/5'
                  }`}
                >
                  €{amount}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="mt-8 border border-[#c7a66b] bg-[#c7a66b] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#102f28] transition hover:bg-transparent hover:text-[#e0c58f]"
          >
            {t.create}
          </button>

          <p className="mt-5 max-w-lg text-xs leading-6 text-[#e0ddd4]/65">
            {t.demoNotice}
          </p>
        </div>

        <div className="mx-auto w-full max-w-lg">
          <div className="relative aspect-[1.55/1] w-full [perspective:1200px]">
            <div className="absolute inset-0 rotate-[-5deg] border border-[#c7a66b]/35 bg-[#1a4036]" />
            <div className="absolute inset-0 rotate-[3deg] border border-[#c7a66b]/20 bg-[#17382f]" />

            <div className="absolute inset-0 flex flex-col justify-between border border-[#c7a66b] bg-[#123a30] p-6 shadow-2xl sm:p-9">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c7a66b] sm:text-xs">
                  SALVATORE
                </span>
                <span className="text-[8px] uppercase tracking-[0.22em] text-[#c7a66b]/80 sm:text-[10px]">
                  GIFT VOUCHER
                </span>
              </div>

              <div className="text-center">
                <p className="font-serif text-2xl tracking-[0.18em] sm:text-4xl sm:tracking-[0.25em]">
                  SALVATORE
                </p>

                <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-[#c7a66b] sm:text-[10px]">
                  ITALIAN DINING
                </p>

                <div className="mx-auto my-5 h-px w-16 bg-[#c7a66b]/70 sm:my-7" />

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#e0ddd4]/70 sm:text-xs">
                  VALUE
                </p>

                <p className="mt-1 font-serif text-4xl text-[#d8bd86] sm:text-5xl">
                  €{selectedAmount}
                </p>

                <p className="mt-4 break-words font-mono text-[8px] tracking-[0.12em] text-[#d8bd86] sm:text-[10px] sm:tracking-[0.2em]">
                  DEMO CODE · 123456789ABC
                </p>
              </div>

              <div className="flex items-end justify-between gap-3 text-[8px] uppercase tracking-[0.18em] text-[#e0ddd4]/65 sm:text-[10px]">
                <span>A GIFT OF DISTINCTION</span>
                <span>01 / 01</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center font-serif text-sm italic text-[#e0ddd4]/60">
            A gift of Italian dining.
          </p>
        </div>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsFormOpen(false)
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-card-form-title"
            className="my-auto w-full max-w-xl border border-[#c7a66b]/50 bg-[#102f28] p-6 shadow-2xl sm:p-9"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#c7a66b]">
                  SALVATORE · €{selectedAmount}
                </p>

                <h3
                  id="gift-card-form-title"
                  className="font-serif text-3xl text-[#f4efe5]"
                >
                  {t.formTitle}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#e0ddd4]/65">
                  {t.formDescription}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label={t.close}
                className="px-2 py-1 text-2xl text-[#c7a66b] hover:text-white"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label
                  htmlFor="gift-buyer"
                  className="mb-2 block text-xs tracking-wide text-[#e0ddd4]/80"
                >
                  {t.buyer} *
                </label>

                <input
                  id="gift-buyer"
                  name="buyer"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={formData.buyer}
                  onChange={updateField}
                  className="w-full border border-[#c7a66b]/30 bg-[#0b241f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c7a66b]"
                />
              </div>

              <div>
                <label
                  htmlFor="gift-recipient"
                  className="mb-2 block text-xs tracking-wide text-[#e0ddd4]/80"
                >
                  {t.recipient} *
                </label>

                <input
                  id="gift-recipient"
                  name="recipient"
                  type="text"
                  autoComplete="off"
                  required
                  maxLength={100}
                  value={formData.recipient}
                  onChange={updateField}
                  className="w-full border border-[#c7a66b]/30 bg-[#0b241f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c7a66b]"
                />
              </div>

              <div>
                <label
                  htmlFor="gift-email"
                  className="mb-2 block text-xs tracking-wide text-[#e0ddd4]/80"
                >
                  {t.email} *
                </label>

                <input
                  id="gift-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={updateField}
                  className="w-full border border-[#c7a66b]/30 bg-[#0b241f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c7a66b]"
                />

                <p className="mt-2 text-xs leading-6 text-[#d8bd86]/90">
                  {t.emailRequired}
                </p>
              </div>

              <div>
                <label
                  htmlFor="gift-message"
                  className="mb-2 block text-xs tracking-wide text-[#e0ddd4]/80"
                >
                  {t.message}
                </label>

                <textarea
                  id="gift-message"
                  name="message"
                  rows={3}
                  maxLength={240}
                  value={formData.message}
                  onChange={updateField}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-y border border-[#c7a66b]/30 bg-[#0b241f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c7a66b]"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="border border-[#c7a66b]/40 px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#f4efe5] transition hover:border-[#c7a66b]"
                >
                  {t.cancel}
                </button>

                <button
                  type="submit"
                  className="border border-[#c7a66b] bg-[#c7a66b] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#102f28] transition hover:bg-transparent hover:text-[#e0c58f]"
                >
                  {t.generate}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isVoucherOpen && voucher && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsVoucherOpen(false)
              setIsFlipped(false)
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-card-preview-title"
            className="my-auto w-full max-w-2xl border border-[#c7a66b]/50 bg-[#102f28] p-5 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#c7a66b]">
                  SALVATORE · €{voucher.amount}
                </p>

                <h3
                  id="gift-card-preview-title"
                  className="font-serif text-2xl text-[#f4efe5] sm:text-3xl"
                >
                  {t.previewTitle}
                </h3>

                <p className="mt-2 text-sm text-[#e0ddd4]/65">
                  {t.previewDescription}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsVoucherOpen(false)
                  setIsFlipped(false)
                }}
                aria-label={t.close}
                className="px-2 py-1 text-2xl text-[#c7a66b] hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mx-auto w-full max-w-xl [perspective:1200px]">
              <div
                className="relative aspect-[1.45/1] w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* FRONT OF VOUCHER */}
                <div
                  className="absolute inset-0 flex flex-col justify-between overflow-hidden border border-[#c7a66b] bg-[#153c31] p-5 sm:p-8 [backface-visibility:hidden]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#d8bd86] sm:text-[10px] sm:tracking-[0.3em]">
                      SALVATORE
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.15em] text-[#d8bd86] sm:text-[9px] sm:tracking-[0.25em]">
                      GIFT VOUCHER
                    </span>
                  </div>

                  <div className="text-center">
                    <p className="font-serif text-2xl tracking-[0.12em] sm:text-4xl sm:tracking-[0.22em]">
                      SALVATORE
                    </p>

                    <p className="mt-2 text-[7px] uppercase tracking-[0.3em] text-[#d8bd86] sm:text-[9px] sm:tracking-[0.4em]">
                      ITALIAN DINING
                    </p>

                    <div className="mx-auto my-3 h-px w-12 bg-[#c7a66b] sm:my-5 sm:w-16" />

                    <p className="text-[8px] uppercase tracking-[0.15em] text-[#e0ddd4]/75 sm:text-[10px] sm:tracking-[0.2em]">
                      A GIFT OF DISTINCTION
                    </p>

                    <p className="mt-2 font-serif text-4xl text-[#d8bd86] sm:text-5xl">
                      €{voucher.amount}
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#d8bd86] sm:text-[10px]">
                      VALUE
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-3 border-t border-[#c7a66b]/40 pt-3 text-[8px] sm:gap-5 sm:pt-4 sm:text-[10px]">
                      <div className="min-w-0">
                        <p className="mb-1 uppercase tracking-[0.18em] text-[#d8bd86]">
                          TO
                        </p>

                        <p className="truncate text-[#f4efe5]">
                          {voucher.recipient}
                        </p>
                      </div>

                      <div className="min-w-0 text-right">
                        <p className="mb-1 uppercase tracking-[0.18em] text-[#d8bd86]">
                          FROM
                        </p>

                        <p className="truncate text-[#f4efe5]">
                          {voucher.buyer}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 break-words text-center font-mono text-[8px] tracking-[0.1em] text-[#d8bd86] sm:text-[10px] sm:tracking-[0.16em]">
                      VOUCHER NUMBER · {voucher.code}
                    </p>

                    <p className="mt-1 text-center text-[7px] uppercase tracking-[0.2em] text-[#d8bd86]/75 sm:text-[9px]">
                      DEMO CODE
                    </p>
                  </div>
                </div>

                {/* BACK OF VOUCHER */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-[#c7a66b] bg-[#0b241f] p-5 text-center sm:p-8 [backface-visibility:hidden]"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="absolute inset-3 border border-[#c7a66b]/25 sm:inset-4" />

                  <p className="relative font-serif text-2xl tracking-[0.2em] text-[#d8bd86] sm:text-4xl sm:tracking-[0.3em]">
                    SALVATORE
                  </p>

                  <div className="relative my-4 h-px w-16 bg-[#c7a66b] sm:my-6" />

                  <p className="relative text-[8px] uppercase tracking-[0.2em] text-[#d8bd86] sm:text-[10px] sm:tracking-[0.3em]">
                    A MOMENT TO SAVOUR
                  </p>

                  <p className="relative mt-3 max-w-xs font-serif text-sm italic leading-6 text-[#f4efe5]/80 sm:text-base">
                    {voucher.message || 'Good food is even better when shared.'}
                  </p>

                  <div className="relative mt-5">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#d8bd86] sm:text-[10px]">
                      TO
                    </p>

                    <p className="mt-1 text-sm text-[#f4efe5] sm:text-base">
                      {voucher.recipient}
                    </p>
                  </div>

                  <div className="relative mt-3">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#d8bd86] sm:text-[10px]">
                      FROM
                    </p>

                    <p className="mt-1 text-sm text-[#f4efe5] sm:text-base">
                      {voucher.buyer}
                    </p>
                  </div>

                  <p className="relative mt-5 text-[8px] italic text-[#d8bd86] sm:text-[10px]">
                    With love, for a special moment.
                  </p>

                  <p className="relative mt-3 text-[7px] uppercase tracking-[0.2em] text-[#f4efe5]/45 sm:text-[9px] sm:tracking-[0.3em]">
                    AN ITALIAN DINING EXPERIENCE
                  </p>

                  <p className="relative mt-3 break-words font-mono text-[8px] tracking-[0.1em] text-[#d8bd86] sm:text-[10px] sm:tracking-[0.16em]">
                    DEMO CODE · {voucher.code}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs leading-6 text-[#e0ddd4]/70">
              {t.validity}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setIsFlipped((previous) => !previous)}
                className="border border-[#c7a66b]/50 px-5 py-3 text-xs uppercase tracking-[0.12em] text-[#f4efe5] transition hover:border-[#c7a66b] sm:tracking-[0.16em]"
              >
                {t.flip}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsVoucherOpen(false)
                  setIsFlipped(false)
                }}
                className="border border-[#c7a66b]/30 px-5 py-3 text-xs uppercase tracking-[0.12em] text-[#f4efe5]/70 transition hover:border-[#c7a66b] hover:text-white sm:tracking-[0.16em]"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GiftCard
