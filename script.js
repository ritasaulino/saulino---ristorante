window.onload = function () {
    let language = localStorage.getItem("language") || "it"; // Lingua predefinita: Italiano
    setLanguage(language);
};

// Funzione per impostare la lingua e aggiornare i testi
function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Salva la lingua selezionata in localStorage
    localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
// Dizionario delle traduzioni (corretto, senza duplicazioni)
const translations = {
    "it": {
        "home": "Home",
        "menu": "Menù",
        "contact": "Contatti",
        "contact-title": "Contattaci",
        "contact-desc": "Siamo qui per aiutarti! Contattaci per prenotazioni o informazioni.",
        "phone": "Telefono:",
        "email": "Email:",
        "address": "Indirizzo:",
        "welcome": "Benvenuto nel nostro ristorante!",
        "intro-quote": "“Ogni piatto racconta una storia fatta di passione, tradizione e creatività. Da Saulino, ogni boccone è un viaggio sensoriale unico.”",
        "intro-description": `Dal 1992, Saulino Ristorante e Pizzeria è sinonimo di qualità e accoglienza nel cuore della provincia di Napoli. 
        La nostra filosofia si basa sull'utilizzo di ingredienti freschi e genuini, selezionati con cura e lavorati con maestria dai nostri chef. 
        Che si tratti delle nostre celebri pizze artigianali o dei raffinati piatti di mare e terra, ogni portata rappresenta un omaggio alla tradizione culinaria partenopea, 
        reinterpretata con estro e originalità per soddisfare anche i palati più esigenti.`,
        "book-now": "Prenota ora",
        "reach-us": "Raggiungici",
        "contact-title": "Contatti",
        "reservations": "Prenotazioni",
        "address": "Indirizzo",
        "hours": "Orari",
        "open-every-day": "Tutti i giorni"
    },

    "en": {
        "home": "Home",
        "menu": "Menu",
        "contact": "Contacts",
        "contact-title": "Contact Us",
        "contact-desc": "We are here to help! Contact us for reservations or information.",
        "phone": "Phone:",
        "email": "Email:",
        "address": "Address:",
        "welcome": "Welcome to our restaurant!",
        "menu-title": "Our Menu",
        "menu-desc": "Discover our special dishes.",
        "intro-quote": "“Every dish tells a story of passion, tradition, and creativity. At Saulino, every bite is a unique sensory journey.”",
        "intro-description": `Since 1992, Saulino Ristorante and Pizzeria has been synonymous with quality and hospitality in the heart of the Naples province. 
Our philosophy is based on the use of fresh and genuine ingredients, carefully selected and masterfully prepared by our chefs. 
Whether it’s our renowned artisanal pizzas or our refined seafood and meat dishes, each course is a tribute to Neapolitan culinary tradition, 
reinterpreted with creativity and originality to satisfy even the most discerning palates.`,
        "book-now": "Book Now",
        "reach-us": "Find Us",
        "contact-title": "Contacts",
        "reservations": "Reservations",
        "address": "Address",
        "hours": "Opening Hours",
        "open-every-day": "Open every day"
}
};

    // Leggi la lingua salvata o imposta l'italiano di default
    let savedLanguage = localStorage.getItem("selectedLanguage") || "it";
    
    function setLanguage(lang) {
        // Aggiorna tutti gli elementi con il data-translate
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Salva la lingua selezionata
        localStorage.setItem("selectedLanguage", lang);
    }

    // Applica la lingua salvata al caricamento della pagina
    setLanguage(savedLanguage);

    // Aggiungi l'evento ai bottoni per cambiare lingua
    document.querySelectorAll("[data-lang]").forEach(button => {
        button.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            setLanguage(lang);
            localStorage.setItem("selectedLanguage", lang);
            location.reload(); // Ricarica la pagina per applicare subito la traduzione
        });
    });
});