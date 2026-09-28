# Salvatore - Italian Restaurant Website

## Business Practice 2025/2026 - Project Assignment

A modern, responsive and multilingual website developed for **Salvatore Skopje**, one of the most exclusive Italian dining destinations in Skopje.

Inspired by Italian tradition, passion and *La Dolce Vita*, the website combines an elegant visual identity with interactive functionality, digital menus, multilingual support, personalized dining recommendations, reservation functionality and detailed restaurant information.

The project was developed as a project assignment for the **Business Practice 2025/2026** course at the **Faculty of Computer Science and Engineering (FINKI), Ss. Cyril and Methodius University in Skopje**.

---

# Project Overview

The goal of this project is to develop a complete digital presentation website for **Salvatore Skopje**, an exclusive Italian restaurant in Skopje.

The website is designed to reflect the restaurant's premium identity while providing visitors with an intuitive and interactive way to discover the restaurant, explore its offerings and prepare for a visit.

The website provides visitors with the ability to:

- Discover the restaurant and its atmosphere
- Explore food and drinks menus
- Learn about restaurant services and amenities
- Get practical information before visiting
- Use the Matchmaker to discover personalized recommendations
- Receive menu-based food and drink suggestions
- Make a reservation request
- Explore gift voucher information
- Find contact and location information
- Change the website language
- Switch between visual themes
- Control ambient restaurant music

---

# Project Goals

The main goals of the project are:

1. To create a professional digital presence for an exclusive restaurant.
2. To develop a modern and visually sophisticated user interface.
3. To present the restaurant's identity and atmosphere through a consistent digital experience.
4. To provide visitors with clear and organized restaurant information.
5. To implement interactive digital food and drinks menus.
6. To provide a reservation interface.
7. To implement multilingual website functionality.
8. To create the Matchmaker personalized dining feature.
9. To provide useful information about restaurant policies and services.
10. To create a responsive website for different screen sizes.
11. To practice modern React development.
12. To use reusable and maintainable components.
13. To practice collaborative development using Git and GitHub.

---

# Main Features

## 1. Home Page

The home page provides the first introduction to Salvatore Skopje.

The Hero section includes:

- Salvatore branding
- Restaurant presentation text
- Restaurant imagery
- Reservation call-to-action
- Menu navigation
- Ambient music control

The visual design is focused on communicating an elegant Italian dining atmosphere from the first interaction.

---

## 2. Navigation

The navigation bar provides access to the main sections of the website.

It includes:

- Home
- Menu
- Matchmaker
- Useful Information
- Vouchers
- Contact
- Language selection
- Theme selection
- Reservation

The navigation is responsive and adapts to smaller screen sizes through a mobile navigation menu.

---

# Matchmaker

## Personalized Dining Recommendation

The **Matchmaker** is one of the main interactive features of the website.

It is designed to help visitors discover a restaurant experience that matches their individual preferences.

The Matchmaker uses an interactive questionnaire to collect information about the visitor's preferences, including:

- Mood
- Food preferences
- Taste preferences
- Drink preferences
- Dining style
- Preferred restaurant experience

After completing the questionnaire, the application generates a personalized recommendation based on the available restaurant menu data.

The recommendation can include:

- Appetizer
- Main course
- Drinks
- Aperitif
- Dessert
- Cigars

The visitor can then save the suggestion or start a new Matchmaker session to explore another recommendation.

The Matchmaker is implemented as a frontend feature using predefined restaurant and recommendation data. It does not depend on an external AI API.

---

# Digital Menus

## Food Menu

The website contains a dedicated digital food menu.

Visitors can explore the restaurant's food selection through a structured and visually integrated interface.

The digital menu provides:

- Menu categories
- Dish information
- Visual presentation
- Easy navigation
- Responsive presentation

The menu is integrated directly into the website instead of relying exclusively on external PDF documents.

This provides a more engaging and accessible experience, especially on mobile devices.

---

## Drinks Menu

A dedicated digital drinks menu is also available.

Visitors can explore the restaurant's drinks selection through a separate digital menu interface.

The drinks menu is presented as an integrated part of the website and follows the same visual identity as the rest of the restaurant experience.

---

# Reservation System

The website contains a dedicated reservation section.

Visitors can provide:

- Name
- Date
- Time
- Number of guests

The reservation interface is designed to provide a simple and clear user flow for submitting a reservation request.

The current implementation represents the frontend reservation workflow and can be extended in the future with backend integration or a real reservation service.

---

# Useful Information

The **Useful Information** section provides practical information that visitors may need before visiting Salvatore.

The section includes information related to:

- Dress code
- Parking and valet service
- Terrace
- Cigars
- Lounge
- Live music and DJ
- Children
- Accessibility
- Pets

The goal of this section is to make important restaurant policies, services and visitor information easily accessible.

---

# Gift Vouchers

The website includes a dedicated section for restaurant gift vouchers.

The voucher section represents an additional service connected to the restaurant experience and provides visitors with information about gifting a Salvatore dining experience.

---

# Contact and Location

The website provides dedicated contact and location information.

The Contact section provides relevant information for getting in touch with the restaurant.

The Location section provides information necessary for visitors to find and visit Salvatore.

Together, these sections complete the informational aspect of the restaurant website.

---

# Multilingual Support

The website supports five languages:

| Code | Language |
|------|----------|
| MK | Macedonian |
| EN | English |
| IT | Italian |
| FR | French |
| DE | German |

Users can change the active language directly through the navigation bar.

The application uses a centralized translation structure, allowing the interface and website content to adapt to the selected language.

The multilingual system is designed to maintain a consistent user experience throughout the website.

---

# Theme System

The website includes a theme switching system.

Users can switch between different visual modes through the theme control in the navigation bar.

The theme system affects elements such as:

- Background colors
- Text colors
- Buttons
- Sections
- Navigation
- Overall visual appearance

Theme state is managed globally using React Context.

---

# Ambient Music

The website includes an ambient music feature designed to complement the atmosphere of the restaurant.

Visitors can control the music directly through the website interface.

The music functionality provides:

- Play functionality
- Pause functionality
- Looping playback
- Visual playback state
- User-controlled audio

The audio file is stored as a local project asset.

---

# Responsive Design

The website is designed to provide a consistent experience across different screen sizes.

The interface supports:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

Responsive design is applied to:

- Navigation
- Hero section
- Digital menus
- Matchmaker
- Reservation form
- Informational sections
- Buttons
- Footer

The navigation also provides a mobile-specific menu for smaller screens.

---

# User Experience

The website follows a natural journey for a visitor interested in an exclusive dining experience.

### Step 1 — Discover

The visitor enters the website and is introduced to Salvatore through the Hero section and visual identity.

### Step 2 — Explore

The visitor can explore the food and drinks menus.

### Step 3 — Find Their Match

The visitor can use the Matchmaker to answer questions about their preferences and receive a personalized restaurant recommendation.

### Step 4 — Learn

The Useful Information section provides practical information about visiting the restaurant.

### Step 5 — Reserve

The visitor can access the reservation form directly from the navigation or the main Hero section.

### Step 6 — Visit

The Contact and Location sections provide the information needed to contact and visit the restaurant.

This structure creates a clear and intuitive user journey from discovering the restaurant to preparing for a visit.

---

# Technology Stack

The project was developed using modern frontend technologies.

| Technology | Purpose |
|------------|---------|
| React | Frontend user interface |
| JavaScript | Application logic |
| JSX | React component development |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive design |
| React Context API | Global state management |
| Lucide React | Interface icons |
| Git | Version control |
| GitHub | Collaborative source code management |

---

# Project Architecture

The application follows a component-based React architecture.

The main project structure is:

```text
src/
│
├── assets/
│   ├── images
│   ├── menu assets
│   ├── logo
│   ├── cover image
│   └── ambient music
│
├── components/
│   │
│   ├── booking/
│   │   ├── GiftCard.jsx
│   │   ├── Location.jsx
│   │   ├── Reservation.jsx
│   │   └── SecretClub.jsx
│   │
│   ├── layout/
│   │   ├── Esperienza.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   └── UsefulInformation.jsx
│   │
│   └── menu/
│       ├── DigitalMenu.jsx
│       ├── DrinksMenuPage.jsx
│       └── FoodMenuPage.jsx
│
├── context/
│   ├── LanguageContext.jsx
│   └── ThemeContext.jsx
│
├── data/
│   ├── DrinksData.jsx
│   ├── experienceData.js
│   ├── experienceTranslations.js
│   ├── menuImages.js
│   ├── salvatoreData.js
│   └── translations.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

```

# Project Team

The project was developed collaboratively by a team of three students from the Faculty of Computer Science and Engineering (FINKI):

- **Klara Stefanova** (243084)
- **Mila Jovanovska** (243149)
- **Marina Jovanovikj** (243133)

All three team members contributed to the planning, development, design and implementation of the Salvatore Skopje restaurant website.

The project was developed collaboratively using **Git and GitHub**, with individual features developed through separate branches and integrated into the main project.
