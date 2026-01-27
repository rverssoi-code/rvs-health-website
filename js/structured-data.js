// structured-data.js - Schema.org pour SEO
// Retour Vers Soi - Louis Jr Simard
// Ce fichier génère les données structurées pour améliorer le référencement Google

(function() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Louis Jr Simard",
        "alternateName": "Retour Vers Soi",
        "description": "Accompagnateur en pleine conscience, bienveillance et harmonie. 11 années de cheminement spirituel.",
        "url": "https://rvs.health",
        "image": "https://rvs.health/images/logo/logo.png",
        "jobTitle": "Accompagnateur spirituel",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Matawinie",
            "addressLocality": "Québec",
            "addressCountry": "CA"
        },
        "knowsAbout": [
            "Pleine conscience",
            "Accompagnement spirituel",
            "Oracle celtique",
            "Bienveillance",
            "Cheminement personnel",
            "Méditation",
            "Harmonie intérieure"
        ],
        "sameAs": [
            "https://www.facebook.com/Retour.Vers.Soi.Rawdon",
            "https://www.instagram.com/rvs_harmonie",
            "https://www.youtube.com/@panoramixtes"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-438-630-5522",
            "contactType": "Customer Service",
            "availableLanguage": ["French", "English"]
        }
    };

    // Injecte le script dans le head du document
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
})();