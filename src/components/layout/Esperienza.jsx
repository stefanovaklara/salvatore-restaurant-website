import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import {
    experienceFood,
    experienceDrinks,
} from '../../data/experienceData'

function Esperienza() {
    const { language } = useLanguage()
    const t = translations[language]

    const [started, setStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [recommendation, setRecommendation] = useState(null)
    const [saved, setSaved] = useState(false)

    const questions = {
        MK: [
            {
                question: 'Како сакате да се чувствувате оваа вечер?',
                options: [
                    'Елегантно и софистицирано',
                    'Опуштено и удобно',
                    'Романтично и интимно',
                    'Енергично и весело',
                ],
            },
            {
                question: 'Што најмногу ве привлекува?',
                options: [
                    'Тестенини и рижото',
                    'Месо',
                    'Риба и морски плодови',
                    'Зеленчукови и полесни јадења',
                ],
            },
            {
                question: 'Какви вкусови преферирате?',
                options: [
                    'Кремасти и богати',
                    'Свежи и лесни',
                    'Интензивни',
                    'Зачинети',
                ],
            },
            {
                question: 'Што преферирате да пиете?',
                options: [
                    'Вино',
                    'Коктели',
                    'Шампањ и пенливо вино',
                    'Жестоки пијалаци и дигестиви',
                ],
            },
            {
                question: 'Колку сакате да експериментирате?',
                options: [
                    'Сакам класици',
                    'Малку експериментирање',
                    'Сакам нешто ново',
                    'Целосно се препуштам на Salvatore',
                ],
            },
            {
                question: 'Како сакате да ја започнете вечерта?',
                options: [
                    'Со лесен аперитив',
                    'Со богато предјадење',
                    'Со нешто за споделување',
                    'Директно со главното јадење',
                ],
            },
            {
                question: 'Како сакате да ја продолжите вечерта?',
                options: [
                    'Со десерт',
                    'Со пура',
                    'Со десерт и пура',
                    'Само со пијалак',
                ],
            },
            {
                question: 'Каква атмосфера сакате на крајот?',
                options: [
                    'Мирна и интимна',
                    'Луксузна и елегантна',
                    'Жива и со музика',
                    'Долга вечер со пијалак и разговор',
                ],
            },
        ],

        EN: [
            {
                question: 'How would you like to feel this evening?',
                options: [
                    'Elegant and sophisticated',
                    'Relaxed and comfortable',
                    'Romantic and intimate',
                    'Energetic and lively',
                ],
            },
            {
                question: 'What are you most drawn to?',
                options: [
                    'Pasta and risotto',
                    'Meat',
                    'Fish and seafood',
                    'Vegetable and lighter dishes',
                ],
            },
            {
                question: 'What kind of flavours do you prefer?',
                options: [
                    'Creamy and rich',
                    'Fresh and light',
                    'Intense',
                    'Spicy',
                ],
            },
            {
                question: 'What do you prefer to drink?',
                options: [
                    'Wine',
                    'Cocktails',
                    'Champagne and sparkling wine',
                    'Spirits and digestifs',
                ],
            },
            {
                question: 'How much would you like to experiment?',
                options: [
                    'I prefer classics',
                    'A little experimentation',
                    'I want something new',
                    'I completely trust Salvatore',
                ],
            },
            {
                question: 'How would you like to start the evening?',
                options: [
                    'With a light aperitivo',
                    'With a rich starter',
                    'With something to share',
                    'Straight to the main course',
                ],
            },
            {
                question: 'How would you like to continue the evening?',
                options: [
                    'With dessert',
                    'With a cigar',
                    'With dessert and a cigar',
                    'Just with a drink',
                ],
            },
            {
                question: 'What atmosphere would you like at the end?',
                options: [
                    'Calm and intimate',
                    'Luxurious and elegant',
                    'Lively with music',
                    'A long evening with drinks and conversation',
                ],
            },
        ],

        IT: [
            {
                question: 'Come vuoi sentirti questa sera?',
                options: [
                    'Elegante e sofisticato',
                    'Rilassato e confortevole',
                    'Romantico e intimo',
                    'Energico e vivace',
                ],
            },
            {
                question: 'Cosa ti attira di più?',
                options: [
                    'Pasta e risotto',
                    'Carne',
                    'Pesce e frutti di mare',
                    'Piatti vegetali e leggeri',
                ],
            },
            {
                question: 'Quali sapori preferisci?',
                options: [
                    'Cremosi e ricchi',
                    'Freschi e leggeri',
                    'Intensi',
                    'Piccanti',
                ],
            },
            {
                question: 'Cosa preferisci bere?',
                options: [
                    'Vino',
                    'Cocktail',
                    'Champagne e bollicine',
                    'Distillati e digestivi',
                ],
            },
            {
                question: 'Quanto vuoi sperimentare?',
                options: [
                    'Preferisco i classici',
                    'Un po’ di sperimentazione',
                    'Voglio qualcosa di nuovo',
                    'Mi affido completamente a Salvatore',
                ],
            },
            {
                question: 'Come vuoi iniziare la serata?',
                options: [
                    'Con un aperitivo leggero',
                    'Con un antipasto ricco',
                    'Con qualcosa da condividere',
                    'Direttamente con il piatto principale',
                ],
            },
            {
                question: 'Come vuoi continuare la serata?',
                options: [
                    'Con un dessert',
                    'Con un sigaro',
                    'Con dessert e sigaro',
                    'Solo con un drink',
                ],
            },
            {
                question: 'Quale atmosfera desideri alla fine?',
                options: [
                    'Calma e intima',
                    'Lussuosa ed elegante',
                    'Vivace con musica',
                    'Una lunga serata con drink e conversazione',
                ],
            },
        ],

        FR: [
            {
                question: 'Comment souhaitez-vous vous sentir ce soir ?',
                options: [
                    'Élégant et sophistiqué',
                    'Détendu et confortable',
                    'Romantique et intime',
                    'Énergique et animé',
                ],
            },
            {
                question: 'Qu’est-ce qui vous attire le plus ?',
                options: [
                    'Pâtes et risotto',
                    'Viande',
                    'Poisson et fruits de mer',
                    'Plats végétaux et légers',
                ],
            },
            {
                question: 'Quels goûts préférez-vous ?',
                options: [
                    'Crémeux et riches',
                    'Frais et légers',
                    'Intenses',
                    'Épicés',
                ],
            },
            {
                question: 'Que préférez-vous boire ?',
                options: [
                    'Vin',
                    'Cocktails',
                    'Champagne et vins pétillants',
                    'Spiritueux et digestifs',
                ],
            },
            {
                question: 'Dans quelle mesure souhaitez-vous expérimenter ?',
                options: [
                    'Je préfère les classiques',
                    'Un peu d’expérimentation',
                    'Je veux quelque chose de nouveau',
                    'Je fais entièrement confiance à Salvatore',
                ],
            },
            {
                question: 'Comment souhaitez-vous commencer la soirée ?',
                options: [
                    'Avec un apéritif léger',
                    'Avec une entrée généreuse',
                    'Avec quelque chose à partager',
                    'Directement avec le plat principal',
                ],
            },
            {
                question: 'Comment souhaitez-vous continuer la soirée ?',
                options: [
                    'Avec un dessert',
                    'Avec un cigare',
                    'Avec un dessert et un cigare',
                    'Seulement avec une boisson',
                ],
            },
            {
                question: 'Quelle atmosphère souhaitez-vous à la fin ?',
                options: [
                    'Calme et intime',
                    'Luxueuse et élégante',
                    'Animée avec de la musique',
                    'Une longue soirée autour de boissons et de conversations',
                ],
            },
        ],

        DE: [
            {
                question: 'Wie möchten Sie sich heute Abend fühlen?',
                options: [
                    'Elegant und anspruchsvoll',
                    'Entspannt und gemütlich',
                    'Romantisch und intim',
                    'Energiegeladen und lebendig',
                ],
            },
            {
                question: 'Was spricht Sie am meisten an?',
                options: [
                    'Pasta und Risotto',
                    'Fleisch',
                    'Fisch und Meeresfrüchte',
                    'Vegetarische und leichte Gerichte',
                ],
            },
            {
                question: 'Welche Geschmacksrichtungen bevorzugen Sie?',
                options: [
                    'Cremig und reichhaltig',
                    'Frisch und leicht',
                    'Intensiv',
                    'Würzig',
                ],
            },
            {
                question: 'Was trinken Sie bevorzugt?',
                options: [
                    'Wein',
                    'Cocktails',
                    'Champagner und Schaumwein',
                    'Spirituosen und Digestifs',
                ],
            },
            {
                question: 'Wie viel möchten Sie experimentieren?',
                options: [
                    'Ich bevorzuge Klassiker',
                    'Etwas Experimentierfreude',
                    'Ich möchte etwas Neues',
                    'Ich vertraue ganz auf Salvatore',
                ],
            },
            {
                question: 'Wie möchten Sie den Abend beginnen?',
                options: [
                    'Mit einem leichten Aperitif',
                    'Mit einer reichhaltigen Vorspeise',
                    'Mit etwas zum Teilen',
                    'Direkt mit dem Hauptgericht',
                ],
            },
            {
                question: 'Wie möchten Sie den Abend fortsetzen?',
                options: [
                    'Mit einem Dessert',
                    'Mit einer Zigarre',
                    'Mit Dessert und Zigarre',
                    'Nur mit einem Getränk',
                ],
            },
            {
                question: 'Welche Atmosphäre wünschen Sie sich am Ende?',
                options: [
                    'Ruhig und intim',
                    'Luxuriös und elegant',
                    'Lebendig mit Musik',
                    'Ein langer Abend mit Getränken und Gesprächen',
                ],
            },
        ],
    }

    const currentQuestions =
        questions[language] || questions.EN

    const question = currentQuestions[currentQuestion]

    const getTagsFromAnswer = (questionIndex, answerIndex) => {
        const tagMap = {
            0: [
                ['elegant'],
                ['relaxed'],
                ['romantic'],
                ['adventurous'],
            ],

            1: [
                ['pasta'],
                ['meat'],
                ['seafood'],
                ['vegetarian', 'light'],
            ],

            2: [
                ['creamy', 'rich'],
                ['fresh', 'light'],
                ['intense'],
                ['spicy'],
            ],

            3: [
                ['wine'],
                ['cocktail'],
                ['champagne', 'sparkling'],
                ['digestif', 'strong'],
            ],

            4: [
                ['classic'],
                ['adventurous'],
                ['adventurous', 'new'],
                ['adventurous', 'surprise'],
            ],

            5: [
                ['aperitivo', 'light'],
                ['rich'],
                ['share', 'celebratory'],
                ['main'],
            ],

            6: [
                ['dessert'],
                ['cigar'],
                ['dessert', 'cigar'],
                ['drink'],
            ],

            7: [
                ['romantic'],
                ['elegant'],
                ['celebratory'],
                ['relaxed', 'long'],
            ],
        }

        return tagMap[questionIndex]?.[answerIndex] || []
    }

    const scoreItem = (item, selectedTags) => {
        return selectedTags.reduce((score, tag) => {
            if (item.tags.includes(tag)) {
                return score + 1
            }

            return score
        }, 0)
    }

    const findBestItem = (items, selectedTags) => {
        let bestItem = items[0]
        let bestScore = -1

        items.forEach((item) => {
            const score = scoreItem(item, selectedTags)

            if (score > bestScore) {
                bestScore = score
                bestItem = item
            }
        })

        return bestItem
    }

    const createRecommendation = (finalAnswers) => {
        const selectedTags = finalAnswers.flatMap(
            (answer) =>
                getTagsFromAnswer(
                    answer.questionIndex,
                    answer.answerIndex
                )
        )

        const starterItems = experienceFood.filter(
            (item) => item.type === 'starter'
        )

        const mainItems = experienceFood.filter(
            (item) => item.type === 'main'
        )

        const dessertItems = experienceFood.filter(
            (item) => item.type === 'dessert'
        )

        const cocktailItems = experienceDrinks.filter(
            (item) => item.type === 'cocktail'
        )

        const wineItems = experienceDrinks.filter(
            (item) =>
                item.type === 'whiteWine' ||
                item.type === 'redWine' ||
                item.type === 'roseWine'
        )

        const champagneItems = experienceDrinks.filter(
            (item) =>
                item.type === 'champagne' ||
                item.type === 'prosecco'
        )

        const digestifItems = experienceDrinks.filter(
            (item) => item.type === 'digestif'
        )

        const starter = findBestItem(
            starterItems,
            selectedTags
        )

        const main = findBestItem(
            mainItems,
            selectedTags
        )

        const dessert = findBestItem(
            dessertItems,
            selectedTags
        )

        const cocktail = findBestItem(
            cocktailItems,
            selectedTags
        )

        const wine = findBestItem(
            wineItems,
            selectedTags
        )

        const champagne = findBestItem(
            champagneItems,
            selectedTags
        )

        const digestif = findBestItem(
            digestifItems,
            selectedTags
        )

        const drinks = []

        const drinkAnswer = finalAnswers.find(
            (answer) => answer.questionIndex === 3
        )

        const drinkIndex = drinkAnswer?.answerIndex

        if (drinkIndex === 0) {
            drinks.push(wine)
        } else if (drinkIndex === 1) {
            drinks.push(cocktail)
        } else if (drinkIndex === 2) {
            drinks.push(champagne)
        } else {
            drinks.push(digestif)
        }

        const eveningAnswer = finalAnswers.find(
            (answer) => answer.questionIndex === 7
        )

        if (
            eveningAnswer?.answerIndex === 3 &&
            digestif
        ) {
            drinks.push(digestif)
        }

        if (
            drinkIndex === 0 &&
            champagne &&
            champagne.id !== drinks[0]?.id
        ) {
            drinks.push(champagne)
        }

        const aperitivo = findBestItem(
            cocktailItems.filter((item) =>
                item.tags.includes('aperitivo')
            ),
            selectedTags
        )

        const endingAnswer = finalAnswers.find(
            (answer) => answer.questionIndex === 6
        )

        const wantsCigar =
            endingAnswer?.answerIndex === 1 ||
            endingAnswer?.answerIndex === 2

        const profileAnswer = finalAnswers.find(
            (answer) => answer.questionIndex === 0
        )

        const tasteAnswer = finalAnswers.find(
            (answer) => answer.questionIndex === 2
        )

        const profileNames = {
            MK: [
                'Елегантен',
                'Опуштен',
                'Романтичен',
                'Авантуристички',
            ],
            EN: [
                'Elegant',
                'Relaxed',
                'Romantic',
                'Adventurous',
            ],
            IT: [
                'Elegante',
                'Rilassato',
                'Romantico',
                'Avventuroso',
            ],
            FR: [
                'Élégant',
                'Détendu',
                'Romantique',
                'Aventureux',
            ],
            DE: [
                'Elegant',
                'Entspannt',
                'Romantisch',
                'Abenteuerlich',
            ],
        }

        const profile =
            profileNames[language]?.[
                profileAnswer?.answerIndex ?? 0
            ] || profileNames.EN[0]

        const recommendation = {
            profile,
            starter,
            main,
            drinks,
            aperitivo,
            cigar: wantsCigar,
            dessert,
            tasteIndex: tasteAnswer?.answerIndex ?? 0,
        }

        return recommendation
    }

    const handleStart = () => {
        setStarted(true)
        setCurrentQuestion(0)
        setAnswers([])
        setRecommendation(null)
        setSaved(false)
    }

    const handleAnswer = (answerIndex) => {
        const newAnswers = [
            ...answers,
            {
                questionIndex: currentQuestion,
                answerIndex,
            },
        ]

        setAnswers(newAnswers)

        if (
            currentQuestion <
            currentQuestions.length - 1
        ) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            const result = createRecommendation(
                newAnswers
            )

            setRecommendation(result)
        }
    }

    const handleNewRecommendation = () => {
        setStarted(true)
        setCurrentQuestion(0)
        setAnswers([])
        setRecommendation(null)
        setSaved(false)
    }

    const handleSave = () => {
        if (!recommendation) {
            return
        }

        localStorage.setItem(
            'salvatoreExperience',
            JSON.stringify(recommendation)
        )

        setSaved(true)
    }

    return (
        <section
            id="esperienza"
            className="scroll-mt-20 bg-[var(--bg-primary)] px-6 py-24"
        >
            <div className="mx-auto max-w-5xl">

                {!started && (
                    <div className="text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                            Salvatore
                        </p>

                        <h2 className="font-serif-luxury text-4xl font-bold text-[var(--text-primary)] md:text-6xl">
                            {t.experienceTitle}
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                            {t.experienceDescription}
                        </p>

                        <button
                            type="button"
                            onClick={handleStart}
                            className="mt-10 rounded-sm bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
                        >
                            {t.experienceStart}
                        </button>
                    </div>
                )}

                {started && !recommendation && (
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                            {t.experienceQuestion}{' '}
                            {currentQuestion + 1}{' '}
                            {t.experienceOf}{' '}
                            {currentQuestions.length}
                        </p>

                        <div className="border border-[#D4AF37]/30 bg-[var(--bg-secondary)] p-8 md:p-12">

                            <h3 className="font-serif-luxury text-2xl font-bold text-[var(--text-primary)] md:text-4xl">
                                {question.question}
                            </h3>

                            <div className="mt-10 grid gap-4">
                                {question.options.map(
                                    (option, index) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() =>
                                                handleAnswer(index)
                                            }
                                            className="border border-[var(--text-primary)]/20 px-6 py-4 text-left text-[var(--text-primary)] transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                        >
                                            {option}
                                        </button>
                                    )
                                )}
                            </div>

                        </div>

                    </div>
                )}

                {recommendation && (
                    <div className="mx-auto max-w-4xl">

                        <div className="text-center">
                            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                                Salvatore
                            </p>

                            <h2 className="font-serif-luxury text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                                {t.experienceRecommendation}
                            </h2>

                            <p className="mt-5 text-[var(--text-secondary)]">
                                {t.experienceYourProfile}:{' '}
                                <span className="text-[#D4AF37]">
                                    {recommendation.profile}
                                </span>
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2">

                            <RecommendationCard
                                title={t.experienceAperitivo}
                                item={recommendation.aperitivo}
                            />

                            <RecommendationCard
                                title={t.experienceStarter}
                                item={recommendation.starter}
                            />

                            <RecommendationCard
                                title={t.experienceMain}
                                item={recommendation.main}
                            />

                            <div className="border border-[#D4AF37]/30 bg-[var(--bg-secondary)] p-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                                    {t.experienceDrinks}
                                </p>

                                <div className="mt-4 space-y-3">
                                    {recommendation.drinks.map(
                                        (drink) => (
                                            <div
                                                key={drink.id}
                                                className="flex items-center justify-between gap-4"
                                            >
                                                <span className="text-[var(--text-primary)]">
                                                    {drink.name}
                                                </span>

                                                <span className="text-sm text-[var(--text-secondary)]">
                                                    {drink.price}{' '}
                                                    {t.den || 'ден.'}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <RecommendationCard
                                title={t.experienceDessert}
                                item={recommendation.dessert}
                            />

                            <div className="border border-[#D4AF37]/30 bg-[var(--bg-secondary)] p-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                                    {t.experienceCigar}
                                </p>

                                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                                    {recommendation.cigar
                                        ? getCigarText(language)
                                        : getNoCigarText(language)}
                                </p>
                            </div>

                        </div>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                            <button
                                type="button"
                                onClick={handleSave}
                                className="border border-[#D4AF37] px-7 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                            >
                                {saved
                                    ? t.experienceSaved
                                    : t.experienceSave}
                            </button>

                            <button
                                type="button"
                                onClick={handleNewRecommendation}
                                className="bg-[#D4AF37] px-7 py-3 font-semibold text-black transition hover:scale-105"
                            >
                                {t.experienceRestart}
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </section>
    )
}

function RecommendationCard({ title, item }) {
    if (!item) {
        return null
    }

    return (
        <div className="border border-[#D4AF37]/30 bg-[var(--bg-secondary)] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                {title}
            </p>

            <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="font-serif-luxury text-lg font-semibold text-[var(--text-primary)]">
                    {item.name}
                </h3>

                <span className="whitespace-nowrap text-sm text-[var(--text-secondary)]">
                    {item.price} ден.
                </span>
            </div>
        </div>
    )
}

function getCigarText(language) {
    const texts = {
        MK: 'Заокружете ја вечерта со момент за пура. Конкретна селекција на пури не е наведена во доставената карта, па изборот се остава на персоналот на ресторанот.',
        EN: 'Complete the evening with a cigar moment. A specific cigar selection is not listed in the provided menu, so the final choice is left to the restaurant team.',
        IT: 'Completa la serata con un momento dedicato al sigaro. Una selezione specifica non è indicata nella carta fornita, quindi la scelta finale viene lasciata al personale.',
        FR: 'Terminez la soirée avec un moment cigare. Une sélection précise ne figure pas dans la carte fournie, le choix final est donc laissé à l’équipe du restaurant.',
        DE: 'Beenden Sie den Abend mit einem Zigarrenmoment. Eine konkrete Auswahl ist in der bereitgestellten Karte nicht aufgeführt, daher bleibt die endgültige Wahl dem Restaurantteam überlassen.',
    }

    return texts[language] || texts.EN
}

function getNoCigarText(language) {
    const texts = {
        MK: 'Вашето искуство завршува со фокус на храната, пијалаците и десертот.',
        EN: 'Your experience ends with a focus on food, drinks and dessert.',
        IT: 'La tua esperienza si conclude con un focus su cibo, drink e dessert.',
        FR: 'Votre expérience se termine autour de la cuisine, des boissons et du dessert.',
        DE: 'Ihr Erlebnis endet mit einem Fokus auf Speisen, Getränke und Dessert.',
    }

    return texts[language] || texts.EN
}

export default Esperienza