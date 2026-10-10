const LANG_INDEX = { MK: 0, EN: 1, IT: 2, FR: 3, DE: 4 }

const DEN = { MK: 'ден.', EN: 'den.', IT: 'den.', FR: 'den.', DE: 'den.' }

const allergenLabels = {
    gluten: ['Глутен', 'Gluten', 'Glutine', 'Gluten', 'Gluten'],
    shellfish: ['Морски плодови', 'Shellfish', 'Crostacei e molluschi', 'Crustacés et mollusques', 'Schalen- und Weichtiere'],
    eggs: ['Јајца', 'Eggs', 'Uova', 'Œufs', 'Eier'],
    fish: ['Риба', 'Fish', 'Pesce', 'Poisson', 'Fisch'],
    peanuts: ['Кикиритки', 'Peanuts', 'Arachidi', 'Arachides', 'Erdnüsse'],
    sesame: ['Сусам', 'Sesame', 'Sesamo', 'Sésame', 'Sesam'],
    milk: ['Млеко', 'Milk', 'Latte', 'Lait', 'Milch'],
    nuts: ['Јаткасти плодови', 'Tree nuts', 'Frutta a guscio', 'Fruits à coque', 'Schalenfrüchte'],
    celery: ['Целер', 'Celery', 'Sedano', 'Céleri', 'Sellerie'],
    mustard: ['Синап', 'Mustard', 'Senape', 'Moutarde', 'Senf'],
    sulphites: [
        'Сулфур диоксид и сулфати',
        'Sulphur dioxide and sulphites',
        'Anidride solforosa e solfiti',
        'Anhydride sulfureux et sulphites',
        'Schwefeldioxid und Sulfite'
    ]
}

const noteLabels = {
    pork: ['Содржи свинско месо', 'Contains pork', 'Contiene carne di maiale', 'Contient du porc', 'Enthält Schweinefleisch'],
    perKg: ['Цената е по килограм', 'Price per kilogram', 'Prezzo al chilogrammo', 'Prix au kilogramme', 'Preis pro Kilogramm']
}

const allergenOrder = [
    'gluten', 'shellfish', 'eggs', 'fish', 'peanuts', 'sesame',
    'milk', 'nuts', 'celery', 'mustard', 'sulphites'
]

const dish = (name, price, allergens, desc, note) => ({
    name,
    price,
    allergens,
    desc,
    note
})

const rawMenu = [
    {
        category: ['Салати', 'Salads', 'Insalate', 'Salades', 'Salate'],
        items: [
            dish(
                ['Салата со рукола и пармезан', 'Rocket and Parmesan Salad', 'Insalata di Rucola e Parmigiano', 'Salade de Roquette et Parmesan', 'Rucola-Parmesan-Salat'],
                '600',
                ['milk', 'nuts'],
                [
                    'Млада рукола, шери домати, пармезан, балсамико дресинг, пињоли',
                    'Baby rocket, cherry tomatoes, Parmesan, balsamic dressing, pine nuts',
                    'Rucola novella, pomodorini, parmigiano, condimento al balsamico, pinoli',
                    'Jeune roquette, tomates cerises, parmesan, vinaigrette balsamique, pignons de pin',
                    'Junger Rucola, Kirschtomaten, Parmesan, Balsamico-Dressing, Pinienkerne'
                ]
            ),
            dish(
                ['Рустикална салата', 'Rustic Salad', 'Insalata Rustica', 'Salade Rustique', 'Rustikaler Salat'],
                '450',
                [],
                [
                    'Мешана зелена салата, шери домати, морков, дресинг со лимон',
                    'Mixed green salad, cherry tomatoes, carrot, lemon dressing',
                    'Insalata verde mista, pomodorini, carote, condimento al limone',
                    'Salade verte mélangée, tomates cerises, carotte, vinaigrette au citron',
                    'Gemischter grüner Salat, Kirschtomaten, Karotte, Zitronendressing'
                ]
            ),
            dish(
                ['Салата со цвекло и аспарагус', 'Beetroot and Asparagus Salad', 'Insalata di Barbabietole e Asparagi', 'Salade de Betteraves et Asperges', 'Rote-Bete-Spargel-Salat'],
                '550',
                ['milk'],
                [
                    'Цвекло, аспарагус, козјо сирење',
                    'Beetroot, asparagus, goat cheese',
                    'Barbabietola, asparagi, formaggio di capra',
                    'Betterave, asperges, fromage de chèvre',
                    'Rote Bete, Spargel, Ziegenkäse'
                ]
            ),
            dish(
                ['Италијанска бурата', 'Italian Burrata', 'Burrata all’Italiana', 'Burrata à l’Italienne', 'Italienische Burrata'],
                '1.600',
                ['milk'],
                [
                    'Бафало бурата, шери домати, маслинки, босилек, капари',
                    'Buffalo burrata, cherry tomatoes, olives, basil, capers',
                    'Burrata di bufala, pomodorini, olive, basilico, capperi',
                    'Burrata de bufflonne, tomates cerises, olives, basilic, câpres',
                    'Büffel-Burrata, Kirschtomaten, Oliven, Basilikum, Kapern'
                ]
            ),
            dish(
                ['Градинарска салата со авокадо', 'Garden Salad with Avocado', 'Insalata dell’Orto con Avocado', 'Salade du Potager à l’Avocat', 'Gartensalat mit Avocado'],
                '550',
                [],
                [
                    'Краставица, шери домати, пченка, авокадо, дресинг од лимон',
                    'Cucumber, cherry tomatoes, corn, avocado, lemon dressing',
                    'Cetriolo, pomodorini, mais, avocado, condimento al limone',
                    'Concombre, tomates cerises, maïs, avocat, vinaigrette au citron',
                    'Gurke, Kirschtomaten, Mais, Avocado, Zitronendressing'
                ]
            ),
            dish(
                ['Артичоки и пармезан „Како кај Салваторе“', 'Artichokes and Parmesan „Salvatore Style“', 'Carciofi e Parmigiano „Come da Salvatore“', 'Artichauts et Parmesan „façon Salvatore“', 'Artischocken und Parmesan „nach Art des Hauses“'],
                '650',
                ['milk'],
                [
                    'Артичоки, авокадо, дресинг од лимон и маслиново масло, пармезан',
                    'Artichokes, avocado, lemon and olive oil dressing, Parmesan',
                    'Carciofi, avocado, condimento di limone e olio d’oliva, parmigiano',
                    'Artichauts, avocat, vinaigrette au citron et à l’huile d’olive, parmesan',
                    'Artischocken, Avocado, Dressing aus Zitrone und Olivenöl, Parmesan'
                ]
            ),
            dish(
                ['Пилешка салата „Џулијана“', 'Julienne Chicken Salad', 'Insalata alla Giuliana di Pollo', 'Salade de Poulet à la Julienne', 'Hühnersalat „Juliana“'],
                '550',
                ['eggs'],
                [
                    'Пилешки гради, ајсберг, шери домати, краставица, дресинг со домашен мајонез',
                    'Chicken breast, iceberg lettuce, cherry tomatoes, cucumber, homemade mayonnaise dressing',
                    'Petto di pollo, lattuga iceberg, pomodorini, cetriolo, condimento con maionese fatta in casa',
                    'Blanc de poulet, laitue iceberg, tomates cerises, concombre, sauce à la mayonnaise maison',
                    'Hühnerbrust, Eisbergsalat, Kirschtomaten, Gurke, Dressing mit hausgemachter Mayonnaise'
                ]
            ),
            dish(
                ['Домашна капрезе салата', 'Homemade Caprese Salad', 'Insalata della Casa „Caprese“', 'Salade Caprese Maison', 'Hausgemachter Caprese-Salat'],
                '780',
                ['milk'],
                [
                    'Бафало моцарела, домати, босилок',
                    'Buffalo mozzarella, tomatoes, basil',
                    'Mozzarella di bufala, pomodori, basilico',
                    'Mozzarella de bufflonne, tomates, basilic',
                    'Büffelmozzarella, Tomaten, Basilikum'
                ]
            )
        ]
    },
    {
        category: ['Предјадења', 'Starters', 'Antipasti', 'Entrées', 'Vorspeisen'],
        items: [
            dish(
                ['Пршута и сувомеснати производи **', 'Prosciutto and Cured Meats **', 'Prosciutto e Salumi **', 'Prosciutto et Charcuterie **', 'Prosciutto und Wurstwaren **'],
                '1.300',
                ['milk', 'gluten'],
                [
                    'Пршута зреена 30 месеци, мортадела, пикантна салама Спијаната, пармезан, (200 г) суви домати, маслинки, грисини',
                    'Prosciutto aged 30 months, mortadella, spicy Spianata salami, Parmesan, (200 g) sun-dried tomatoes, olives, grissini',
                    'Prosciutto stagionato 30 mesi, mortadella, salame piccante Spianata, parmigiano, (200 g) pomodori secchi, olive, grissini',
                    'Prosciutto affiné 30 mois, mortadelle, salami piquant Spianata, parmesan, (200 g) tomates séchées, olives, gressins',
                    'Prosciutto, 30 Monate gereift, Mortadella, scharfe Salami Spianata, Parmesan, (200 g) getrocknete Tomaten, Oliven, Grissini'
                ],
                'pork'
            ),
            dish(
                ['Јунешки тартар', 'Beef Tartare', 'Tartara di Manzo', 'Tartare de Bœuf', 'Rindertatar'],
                '2.600',
                ['gluten', 'milk'],
                [
                    'Тартар од јунешко филе, печена јунешка коска, капери, потпечен леб, путер, Табаско',
                    'Beef fillet tartare, roasted bone marrow, capers, toasted bread, butter, Tabasco',
                    'Tartare di filetto di manzo, midollo arrostito, capperi, pane tostato, burro, Tabasco',
                    'Tartare de filet de bœuf, os à moelle rôti, câpres, pain grillé, beurre, Tabasco',
                    'Tatar vom Rinderfilet, gebratener Markknochen, Kapern, getoastetes Brot, Butter, Tabasco'
                ]
            ),
            dish(
                ['Јунешко карпачо со црн тартуф*', 'Beef Carpaccio with Black Truffle*', 'Manzo Crudo al Tartufo Nero*', 'Carpaccio de Bœuf à la Truffe Noire*', 'Rinder-Carpaccio mit schwarzem Trüffel*'],
                '2.300',
                ['eggs'],
                [
                    'Карпачо од јунешко филе, домашен мајонез, рукола, шери домати, свеж црн тартуф',
                    'Beef fillet carpaccio, homemade mayonnaise, rocket, cherry tomatoes, fresh black truffle',
                    'Carpaccio di filetto di manzo, maionese fatta in casa, rucola, pomodorini, tartufo nero fresco',
                    'Carpaccio de filet de bœuf, mayonnaise maison, roquette, tomates cerises, truffe noire fraîche',
                    'Carpaccio vom Rinderfilet, hausgemachte Mayonnaise, Rucola, Kirschtomaten, frischer schwarzer Trüffel'
                ]
            ),
            dish(
                ['Големи шпански инчуни на стара рецепта', 'Traditional Large Spanish Anchovies', 'Acciuga Grande all’Antica', 'Grande Anchois à l’Ancienne', 'Große spanische Sardellen nach Art des Hauses'],
                '1.900',
                ['fish', 'gluten'],
                [
                    'Големи шпански инчуни, маслиново масло, потпечен крцкав леб, конкасе домат',
                    'Large Spanish anchovies, olive oil, toasted crispy bread, tomato concassé',
                    'Grandi acciughe spagnole, olio d’oliva, pane croccante tostato, concassé di pomodoro',
                    'Gros anchois espagnols, huile d’olive, pain croustillant grillé, concassé de tomates',
                    'Große spanische Sardellen, Olivenöl, geröstetes knuspriges Brot, Tomatenconcassé'
                ]
            ),
            dish(
                ['Витело тонато', 'Vitello Tonnato', 'Vitello Tonnato', 'Vitello Tonnato', 'Vitello Tonnato'],
                '1.100',
                ['fish'],
                [
                    'Варен телешки рамстек, сос од туна, капери',
                    'Boiled veal rump, tuna sauce, capers',
                    'Girello di vitello bollito, salsa tonnata, capperi',
                    'Rumsteck de veau bouilli, sauce au thon, câpres',
                    'Gekochte Kalbsnuss, Thunfischsauce, Kapern'
                ]
            ),
            dish(
                ['Пршута и бурата', 'Prosciutto and Burrata', 'Crudo e Burrata', 'Jambon Cru et Burrata', 'Prosciutto und Burrata'],
                '1.500',
                ['milk'],
                [
                    'Пршута зреена 30 месеци, бурата, маслиново масло',
                    'Prosciutto aged 30 months, burrata, olive oil',
                    'Prosciutto stagionato 30 mesi, burrata, olio d’oliva',
                    'Prosciutto affiné 30 mois, burrata, huile d’olive',
                    'Prosciutto, 30 Monate gereift, Burrata, Olivenöl'
                ],
                'pork'
            ),
            dish(
                ['Пршута и диња', 'Prosciutto and Melon', 'Prosciutto e Melone', 'Prosciutto et Melon', 'Prosciutto und Melone'],
                '700',
                [],
                [
                    'Пршута зреена 30 месеци и диња',
                    'Prosciutto aged 30 months and melon',
                    'Prosciutto stagionato 30 mesi e melone',
                    'Prosciutto affiné 30 mois et melon',
                    'Prosciutto, 30 Monate gereift, und Melone'
                ],
                'pork'
            ),
            dish(
                ['Брускети', 'Bruschetta', 'Crostoni di Pane', 'Bruschettas', 'Bruschetta'],
                '600',
                ['gluten', 'milk', 'nuts'],
                [
                    'Брускети со домати, босилок, песто, маслиново масло',
                    'Bruschetta with tomatoes, basil, pesto, olive oil',
                    'Bruschette con pomodori, basilico, pesto, olio d’oliva',
                    'Bruschettas aux tomates, basilic, pesto, huile d’olive',
                    'Bruschetta mit Tomaten, Basilikum, Pesto, Olivenöl'
                ]
            ),
            dish(
                ['Сардиниски крцкав леб (Пане Каразау)', 'Sardinian Crispy Flatbread (Pane Carasau)', 'Pane Carasau „Sardo“', 'Pain Sarde Croustillant (Pane Carasau)', 'Sardinisches Knusperbrot (Pane Carasau)'],
                '300',
                ['gluten'],
                [
                    'Традиционален тенок, крцкав леб од Сардинија',
                    'Traditional thin, crispy flatbread from Sardinia',
                    'Tradizionale pane sottile e croccante della Sardegna',
                    'Pain traditionnel fin et croustillant de Sardaigne',
                    'Traditionelles dünnes, knuspriges Brot aus Sardinien'
                ]
            ),
            dish(
                ['Модар патлиџан на наполитански начин', 'Aubergine Neapolitan Style', 'Melanzane alla Napoletana', 'Aubergines à la Napolitaine', 'Aubergine nach neapolitanischer Art'],
                '900',
                ['milk'],
                [
                    'Модар патлиџан, пармезан, доматен сос, босилок',
                    'Aubergine, Parmesan, tomato sauce, basil',
                    'Melanzane, parmigiano, salsa di pomodoro, basilico',
                    'Aubergine, parmesan, sauce tomate, basilic',
                    'Aubergine, Parmesan, Tomatensauce, Basilikum'
                ]
            ),
            dish(
                ['Мексирана пржена риба и морски плодови', 'Mixed Fried Seafood', 'Fritto Misto di Pesce', 'Friture Mixte de Poissons', 'Frittierter Fisch- und Meeresfrüchte-Mix'],
                '1.000',
                ['shellfish', 'fish', 'gluten'],
                [
                    'Ракчиња, лигњи, ситни риби Атерина, поховани тиквички',
                    'Shrimps, squid, small Atherina fish, breaded courgettes',
                    'Gamberetti, calamari, piccoli pesci Aterina, zucchine impanate',
                    'Crevettes, calamars, petits poissons Athérine, courgettes panées',
                    'Garnelen, Tintenfisch, kleine Ährenfische (Aterina), panierte Zucchini'
                ]
            ),
            dish(
                ['Каталана од морски плодови', 'Seafood Catalana', 'Catalana del Mare', 'Catalane de la Mer', 'Meeresfrüchte-Catalana'],
                '1.000',
                ['shellfish'],
                [
                    'Варени шкампи, шери домати, црвен кромид, босилек, маслиново масло',
                    'Boiled scampi, cherry tomatoes, red onion, basil, olive oil',
                    'Scampi bolliti, pomodorini, cipolla rossa, basilico, olio d’oliva',
                    'Langoustines bouillies, tomates cerises, oignon rouge, basilic, huile d’olive',
                    'Gekochte Scampi, Kirschtomaten, rote Zwiebel, Basilikum, Olivenöl'
                ]
            ),
            dish(
                ['Артичоки на селански начин', 'Country-Style Artichokes', 'Carciofi alla Contadina', 'Artichauts à la Paysanne', 'Artischocken nach Bauernart'],
                '650',
                [],
                [
                    'Гриловани артичоки со лук и мајчина душица',
                    'Grilled artichokes with garlic and thyme',
                    'Carciofi grigliati con aglio e timo',
                    'Artichauts grillés à l’ail et au thym',
                    'Gegrillte Artischocken mit Knoblauch und Thymian'
                ]
            ),
            dish(
                ['Вргањ со палента*', 'Porcini Mushrooms with Polenta*', 'Genovese di Porcini con Polenta*', 'Cèpes à la Génoise avec Polenta*', 'Steinpilze mit Polenta*'],
                '1.000',
                [],
                [
                    'Вргањ, босилек, лук, палента',
                    'Porcini mushrooms, basil, garlic, polenta',
                    'Funghi porcini, basilico, aglio, polenta',
                    'Cèpes, basilic, ail, polenta',
                    'Steinpilze, Basilikum, Knoblauch, Polenta'
                ]
            ),
            dish(
                ['Аспарагус со пармезан', 'Asparagus with Parmesan', 'Asparagi Reggiano', 'Asperges au Parmesan', 'Spargel mit Parmesan'],
                '800',
                ['milk'],
                [
                    'Аспарагус, пармезан, путер',
                    'Asparagus, Parmesan, butter',
                    'Asparagi, parmigiano, burro',
                    'Asperges, parmesan, beurre',
                    'Spargel, Parmesan, Butter'
                ]
            )
        ]
    },
    {
        category: ['Сезонски супи', 'Seasonal Soups', 'Minestre di Stagione', 'Soupes de Saison', 'Saisonale Suppen'],
        items: [
            dish(
                ['Минестроне од зеленчук', 'Vegetable Minestrone Soup', 'Minestrone di Verdure', 'Minestrone de Légumes', 'Gemüse-Minestrone'],
                '500',
                [],
                [
                    'Италијанска супа од зеленчук',
                    'Italian vegetable soup',
                    'Zuppa di verdure all’italiana',
                    'Soupe de légumes à l’italienne',
                    'Italienische Gemüsesuppe'
                ]
            ),
            dish(
                ['Тосканска супа од домати', 'Tuscan Tomato Soup', 'Pappa al Pomodoro', 'Soupe de Tomates Toscane', 'Tomatensuppe nach toskanischer Art'],
                '400',
                ['gluten'],
                [
                    'Супа од домати со традиционален леб',
                    'Tomato soup with traditional bread',
                    'Zuppa di pomodoro con pane tradizionale',
                    'Soupe de tomates au pain traditionnel',
                    'Tomatensuppe mit traditionellem Brot'
                ]
            )
        ]
    },
    {
        category: ['Нашите ризоти', 'Our Risottos', 'I Nostri Risotti', 'Nos Risottos', 'Unsere Risottos'],
        items: [
            dish(
                ['Ризото со црн тартуф*', 'Black Truffle Risotto*', 'Risotto Mantecato al Tartufo Nero*', 'Risotto Crémeux à la Truffe Noire*', 'Risotto mit schwarzem Trüffel*'],
                '1.500',
                ['milk', 'sulphites'],
                [
                    'Арборио ориз, путер, свеж црн тартуф, вргањ, пармезан, бело вино',
                    'Arborio rice, butter, fresh black truffle, porcini mushrooms, Parmesan, white wine',
                    'Riso Arborio, burro, tartufo nero fresco, funghi porcini, parmigiano, vino bianco',
                    'Riz Arborio, beurre, truffe noire fraîche, cèpes, parmesan, vin blanc',
                    'Arborio-Reis, Butter, frischer schwarzer Trüffel, Steinpilze, Parmesan, Weißwein'
                ]
            ),
            dish(
                ['Ризото со фрико (пржен пармезан)', 'Risotto with Frico (Crispy Parmesan)', 'Risotto Mantecato al Frico', 'Risotto Crémeux au Frico', 'Risotto mit Frico'],
                '900',
                ['milk'],
                [
                    'Арборио ориз, путер, frico (пржен пармезан)',
                    'Arborio rice, butter, frico (fried Parmesan)',
                    'Riso Arborio, burro, frico (parmigiano fritto)',
                    'Riz Arborio, beurre, frico (parmesan frit)',
                    'Arborio-Reis, Butter, Frico (gebratener Parmesan)'
                ]
            ),
            dish(
                ['Ризото со морски плодови', 'Seafood Risotto', 'Risotto ai Frutti di Mare', 'Risotto aux Fruits de Mer', 'Meeresfrüchte-Risotto'],
                '1.100',
                ['shellfish', 'fish', 'sulphites'],
                [
                    'Арборио ориз, школки, вонголи, ракчиња, ботарга, морски планктон, лук, бело вино',
                    'Arborio rice, mussels, clams, shrimps, bottarga, sea plankton, garlic, white wine',
                    'Riso Arborio, cozze, vongole, gamberetti, bottarga, plancton marino, aglio, vino bianco',
                    'Riz Arborio, moules, palourdes, crevettes, boutargue, plancton marin, ail, vin blanc',
                    'Arborio-Reis, Miesmuscheln, Venusmuscheln, Garnelen, Bottarga, Meeresplankton, Knoblauch, Weißwein'
                ]
            ),
            dish(
                ['Пролетно ризото', 'Spring Risotto', 'Risotto Primavera', 'Risotto Primavera', 'Frühlings-Risotto'],
                '500',
                ['milk', 'sulphites'],
                [
                    'Арборио ориз, аспарагус, тиквички, црвен грав, бело вино, путер, пармезан',
                    'Arborio rice, asparagus, courgettes, red beans, white wine, butter, Parmesan',
                    'Riso Arborio, asparagi, zucchine, fagioli rossi, vino bianco, burro, parmigiano',
                    'Riz Arborio, asperges, courgettes, haricots rouges, vin blanc, beurre, parmesan',
                    'Arborio-Reis, Spargel, Zucchini, rote Bohnen, Weißwein, Butter, Parmesan'
                ]
            )
        ]
    },
    {
        category: ['Нашите тестенини', 'Our Pasta', 'Le Nostre Paste', 'Nos Pâtes', 'Unsere Pasta'],
        items: [
            dish(
                ['Шпагети со лук, маслиново масло и чили', 'Spaghetti with Garlic, Olive Oil and Chili', 'Spaghetti Aglio Olio e Peperoncino', 'Spaghetti à l’Ail, Huile d’Olive et Piment', 'Spaghetti mit Knoblauch, Olivenöl und Chili'],
                '500',
                ['gluten'],
                [
                    'Шпагети, лук, маслиново масло, магдонос и свежо чили',
                    'Spaghetti, garlic, olive oil, parsley and fresh chilli',
                    'Spaghetti, aglio, olio d’oliva, prezzemolo e peperoncino fresco',
                    'Spaghetti, ail, huile d’olive, persil et piment frais',
                    'Spaghetti, Knoblauch, Olivenöl, Petersilie und frische Chili'
                ]
            ),
            dish(
                ['Запечени таљолини на стара рецепта', 'Traditional Baked Tagliolini', 'Tagliolini al Forno come „Una Volta“', 'Tagliolini Gratinés à l’Ancienne', 'Überbackene Tagliolini nach Art von früher'],
                '600',
                ['gluten', 'milk'],
                [
                    'Домашно приготвена потпечена таљолини паста со кото шунка и гауда сирење',
                    'Homemade baked tagliolini pasta with cooked ham and Gouda cheese',
                    'Tagliolini fatti in casa gratinati al forno con prosciutto cotto e formaggio Gouda',
                    'Tagliolini maison gratinés au four, jambon cuit et fromage Gouda',
                    'Hausgemachte überbackene Tagliolini mit Kochschinken und Gouda'
                ],
                'pork'
            ),
            dish(
                ['Капелачи со црн тартуф*', 'Cappellacci with Black Truffle*', 'Cappellaccio al Tartufo Nero*', 'Cappellacci à la Truffe Noire*', 'Cappellacci mit schwarzem Trüffel*'],
                '1.100',
                ['gluten', 'milk', 'eggs'],
                [
                    'Домашно приготвена голема равиола, рикота сирење, спанаќ, жолчка од јајце, путер, свеж црн тартуф',
                    'Homemade large ravioli, ricotta cheese, spinach, egg yolk, butter, fresh black truffle',
                    'Grande raviolo fatto in casa, ricotta, spinaci, tuorlo d’uovo, burro, tartufo nero fresco',
                    'Grand raviolo maison, ricotta, épinards, jaune d’œuf, beurre, truffe noire fraîche',
                    'Hausgemachtes großes Raviolo, Ricotta, Spinat, Eigelb, Butter, frischer schwarzer Trüffel'
                ]
            ),
            dish(
                ['Таљатели во колце пармезан („Руота“)', 'Tagliatelle in a Parmesan Wheel', 'Tagliatelle alla „Ruota“', 'Tagliatelles dans une Meule de Parmesan', 'Tagliatelle im Parmesanlaib'],
                '1.200',
                ['gluten', 'milk'],
                [
                    'Таљатели паста во пита пармезан',
                    'Tagliatelle served in a wheel of Parmesan',
                    'Tagliatelle in forma di parmigiano',
                    'Tagliatelles dans une meule de parmesan',
                    'Tagliatelle im Parmesanlaib'
                ]
            ),
            dish(
                ['Таљатели со вргањ*', 'Tagliatelle with Porcini Mushrooms*', 'Tagliatelle ai Funghi Porcini*', 'Tagliatelles aux Cèpes*', 'Tagliatelle mit Steinpilzen*'],
                '800',
                ['gluten', 'milk'],
                [
                    'Таљатели паста, вргањ, млечен крем, пармезан',
                    'Tagliatelle, porcini mushrooms, cream, Parmesan',
                    'Tagliatelle, funghi porcini, panna, parmigiano',
                    'Tagliatelles, cèpes, crème, parmesan',
                    'Tagliatelle, Steinpilze, Sahne, Parmesan'
                ]
            ),
            dish(
                ['Тортели со путер и жалфија', 'Tortelli with Butter and Sage', 'Tortelli Burro e Salvia', 'Tortelli au Beurre et à la Sauge', 'Tortelli mit Butter und Salbei'],
                '850',
                ['gluten', 'milk', 'eggs'],
                [
                    'Домашно приготвена равиоли паста, полнета со рикота и спанаќ во сос од жалфија и путер',
                    'Homemade ravioli filled with ricotta and spinach in a sage and butter sauce',
                    'Ravioli fatti in casa ripieni di ricotta e spinaci in salsa di burro e salvia',
                    'Ravioli maison farcis à la ricotta et aux épinards, sauce au beurre et à la sauge',
                    'Hausgemachte Ravioli, gefüllt mit Ricotta und Spinat, in Salbei-Butter-Sauce'
                ]
            ),
            dish(
                ['Пакери со доматен сос', 'Paccheri with Tomato Sauce', 'Paccheri al Pomodoro', 'Paccheri à la Sauce Tomate', 'Paccheri in Tomatensauce'],
                '700',
                ['gluten', 'milk'],
                [
                    'Пакери паста, доматен сос, босилек, пармезан',
                    'Paccheri pasta, tomato sauce, basil, Parmesan',
                    'Paccheri, salsa di pomodoro, basilico, parmigiano',
                    'Paccheri, sauce tomate, basilic, parmesan',
                    'Paccheri, Tomatensauce, Basilikum, Parmesan'
                ]
            ),
            dish(
                ['Шпагети карбонара', 'Spaghetti Carbonara', 'Spaghetti alla Carbonara', 'Spaghetti Carbonara', 'Spaghetti Carbonara'],
                '1.100',
                ['gluten', 'milk', 'eggs'],
                [
                    'Шпагети, гванчале, пекорино романо, жолчка од јајце, црн бибер',
                    'Spaghetti, guanciale, Pecorino Romano, egg yolk, black pepper',
                    'Spaghetti, guanciale, pecorino romano, tuorlo d’uovo, pepe nero',
                    'Spaghetti, guanciale, pecorino romano, jaune d’œuf, poivre noir',
                    'Spaghetti, Guanciale, Pecorino Romano, Eigelb, schwarzer Pfeffer'
                ],
                'pork'
            ),
            dish(
                ['Њоки со горгонзола и ореви', 'Gnocchi with Gorgonzola and Walnuts', 'Gnocchi al Gorgonzola e Noci', 'Gnocchis au Gorgonzola et aux Noix', 'Gnocchi mit Gorgonzola und Walnüssen'],
                '550',
                ['gluten', 'milk', 'nuts'],
                [
                    'Домашно приготвени њоки, горгонзола, ореви',
                    'Homemade gnocchi, Gorgonzola, walnuts',
                    'Gnocchi fatti in casa, gorgonzola, noci',
                    'Gnocchis maison, gorgonzola, noix',
                    'Hausgemachte Gnocchi, Gorgonzola, Walnüsse'
                ]
            ),
            dish(
                ['Шпагети со морски плодови', 'Seafood Spaghetti', 'Spaghetti alla Scoglio', 'Spaghetti aux Fruits de Mer', 'Spaghetti mit Meeresfrüchten'],
                '1.000',
                ['gluten', 'shellfish', 'fish'],
                [
                    'Шпагети, вонголи, лигњи, школки, ракчиња, шери домати, ботарга, лук, магдонос',
                    'Spaghetti, clams, squid, mussels, shrimps, cherry tomatoes, bottarga, garlic, parsley',
                    'Spaghetti, vongole, calamari, cozze, gamberetti, pomodorini, bottarga, aglio, prezzemolo',
                    'Spaghetti, palourdes, calamars, moules, crevettes, tomates cerises, boutargue, ail, persil',
                    'Spaghetti, Venusmuscheln, Tintenfisch, Miesmuscheln, Garnelen, Kirschtomaten, Bottarga, Knoblauch, Petersilie'
                ]
            ),
            dish(
                ['Таљарди болоњезе', 'Tagliardi Bolognese', 'Tagliardi alla Bolognese', 'Tagliardi à la Bolognaise', 'Tagliardi Bolognese'],
                '1.000',
                ['gluten'],
                [
                    'Домашно приготвена таљарди паста во болоњезе сос',
                    'Homemade tagliardi pasta in Bolognese sauce',
                    'Tagliardi fatti in casa al ragù alla bolognese',
                    'Tagliardi maison à la sauce bolognaise',
                    'Hausgemachte Tagliardi in Bolognese-Sauce'
                ]
            ),
            dish(
                ['Лингвини Маре е Монти (море и планина)', 'Linguine Mare e Monti', 'Linguine Mare e Monti', 'Linguine Mare e Monti', 'Linguine Mare e Monti'],
                '1.100',
                ['gluten', 'shellfish'],
                [
                    'Лингвини паста, вонголи, вргањ, суви домати, лук, маслиново масло, магдонос',
                    'Linguine pasta, clams, porcini mushrooms, sun-dried tomatoes, garlic, olive oil, parsley',
                    'Linguine, vongole, funghi porcini, pomodori secchi, aglio, olio d’oliva, prezzemolo',
                    'Linguine, palourdes, cèpes, tomates séchées, ail, huile d’olive, persil',
                    'Linguine, Venusmuscheln, Steinpilze, getrocknete Tomaten, Knoblauch, Olivenöl, Petersilie'
                ]
            )
        ]
    },
    {
        category: ['Пици', 'Pizzas', 'Pizze', 'Pizzas', 'Pizzen'],
        items: [
            dish(
                ['Маргарита', 'Margherita', 'La Margherita', 'La Margherita', 'La Margherita'],
                '800',
                ['gluten', 'milk'],
                [
                    'Пица тесто, доматен сос, моцарела, босилек',
                    'Pizza dough, tomato sauce, mozzarella, basil',
                    'Impasto per pizza, salsa di pomodoro, mozzarella, basilico',
                    'Pâte à pizza, sauce tomate, mozzarella, basilic',
                    'Pizzateig, Tomatensauce, Mozzarella, Basilikum'
                ]
            ),
            dish(
                ['Капричоза', 'Capricciosa', 'La Capricciosa', 'La Capricciosa', 'La Capricciosa'],
                '1.000',
                ['gluten', 'milk'],
                [
                    'Пица тесто, доматен сос, моцарела, кото шунка, шампињони, маслинки, артичоки',
                    'Pizza dough, tomato sauce, mozzarella, cooked ham, mushrooms, olives, artichokes',
                    'Impasto per pizza, salsa di pomodoro, mozzarella, prosciutto cotto, funghi champignon, olive, carciofi',
                    'Pâte à pizza, sauce tomate, mozzarella, jambon cuit, champignons, olives, artichauts',
                    'Pizzateig, Tomatensauce, Mozzarella, Kochschinken, Champignons, Oliven, Artischocken'
                ],
                'pork'
            ),
            dish(
                ['Четири сирења', 'Four Cheeses', 'La Quattro Formaggi', 'La Quattro Formaggi', 'Vier-Käse-Pizza'],
                '950',
                ['gluten', 'milk'],
                [
                    'Пица тесто, моцарела, горгонзола, страчатела, пармезан',
                    'Pizza dough, mozzarella, Gorgonzola, stracciatella, Parmesan',
                    'Impasto per pizza, mozzarella, gorgonzola, stracciatella, parmigiano',
                    'Pâte à pizza, mozzarella, gorgonzola, stracciatella, parmesan',
                    'Pizzateig, Mozzarella, Gorgonzola, Stracciatella, Parmesan'
                ]
            ),
            dish(
                ['Ѓавола (пикантна)', 'Diavola (Spicy)', 'La Diavola', 'La Diavola', 'La Diavola (scharf)'],
                '950',
                ['gluten', 'milk'],
                [
                    'Пица тесто, доматен сос, моцарела, спијаната салама',
                    'Pizza dough, tomato sauce, mozzarella, Spianata salami',
                    'Impasto per pizza, salsa di pomodoro, mozzarella, salame Spianata',
                    'Pâte à pizza, sauce tomate, mozzarella, salami Spianata',
                    'Pizzateig, Tomatensauce, Mozzarella, Salami Spianata'
                ],
                'pork'
            ),
            dish(
                ['Пица со тартуф*', 'Truffle Pizza*', 'La Tartufata*', 'La Tartufata*', 'Trüffel-Pizza*'],
                '1.900',
                ['gluten', 'milk'],
                [
                    'Пица тесто, моцарела, страчатела, бри сирење, рукола, свеж црн тартуф',
                    'Pizza dough, mozzarella, stracciatella, Brie cheese, rocket, fresh black truffle',
                    'Impasto per pizza, mozzarella, stracciatella, brie, rucola, tartufo nero fresco',
                    'Pâte à pizza, mozzarella, stracciatella, brie, roquette, truffe noire fraîche',
                    'Pizzateig, Mozzarella, Stracciatella, Brie, Rucola, frischer schwarzer Trüffel'
                ]
            )
        ]
    },
    {
        category: ['Главни јадења со месо', 'Meat Main Courses', 'Secondi di Carne', 'Plats Principaux de Viande', 'Fleischgerichte'],
        items: [
            dish(
                ['Лесно пилешко со доматен сос', 'Light Chicken with Tomato Sauce', 'Pollo al Pomodoro „Leggero“', 'Poulet Léger à la Sauce Tomate', 'Leichtes Hähnchen in Tomatensauce'],
                '1.100',
                ['milk'],
                [
                    'Пилешки гради, доматен сос, бафало моцарела, лук, оригано',
                    'Chicken breast, tomato sauce, buffalo mozzarella, garlic, oregano',
                    'Petto di pollo, salsa di pomodoro, mozzarella di bufala, aglio, origano',
                    'Blanc de poulet, sauce tomate, mozzarella de bufflonne, ail, origan',
                    'Hühnerbrust, Tomatensauce, Büffelmozzarella, Knoblauch, Oregano'
                ]
            ),
            dish(
                ['Грилован телешки рамстек во парчиња', 'Sliced Grilled Veal', 'Vitello Affettato alla Griglia', 'Veau Grillé en Tranches', 'Gegrillte Kalbsnuss in Scheiben'],
                '2.100',
                [],
                [
                    'Телешки рамстек, рукола, шери домати',
                    'Sliced grilled veal rump, rocket, cherry tomatoes',
                    'Girello di vitello affettato alla griglia, rucola, pomodorini',
                    'Rumsteck de veau grillé en tranches, roquette, tomates cerises',
                    'Gegrillte Kalbsnuss in Scheiben, Rucola, Kirschtomaten'
                ]
            ),
            dish(
                ['Телешка кослота на милански начин', 'Veal Cutlet Milanese Style', 'Costoletta alla Milanese', 'Côtelette de Veau à la Milanaise', 'Kalbskotelett nach Mailänder Art'],
                '2.400',
                ['gluten', 'eggs'],
                [
                    'Панирана телешка кременадла со салата од рукола и шери домати',
                    'Breaded veal cutlet with rocket and cherry tomato salad',
                    'Cotoletta di vitello impanata con insalata di rucola e pomodorini',
                    'Côtelette de veau panée, salade de roquette et tomates cerises',
                    'Paniertes Kalbskotelett mit Rucola-Kirschtomaten-Salat'
                ]
            ),
            dish(
                ['Салтимбока на римски начин', 'Saltimbocca Roman Style', 'Saltimbocca alla Romana', 'Saltimbocca à la Romaine', 'Saltimbocca nach römischer Art'],
                '1.800',
                ['milk', 'sulphites'],
                [
                    'Телешки рамстек, пршута, жалфија, путер, бело вино',
                    'Veal rump, prosciutto, sage, butter, white wine',
                    'Girello di vitello, prosciutto, salvia, burro, vino bianco',
                    'Rumsteck de veau, prosciutto, sauge, beurre, vin blanc',
                    'Kalbsnuss, Prosciutto, Salbei, Butter, Weißwein'
                ],
                'pork'
            ),
            dish(
                ['Телешки џигер на венецијански начин', 'Veal Liver Venetian Style', 'Fegato alla Veneziana', 'Foie de Veau à la Vénitienne', 'Kalbsleber nach venezianischer Art'],
                '800',
                ['milk'],
                [
                    'Телешки џигер, кромид, грил палента, путер, магдонос',
                    'Veal liver, onion, grilled polenta, butter, parsley',
                    'Fegato di vitello, cipolla, polenta grigliata, burro, prezzemolo',
                    'Foie de veau, oignon, polenta grillée, beurre, persil',
                    'Kalbsleber, Zwiebeln, gegrillte Polenta, Butter, Petersilie'
                ]
            ),
            dish(
                ['Традиционален телешки оссобуко на милански начин', 'Traditional Ossobuco Milanese Style', 'Osso Buco Tradizionale alla Milanese', 'Osso Buco Traditionnel à la Milanaise', 'Traditionelles Ossobuco nach Mailänder Art'],
                '1.900',
                ['milk'],
                [
                    'Телешка потколеница, арборио ориз, шафран, путер, пармезан',
                    'Veal shank, Arborio rice, saffron, butter, Parmesan',
                    'Ossobuco di vitello, riso Arborio, zafferano, burro, parmigiano',
                    'Jarret de veau, riz Arborio, safran, beurre, parmesan',
                    'Kalbshaxe, Arborio-Reis, Safran, Butter, Parmesan'
                ]
            ),
            dish(
                ['Јунешко филе во кремозен сос од зелен бибер', 'Beef Fillet in Creamy Green Pepper Sauce', 'Manzo al Pepe Verde Cremoso', 'Filet de Bœuf à la Sauce Crémeuse au Poivre Vert', 'Rinderfilet in cremiger grüner Pfeffersauce'],
                '3.100',
                ['gluten', 'milk'],
                [
                    'Јунешко филе во сос од зелен бибер, бриош леб',
                    'Beef fillet in green pepper sauce, brioche bread',
                    'Filetto di manzo in salsa cremosa al pepe verde, pane brioche',
                    'Filet de bœuf à la sauce au poivre vert, pain brioché',
                    'Rinderfilet in grüner Pfeffersauce, Brioche-Brot'
                ]
            ),
            dish(
                ['Јунешко филе „Росини“', 'Beef Fillet Rossini', 'Filetto di Manzo alla Rossini', 'Filet de Bœuf à la Rossini', 'Rinderfilet „Rossini“'],
                '3.500',
                ['gluten', 'milk', 'sulphites'],
                [
                    'Јунешко филе, сос од црвено вино, џигер од патка и бриош леб',
                    'Beef fillet, red wine sauce, duck liver and brioche bread',
                    'Filetto di manzo, salsa al vino rosso, fegato d’anatra e pane brioche',
                    'Filet de bœuf, sauce au vin rouge, foie de canard et pain brioché',
                    'Rinderfilet, Rotweinsauce, Entenleber und Brioche-Brot'
                ]
            ),
            dish(
                ['Зреен рибај стек (30 дена)*', '30-Day Aged Ribeye Steak*', 'USDA Ribeye Frollato 30 Giorni*', 'Steak Ribeye Affiné 30 Jours*', '30 Tage gereiftes Ribeye-Steak*'],
                '*10.000',
                ['milk'],
                [
                    '30 дена зреен Рибај стек со печени компири, путер и сос од печурки',
                    '30-day aged ribeye steak with roasted potatoes, butter and mushroom sauce',
                    'Ribeye USDA frollato 30 giorni con patate arrosto, burro e salsa ai funghi',
                    'Steak ribeye affiné 30 jours, pommes de terre rôties, beurre et sauce aux champignons',
                    '30 Tage gereiftes Ribeye-Steak mit Ofenkartoffeln, Butter und Pilzsauce'
                ],
                'perKg'
            ),
            dish(
                ['Зреен Фиорентина стек (30 дена)*', '30-Day Aged Fiorentina Steak*', 'Bistecca Fiorentina Frollata 30 Giorni*', 'Bistecca Fiorentina Affinée 30 Jours*', '30 Tage gereiftes Fiorentina-Steak*'],
                '*10.000',
                ['milk'],
                [
                    '30 дена зреен Фиорентина стек со печени компири, путер и вргањ',
                    '30-day aged Fiorentina steak with roasted potatoes, butter and porcini mushrooms',
                    'Bistecca alla fiorentina frollata 30 giorni con patate arrosto, burro e funghi porcini',
                    'Bistecca fiorentina affinée 30 jours, pommes de terre rôties, beurre et cèpes',
                    '30 Tage gereiftes Fiorentina-Steak mit Ofenkartoffeln, Butter und Steinpilzen'
                ],
                'perKg'
            ),
            dish(
                ['Зрено јунешко филе (10 дена)*', '10-Day Aged Beef Fillet*', 'Filetto di Manzo Frollato 10 Giorni*', 'Filet de Bœuf Affiné 10 Jours*', '10 Tage gereiftes Rinderfilet*'],
                '*10.000',
                ['milk'],
                [
                    '10 дена зреено јунешко филе со грилован аспарагус и путер',
                    '10-day aged beef fillet with grilled asparagus and butter',
                    'Filetto di manzo frollato 10 giorni con asparagi grigliati e burro',
                    'Filet de bœuf affiné 10 jours, asperges grillées et beurre',
                    '10 Tage gereiftes Rinderfilet mit gegrilltem Spargel und Butter'
                ],
                'perKg'
            )
        ]
    },
    {
        category: ['Главни јадења со риба', 'Fish Main Courses', 'Secondi di Pesce', 'Plats Principaux de Poisson', 'Fischgerichte'],
        items: [
            dish(
                ['Гамбери во розов сос', 'Prawns in Pink Sauce', 'Gamberoni in Salsa Rosa', 'Gambas en Sauce Rose', 'Riesengarnelen in Rosasauce'],
                '1.100',
                ['shellfish', 'milk', 'sulphites'],
                [
                    'Гамбери, бело вино, биск, путер, бренди и доматен сос',
                    'Prawns, white wine, bisque, butter, brandy and tomato sauce',
                    'Gamberoni, vino bianco, bisque, burro, brandy e salsa di pomodoro',
                    'Gambas, vin blanc, bisque, beurre, brandy et sauce tomate',
                    'Riesengarnelen, Weißwein, Bisque, Butter, Brandy und Tomatensauce'
                ]
            ),
            dish(
                ['Октопод на наш начин', 'Octopus Our Way', 'Polpo a Modo Nostro', 'Poulpe Façon Maison', 'Oktopus nach Art des Hauses'],
                '2.500',
                ['shellfish'],
                [
                    'Варен октопод, компири, магдонос, маслиново масло',
                    'Boiled octopus, potatoes, parsley, olive oil',
                    'Polpo bollito, patate, prezzemolo, olio d’oliva',
                    'Poulpe bouilli, pommes de terre, persil, huile d’olive',
                    'Gekochter Oktopus, Kartoffeln, Petersilie, Olivenöl'
                ]
            ),
            dish(
                ['Лаврак со арома на лимон', 'Lemon-Scented Sea Bass', 'Branzino al Profumo di Limone', 'Bar au Parfum de Citron', 'Wolfsbarsch mit Zitronenaroma'],
                '2.500',
                ['fish', 'milk'],
                [
                    'Филе од лаврак во сос од путер, лимон и капери',
                    'Sea bass fillet in butter, lemon and caper sauce',
                    'Filetto di branzino in salsa di burro, limone e capperi',
                    'Filet de bar sauce au beurre, citron et câpres',
                    'Wolfsbarschfilet in Butter-Zitronen-Kapern-Sauce'
                ]
            ),
            dish(
                ['Лосос во корушка од зачини', 'Herb-Crusted Salmon', 'Salmone in Crosta di Erbe', 'Saumon en Croûte d’Herbes', 'Lachs in Kräuterkruste'],
                '1.700',
                ['fish', 'gluten'],
                [
                    'Филе од лосос, лебни трошки, рузмарин, кора од лимон, грилован сезонски зеленчук',
                    'Salmon fillet, breadcrumbs, rosemary, lemon zest, grilled seasonal vegetables',
                    'Filetto di salmone, pangrattato, rosmarino, scorza di limone, verdure di stagione grigliate',
                    'Filet de saumon, chapelure, romarin, zeste de citron, légumes de saison grillés',
                    'Lachsfilet, Semmelbrösel, Rosmarin, Zitronenschale, gegrilltes Saisongemüse'
                ]
            )
        ]
    },
    {
        category: ['Прилози', 'Side Dishes', 'Contorni', 'Accompagnements', 'Beilagen'],
        items: [
            dish(
                ['Рустикални печени компири', 'Rustic Roasted Potatoes', 'Patate Rustiche al Forno', 'Pommes de Terre Rôties Rustiques', 'Rustikale Ofenkartoffeln'],
                '300',
                [],
                [
                    'Печен компир со рузмарин, лук и маслиново масло',
                    'Roasted potatoes with rosemary, garlic and olive oil',
                    'Patate al forno con rosmarino, aglio e olio d’oliva',
                    'Pommes de terre rôties au romarin, à l’ail et à l’huile d’olive',
                    'Ofenkartoffeln mit Rosmarin, Knoblauch und Olivenöl'
                ]
            ),
            dish(
                ['Грилован зеленчук', 'Grilled Vegetables', 'Grigliata di Verdure', 'Légumes Grillés', 'Gegrilltes Gemüse'],
                '320',
                ['milk'],
                [
                    'Микс од сезонски зеленчук со козјо сирење',
                    'Mix of seasonal vegetables with goat cheese',
                    'Mix di verdure di stagione con formaggio di capra',
                    'Mélange de légumes de saison au fromage de chèvre',
                    'Mix aus Saisongemüse mit Ziegenkäse'
                ]
            ),
            dish(
                ['Спанаќ со путер', 'Spinach with Butter', 'Spinaci al Burro', 'Épinards au Beurre', 'Spinat mit Butter'],
                '300',
                ['milk'],
                [
                    'Спанаќ, путер и пармезан',
                    'Spinach, butter and Parmesan',
                    'Spinaci, burro e parmigiano',
                    'Épinards, beurre et parmesan',
                    'Spinat, Butter und Parmesan'
                ]
            )
        ]
    },
    {
        category: ['Десерти', 'Desserts', 'Dolci', 'Desserts', 'Desserts'],
        items: [
            dish(
                ['Класична лимон меренге торта', 'Classic Lemon Meringue Pie', 'Mernigata Classica al Limone', 'Tarte Meringuée Classique au Citron', 'Klassischer Zitronen-Baiser-Kuchen'],
                '500',
                ['gluten', 'eggs'],
                ''
            ),
            dish(
                ['Чоколадна торта', 'Chocolate Cake', 'Torta al Cioccolato', 'Gâteau au Chocolat', 'Schokoladenkuchen'],
                '450',
                ['gluten', 'eggs', 'milk'],
                ''
            ),
            dish(
                ['Класично тирамису', 'Classic Tiramisu', 'Tiramisu Classico', 'Tiramisu Classique', 'Klassisches Tiramisu'],
                '550',
                ['gluten', 'eggs', 'milk'],
                ''
            ),
            dish(
                ['Сладолед со вкус на ванила', 'Vanilla Ice Cream', 'Gelato Fior di Vaniglia', 'Glace à la Vanille', 'Vanille-Eiscreme'],
                '400',
                ['milk', 'eggs'],
                ''
            ),
            dish(
                ['Афогато со кафе', 'Affogato with Coffee', 'Affogato al Caffe’', 'Affogato au Café', 'Affogato mit Kaffee'],
                '300',
                ['milk'],
                ''
            ),
            dish(
                ['Лимон сорбет', 'Lemon Sorbet', 'Sorbetto al Limone', 'Sorbet au Citron', 'Zitronensorbet'],
                '1.600',
                [],
                [
                    'Приготвувањето е за 4 лица. Одберете со или без Grey Goose водка.',
                    'Prepared for 4 people. Choose with or without Grey Goose vodka.',
                    'Preparazione per 4 persone. Scegli con o senza vodka Grey Goose.',
                    'Préparation pour 4 personnes. Au choix, avec ou sans vodka Grey Goose.',
                    'Zubereitung für 4 Personen. Wahlweise mit oder ohne Grey Goose Wodka.'
                ]
            )
        ]
    }
]

const rawSupplements = [
    {
        price: '100',
        names: [
            'Свеж црн тартуф (1 г)',
            'Fresh black truffle (1 g)',
            'Tartufo nero fresco (1 g)',
            'Truffe noire fraîche (1 g)',
            'Frischer schwarzer Trüffel (1 g)'
        ]
    },
    {
        price: '80',
        names: [
            'Табаско (3,7 мл)',
            'Tabasco (3.7 ml)',
            'Tabasco (3,7 ml)',
            'Tabasco (3,7 ml)',
            'Tabasco (3,7 ml)'
        ]
    },
    {
        price: '200',
        names: [
            'Пармезан (50 г)',
            'Parmesan (50 g)',
            'Parmigiano (50 g)',
            'Parmesan (50 g)',
            'Parmesan (50 g)'
        ]
    }
]

const rawInformation = {
    MK: {
        vat: 'Сите цени се со вклучен ДДВ.',
        minimumOrder: 'Минимална нарачка за храна – 1.000 денари по лице.',
        service:
            'Дополнителни 10% се наплатуваат за услугата на персоналот во ресторанот и таа се додава како посебна ставка на вашата сметка.',
        allergies:
            'Оброците може да содржат супстанции или производи кои предизвикуваат алергии или нетолеранција. Ве молиме пријавете ги сите алергии или нетолеранции на храна за да можеме да предложиме алтернативни јадења.',
        products: [
            '„Prosciutto di Parma“ 30 месеци зреено',
            'Сите наши тестенини се секојдневно домашно правени, освен шпагетите и пене, кои се од гриз од тврда пченица – „Gentile” или „Di Martino”',
            'Ориз „Superfino Arborio“',
            '„Parmigiano Reggiano“ – зреено најмалку 24 месеци',
            'Италијанско екстра девствено маслиново масло'
        ],
        tableNotes: [
            'Сет од екстра луто: суво пеперончини и пеперончини во маслиново масло се достапни на ваше барање.',
            'Пршутата, мортаделата, саламата и пармезанот се сечат пред вас.',
            'Се приготвува на маса.',
            'Јадења кои се присутни во менијата на Чипријани рестораните.'
        ]
    },
    EN: {
        vat: 'All prices include VAT.',
        minimumOrder: 'Minimum food order – 1,000 denars per person.',
        service:
            'An additional 10% is charged for the restaurant staff service and is added as a separate item on your bill.',
        allergies:
            'Our dishes may contain substances or products that cause allergies or intolerances. Please inform us of any food allergies or intolerances so that we can suggest alternative dishes.',
        products: [
            '“Prosciutto di Parma” aged 30 months',
            'All our pasta is made fresh in-house every day, except spaghetti and penne, which are made from durum wheat semolina – “Gentile” or “Di Martino”',
            '“Superfino Arborio” rice',
            '“Parmigiano Reggiano” – aged at least 24 months',
            'Italian extra virgin olive oil'
        ],
        tableNotes: [
            'Extra-hot set: dried chilli peppers and chilli peppers in olive oil are available on request.',
            'Prosciutto, mortadella, salami and Parmesan are sliced in front of you.',
            'Prepared at the table.',
            'Dishes featured on the menus of Cipriani restaurants.'
        ]
    },
    IT: {
        vat: 'Tutti i prezzi sono IVA inclusa.',
        minimumOrder: 'Ordine minimo per il cibo – 1.000 denari a persona.',
        service:
            'Per il servizio del personale del ristorante viene applicato un supplemento del 10%, riportato come voce separata nel conto.',
        allergies:
            'I nostri piatti possono contenere sostanze o prodotti che provocano allergie o intolleranze. Vi preghiamo di segnalarci eventuali allergie o intolleranze alimentari, così da poter proporre piatti alternativi.',
        products: [
            '“Prosciutto di Parma” stagionato 30 mesi',
            'Tutta la nostra pasta è fatta in casa ogni giorno, ad eccezione di spaghetti e penne, preparati con semola di grano duro – “Gentile” o “Di Martino”',
            'Riso “Superfino Arborio”',
            '“Parmigiano Reggiano” – stagionato almeno 24 mesi',
            'Olio extravergine d’oliva italiano'
        ],
        tableNotes: [
            'Set extra piccante: peperoncini secchi e peperoncini sott’olio disponibili su richiesta.',
            'Prosciutto, mortadella, salame e parmigiano vengono tagliati davanti a voi.',
            'Preparato al tavolo.',
            'Piatti presenti nei menu dei ristoranti Cipriani.'
        ]
    },
    FR: {
        vat: 'Tous les prix incluent la TVA.',
        minimumOrder: 'Commande minimale de nourriture – 1 000 denars par personne.',
        service:
            'Un supplément de 10 % est facturé pour le service du personnel du restaurant et figure comme ligne distincte sur votre addition.',
        allergies:
            'Nos plats peuvent contenir des substances ou des produits provoquant des allergies ou des intolérances. Veuillez nous signaler toute allergie ou intolérance alimentaire afin que nous puissions vous proposer des plats alternatifs.',
        products: [
            '« Prosciutto di Parma » affiné 30 mois',
            'Toutes nos pâtes sont préparées maison chaque jour, à l’exception des spaghettis et des penne, faits de semoule de blé dur – « Gentile » ou « Di Martino »',
            'Riz « Superfino Arborio »',
            '« Parmigiano Reggiano » – affiné au moins 24 mois',
            'Huile d’olive extra vierge italienne'
        ],
        tableNotes: [
            'Set extra piquant : piments secs et piments à l’huile d’olive disponibles sur demande.',
            'Le prosciutto, la mortadelle, le salami et le parmesan sont tranchés devant vous.',
            'Préparé à table.',
            'Plats présents sur les menus des restaurants Cipriani.'
        ]
    },
    DE: {
        vat: 'Alle Preise verstehen sich inklusive Mehrwertsteuer.',
        minimumOrder: 'Mindestbestellwert für Speisen – 1.000 Denar pro Person.',
        service:
            'Für den Service des Restaurantpersonals werden zusätzlich 10 % berechnet, die als separate Position auf Ihrer Rechnung ausgewiesen werden.',
        allergies:
            'Unsere Gerichte können Stoffe oder Produkte enthalten, die Allergien oder Unverträglichkeiten auslösen. Bitte teilen Sie uns Nahrungsmittelallergien oder -unverträglichkeiten mit, damit wir Ihnen alternative Gerichte empfehlen können.',
        products: [
            '„Prosciutto di Parma“, 30 Monate gereift',
            'Alle unsere Nudeln werden täglich frisch im Haus zubereitet, mit Ausnahme von Spaghetti und Penne aus Hartweizengrieß – „Gentile“ oder „Di Martino“',
            'Reis „Superfino Arborio“',
            '„Parmigiano Reggiano“ – mindestens 24 Monate gereift',
            'Italienisches natives Olivenöl extra'
        ],
        tableNotes: [
            'Extra-scharfes Set: getrocknete Peperoncini und Peperoncini in Olivenöl auf Anfrage erhältlich.',
            'Prosciutto, Mortadella, Salami und Parmesan werden vor Ihnen aufgeschnitten.',
            'Wird am Tisch zubereitet.',
            'Gerichte, die auch auf den Speisekarten der Cipriani-Restaurants zu finden sind.'
        ]
    }
}

const getIndex = (language) => LANG_INDEX[language] ?? 0

const formatPrice = (price, language) => `${price} ${DEN[language] ?? DEN.MK}`

export function getFoodMenu(language = 'MK') {
    const index = getIndex(language)

    return rawMenu.map((category) => ({
        category: category.category[index],
        items: category.items.map((item) => ({
            name: item.name[index],
            description: item.desc ? item.desc[index] : '',
            price: formatPrice(item.price, language),
            allergens: item.allergens.map((key) => allergenLabels[key][index]),
            ...(item.note ? { note: noteLabels[item.note][index] } : {})
        }))
    }))
}

export function getExtraSupplements(language = 'MK') {
    const index = getIndex(language)

    return rawSupplements.map((item) => ({
        name: item.names[index],
        price: formatPrice(item.price, language)
    }))
}

export function getMenuInformation(language = 'MK') {
    const index = getIndex(language)
    const lang = LANG_INDEX[language] !== undefined ? language : 'MK'

    return {
        ...rawInformation[lang],
        allergens: allergenOrder.map((key) => allergenLabels[key][index])
    }
}

export const foodMenu = getFoodMenu('MK')
export const extraSupplements = getExtraSupplements('MK')
export const menuInformation = getMenuInformation('MK')