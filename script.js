document.addEventListener("DOMContentLoaded", () => {
// Dizionario delle traduzioni (corretto, senza duplicazioni)
const translations = {
    "it": {
        "home": "Home",
        "menu": "Menù",
        "contact": "Contatti",
        "phone": "Telefono:",
        "email": "Email:",
        "address": "Indirizzo:",
        "intro-quote": "“Ogni piatto racconta una storia fatta di passione, tradizione e creatività. Da Saulino, ogni boccone è un viaggio sensoriale unico.”",
        "intro-description": `Dal 1992, Saulino Ristorante e Pizzeria è sinonimo di qualità e accoglienza nel cuore della provincia di Napoli. 
        La nostra filosofia si basa sull'utilizzo di ingredienti freschi e genuini, selezionati con cura e lavorati con maestria dai nostri chef. 
        Che si tratti delle nostre celebri pizze artigianali o dei raffinati piatti di mare e terra, ogni portata rappresenta un omaggio alla tradizione culinaria partenopea, 
        reinterpretata con estro e originalità per soddisfare anche i palati più esigenti.`,
        "book-now": "Prenota Online",
        "reach-us": "Raggiungici",
        "contact-title": "Contattaci",
        "reservations": "Prenotazioni",
        "address": "Indirizzo",
        "hours": "Orari",
        "open-every-day": "Tutti i giorni",
        // Traduzione popup
        "popup-title": "🎉 Offerta Speciale!",
        "popup-text1": "Da <strong> marzo e fino al 30 aprile</strong>, ritira la tua pizza in sede e assapora la bontà!",
        "popup-text2": "<strong>🍕 Margherita e Marinara a soli 3€!</strong>",
        "popup-text3": "Offerta valida <strong>da lunedì a giovedì</strong>. Non perdertela! 😉",
        "close": "Chiudi",
        "show-offer": "🎁 Clicca qui per vedere la nostra offerta!",
        "qr-text": "Scansiona il QR Code per scaricare o",
        "qr-text-2": "per visualizzare il nostro menù:"
    },

    "en": {
        "home": "Home",
        "menu": "Menu",
        "contact": "Contacts",
        "phone": "Phone:",
        "email": "Email:",
        "address": "Address:",
        "intro-quote": "“Every dish tells a story of passion, tradition, and creativity. At Saulino, every bite is a unique sensory journey.”",
        "intro-description": `Since 1992, Saulino Ristorante and Pizzeria has been synonymous with quality and hospitality in the heart of the Naples province. 
Our philosophy is based on the use of fresh and genuine ingredients, carefully selected and masterfully prepared by our chefs. 
Whether it’s our renowned artisanal pizzas or our refined seafood and meat dishes, each course is a tribute to Neapolitan culinary tradition, 
reinterpreted with creativity and originality to satisfy even the most discerning palates.`,
        "book-now": "Book Now Online",
        "reach-us": "Find Us",
        "contact-title": "Contact Us",
        "reservations": "Reservations",
        "address": "Address",
        "hours": "Opening Hours",
        "open-every-day": "Open every day",
        // Traduzione popup
        "popup-title": "🎉 Special Offer!",
        "popup-text1": "From <strong>March until April 30th</strong>, pick up your pizza in-store and enjoy the taste!",
        "popup-text2": "<strong>🍕 Margherita and Marinara for only €3!</strong>",
        "popup-text3": "Offer valid <strong>Monday to Thursday</strong>. Don't miss it! 😉",
        "close": "Close",
        "show-offer": "🎁 Click here to see our offer!",
        "qr-text": "Scan the QR Code to download or",
        "qr-text-2": "to view our menu:"
    }
    
};

// Funzione per impostare la lingua e aggiornare i testi
function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
        // Extra elementi non "data-translate"
        const qrText = document.querySelector('[data-translate="qr-text"]');
        const qrText2 = document.querySelector('[data-translate="qr-text-2"]');
        if (qrText) qrText.textContent = translations[lang]["qr-text"];
        if (qrText2) qrText2.textContent = translations[lang]["qr-text-2"];

        if (document.getElementById("popup-title"))
            document.getElementById("popup-title").innerHTML = translations[lang]["popup-title"];
        if (document.getElementById("popup-text1"))
            document.getElementById("popup-text1").innerHTML = translations[lang]["popup-text1"];
        if (document.getElementById("popup-text2"))
            document.getElementById("popup-text2").innerHTML = translations[lang]["popup-text2"];
        if (document.getElementById("popup-text3"))
            document.getElementById("popup-text3").innerHTML = translations[lang]["popup-text3"];
        if (document.getElementById("close-btn"))
            document.getElementById("close-btn").textContent = translations[lang]["close"];
        if (document.getElementById("show-offer-btn"))
            document.getElementById("show-offer-btn").textContent = translations[lang]["show-offer"];

        localStorage.setItem("selectedLanguage", lang);
    }

    // Applica lingua salvata
    const savedLanguage = localStorage.getItem("selectedLanguage") || "it";
    setLanguage(savedLanguage);

    // Cambio lingua
    document.querySelectorAll("[data-lang]").forEach(button => {
        button.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            setLanguage(lang);
            localStorage.setItem("selectedLanguage", lang);
        });
    });

    // Popup
    const popup = document.getElementById("promo-popup");
    const closeButton = document.getElementById("close-btn");
    const showOfferBtn = document.getElementById("show-offer-btn");

    if (popup && !sessionStorage.getItem("popupClosed")) {
        popup.style.display = "block";
    }

    if (popup && closeButton) {
        closeButton.addEventListener("click", () => {
            popup.style.display = "none";
            sessionStorage.setItem("popupClosed", "true");
        });
    }

    if (popup && showOfferBtn) {
        showOfferBtn.addEventListener("click", () => {
            popup.style.display = "block";
            sessionStorage.removeItem("popupClosed");
        });
    }

    // Bottone menù (link al Drive)
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            window.open("https://drive.google.com/file/d/1fVymTVtltX3YeZzCHbmmH1nHc7aQ-Qxf/view?usp=drive_link", "_blank");
        });
    }
});
