window.onload = function () {
    let language = localStorage.getItem("language") || "it"; // Lingua predefinita: Italiano
    setLanguage(language);
};

// Funzione per cambiare lingua e salvare la scelta
function setLanguage(lang) {
    localStorage.setItem("language", lang); // Salva la lingua selezionata
    translatePage(lang);
}

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
        reinterpretata con estro e originalità per soddisfare anche i palati più esigenti.`
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
reinterpreted with creativity and originality to satisfy even the most discerning palates.`
}
};

// Funzione per tradurre la pagina
function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        let key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Usa innerHTML per evitare problemi di formattazione
        }
    });
}

