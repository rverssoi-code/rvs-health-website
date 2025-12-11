// ========================================
// PENSÉES DU JOUR (30 jours - on ajoutera les autres plus tard)
// ========================================

const pensees = {
    fr: [
        "Cette journée t'invite à respirer profondément. Chaque inspiration ramène la clarté, chaque expiration libère ce qui ne te sert plus. Aujourd'hui, tu découvres une vérité simple que tu cherchais.",
        "Aujourd'hui, une conversation inattendue ouvre une porte que tu croyais fermée. Écoute avec ton cœur, pas seulement tes oreilles. L'harmonie se trouve dans ce que tu entends entre les mots.",
        "Cette journée porte une légèreté particulière. Tu remarques la beauté dans un détail que tu traversais sans voir. La pleine conscience transforme l'ordinaire en cadeau.",
        "Aujourd'hui, tu lâches prise sur quelque chose que tu tentais de contrôler. Et dans ce lâcher-prise, tu trouves exactement la liberté que tu cherchais. L'amour commence où le contrôle s'arrête.",
        "Cette journée t'apporte une énergie douce et bienveillante. Tu te surprends à sourire sans raison, et ça suffit. Le bonheur n'a pas besoin de justification.",
        "Aujourd'hui, ton intuition te guide vers une décision claire. Fais confiance à cette voix intérieure qui sait déjà. Tu es exactement où tu dois être, même si le chemin semble flou.",
        "Cette journée te ramène à l'essentiel. Tu réalises que ce que tu cherchais si loin était déjà là, en toi. La paix n'est pas une destination, c'est une présence.",
        "Aujourd'hui, quelqu'un a besoin de ton écoute. Sans conseil, sans jugement - juste ta présence. Et dans ce don simple, tu reçois bien plus que tu ne donnes.",
        "Cette journée t'invite à marcher lentement. Chaque pas ancré dans la terre, chaque souffle connecté au moment présent. La nature te rappelle que tu fais partie d'un tout plus grand.",
        "Aujourd'hui, tu pardonnes - peut-être à quelqu'un d'autre, peut-être à toi-même. Ce pardon ne justifie rien, il te libère simplement. L'harmonie commence par la bienveillance.",
        "Cette journée apporte une synchronicité étonnante. Ce que tu pensais justement arrive, ce dont tu avais besoin apparaît. L'univers répond quand tu es aligné.",
        "Aujourd'hui, tu remarques ta propre résilience. Tout ce que tu as traversé t'a rendu plus sage, pas plus brisé. Tu es plus fort que tu ne le croyais.",
        "Cette journée te connecte à ta créativité. Une idée, un projet, une vision prend forme. Fais-lui confiance, même si elle semble fragile. Les grandes choses commencent petites.",
        "Aujourd'hui, tu ressens une gratitude profonde pour les choses simples. Un café chaud, un rayon de soleil, un sourire. L'abondance était là tout le temps.",
        "Cette journée t'enseigne la patience. Ce qui doit venir viendra, au moment juste. Tu n'as pas besoin de forcer, juste de faire confiance au rythme de la vie.",
        "Aujourd'hui, tu dis non à quelque chose qui ne t'honore plus. Ce non crée l'espace pour un oui plus authentique. Tes limites sont des actes d'amour envers toi-même.",
        "Cette journée te rappelle que tu n'es pas seul. Une présence, une connexion, un signe te montre que tu es soutenu. L'amour te trouve toujours, même dans le silence.",
        "Aujourd'hui, tu découvres une force dans ta vulnérabilité. Montrer qui tu es vraiment, c'est le plus grand courage. L'authenticité attire l'authenticité.",
        "Cette journée illumine un vieux schéma que tu peux enfin laisser partir. Tu n'es plus cette personne-là. Tu évolues, tu deviens, tu te transformes.",
        "Aujourd'hui, ton corps te parle. Écoute-le avec compassion. Cette tension, cette fatigue, ce besoin de repos - ce sont des messages, pas des faiblesses.",
        "Cette journée t'invite à l'émerveillement. Regarde le monde avec des yeux neufs, comme si c'était la première fois. Chaque instant est unique, si tu choisis de le voir.",
        "Aujourd'hui, une vieille blessure trouve un peu de guérison. Pas complètement, peut-être - mais un peu plus légère. La guérison n'est pas linéaire, et c'est parfait ainsi.",
        "Cette journée te ramène à ta respiration. Inspire la paix, expire la tension. Tout est déjà là, dans ce souffle simple. Tu portes ta propre ancre en toi.",
        "Aujourd'hui, tu te surprends à être gentil envers toi-même. Cette voix intérieure critique se tait un instant. Tu mérites la même bienveillance que tu offres aux autres.",
        "Cette journée t'ouvre à une nouvelle possibilité. Quelque chose que tu n'avais pas envisagé devient soudainement évident. La vie surprend toujours ceux qui restent ouverts.",
        "Aujourd'hui, tu ressens pleinement sans te juger. Joie, tristesse, colère, paix - toutes valides, toutes passagères. Les émotions sont des vagues, tu es l'océan.",
        "Cette journée te montre la beauté du recommencement. Chaque instant est une chance de choisir différemment. Tu n'es jamais coincé, même quand ça semble ainsi.",
        "Aujourd'hui, tu trouves du sens dans ce qui semblait chaos. Les pièces s'assemblent, la perspective change. Tout avait sa raison d'être, même ce que tu ne comprenais pas.",
        "Cette journée t'ancre dans ta vérité. Tu sais ce qui est juste pour toi, même si les autres ne comprennent pas. Ta voie est la tienne, unique et valable.",
        "Aujourd'hui, tu reviens à toi-même. Après avoir cherché partout ailleurs, tu découvres que tout ce dont tu avais besoin était déjà là. Le retour vers soi est le plus beau des voyages."
    ],
    en: [
        "This day invites you to breathe deeply. Each inhale brings clarity, each exhale releases what no longer serves you. Today, you discover a simple truth you've been seeking.",
        "Today, an unexpected conversation opens a door you thought was closed. Listen with your heart, not just your ears. Harmony is found in what you hear between the words.",
        "This day carries a particular lightness. You notice beauty in a detail you used to pass by without seeing. Mindfulness transforms the ordinary into a gift.",
        "Today, you let go of something you were trying to control. And in that release, you find exactly the freedom you were searching for. Love begins where control ends.",
        "This day brings you a gentle, benevolent energy. You find yourself smiling for no reason, and that's enough. Happiness needs no justification.",
        "Today, your intuition guides you toward a clear decision. Trust that inner voice that already knows. You are exactly where you need to be, even if the path seems unclear.",
        "This day brings you back to the essential. You realize that what you were seeking so far away was already there, within you. Peace is not a destination, it's a presence.",
        "Today, someone needs your listening. Without advice, without judgment - just your presence. And in this simple gift, you receive far more than you give.",
        "This day invites you to walk slowly. Each step grounded in the earth, each breath connected to the present moment. Nature reminds you that you're part of something greater.",
        "Today, you forgive - perhaps someone else, perhaps yourself. This forgiveness doesn't justify anything, it simply sets you free. Harmony begins with benevolence.",
        "This day brings an amazing synchronicity. What you were just thinking about happens, what you needed appears. The universe responds when you're aligned.",
        "Today, you notice your own resilience. Everything you've been through has made you wiser, not more broken. You are stronger than you believed.",
        "This day connects you to your creativity. An idea, a project, a vision takes shape. Trust it, even if it seems fragile. Great things begin small.",
        "Today, you feel deep gratitude for simple things. A warm coffee, a ray of sunshine, a smile. Abundance was there all along.",
        "This day teaches you patience. What must come will come, at the right moment. You don't need to force anything, just trust life's rhythm.",
        "Today, you say no to something that no longer honors you. This no creates space for a more authentic yes. Your boundaries are acts of self-love.",
        "This day reminds you that you're not alone. A presence, a connection, a sign shows you that you're supported. Love always finds you, even in silence.",
        "Today, you discover strength in your vulnerability. Showing who you truly are is the greatest courage. Authenticity attracts authenticity.",
        "This day illuminates an old pattern you can finally let go. You're no longer that person. You're evolving, becoming, transforming.",
        "Today, your body speaks to you. Listen with compassion. That tension, that fatigue, that need for rest - these are messages, not weaknesses.",
        "This day invites you to wonder. Look at the world with fresh eyes, as if for the first time. Each moment is unique, if you choose to see it.",
        "Today, an old wound finds a bit of healing. Not completely, perhaps - but a little lighter. Healing isn't linear, and that's perfectly okay.",
        "This day brings you back to your breath. Inhale peace, exhale tension. Everything is already there, in this simple breath. You carry your own anchor within.",
        "Today, you surprise yourself by being kind to yourself. That inner critical voice quiets for a moment. You deserve the same benevolence you offer others.",
        "This day opens you to a new possibility. Something you hadn't considered suddenly becomes obvious. Life always surprises those who stay open.",
        "Today, you feel fully without judging yourself. Joy, sadness, anger, peace - all valid, all temporary. Emotions are waves, you are the ocean.",
        "This day shows you the beauty of beginning again. Each moment is a chance to choose differently. You're never stuck, even when it seems that way.",
        "Today, you find meaning in what seemed like chaos. The pieces come together, perspective shifts. Everything had its reason, even what you didn't understand.",
        "This day grounds you in your truth. You know what's right for you, even if others don't understand. Your path is yours, unique and valid.",
        "Today, you return to yourself. After searching everywhere else, you discover that everything you needed was already there. The return to self is the most beautiful journey."
    ]
};

// ========================================
// CALCULER LE JOUR DE L'ANNÉE
// ========================================

function getJourAnnee() {
    const maintenant = new Date();
    const debut = new Date(maintenant.getFullYear(), 0, 0);
    const diff = maintenant - debut;
    const unJour = 1000 * 60 * 60 * 24;
    return Math.floor(diff / unJour);
}

// ========================================
// AFFICHER LA PENSÉE DU JOUR
// ========================================

function afficherPenseeDuJour(langue = 'fr') {
    const jourActuel = getJourAnnee();
    // On boucle sur les 30 pensées (jourActuel % 30)
    const index = (jourActuel - 1) % 30;
    const penseeElement = document.getElementById('pensee-texte');
    
    if (penseeElement) {
        penseeElement.textContent = pensees[langue][index];
    }
}

// ========================================
// GÉNÉRER LES NUMÉROS DU JOUR
// ========================================

function genererNumerosDuJour() {
    const maintenant = new Date();
    // Créer une seed basée sur la date (YYYYMMDD)
    const seed = maintenant.getFullYear() * 10000 + 
                 (maintenant.getMonth() + 1) * 100 + 
                 maintenant.getDate();
    
    // Générateur pseudo-aléatoire avec seed
    function seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    
    const numeros = [];
    for (let i = 0; i < 6; i++) {
        const numero = Math.floor(seededRandom(seed + i) * 101); // 0 à 100
        numeros.push(numero);
    }
    
    return numeros;
}

function afficherNumerosDuJour() {
    const numeros = genererNumerosDuJour();
    const numerosContainer = document.getElementById('numeros-container');
    
    if (numerosContainer) {
        numerosContainer.innerHTML = '';
        numeros.forEach((num, index) => {
            const numeroDiv = document.createElement('div');
            numeroDiv.className = 'numero-ball';
            numeroDiv.textContent = num;
            numeroDiv.style.animationDelay = `${index * 0.1}s`;
            numerosContainer.appendChild(numeroDiv);
        });
    }
}

// ========================================
// TOGGLE LANGUE FR/EN
// ========================================

let langueActuelle = 'fr';

function changerLangue(langue) {
    langueActuelle = langue;
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === langue) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour tous les textes avec data-fr et data-en
    document.querySelectorAll('[data-fr]').forEach(element => {
        if (langue === 'fr' && element.dataset.fr) {
            element.textContent = element.dataset.fr;
        } else if (langue === 'en' && element.dataset.en) {
            element.textContent = element.dataset.en;
        }
    });
    
    // Mettre à jour la pensée du jour
    afficherPenseeDuJour(langue);
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Afficher la pensée du jour en français
    afficherPenseeDuJour('fr');
    
    // Afficher les numéros du jour
    afficherNumerosDuJour();
    
    // Event listeners pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changerLangue(this.dataset.lang);
        });
    });
    
    // Smooth scroll pour les liens d'ancre
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// CHARGEMENT DES ACTUALITÉS
// Pour le site public RVS Health
// ========================================

async function loadActualites() {
    try {
        const response = await fetch('data/actualites.json');
        
        if (!response.ok) {
            // Fichier n'existe pas encore
            showNoActualites();
            return;
        }
        
        const data = await response.json();
        const actualites = data.actualites || [];
        
        if (actualites.length === 0) {
            showNoActualites();
            return;
        }
        
        // Trier par date (plus récent en premier)
        actualites.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Afficher les actualités
        displayActualites(actualites);
        
    } catch (error) {
        console.error('Erreur chargement actualités:', error);
        showNoActualites();
    }
}

function displayActualites(actualites) {
    const container = document.getElementById('actualites-container');
    
    container.innerHTML = actualites.map(actualite => `
        <div class="actualite-card">
            <div class="actualite-date">${formatDate(actualite.date)}</div>
            <h3>${actualite.titre}</h3>
            <p>${actualite.contenu}</p>
        </div>
    `).join('');
}

function showNoActualites() {
    const container = document.getElementById('actualites-container');
    container.innerHTML = `
        <div class="no-actualites">
            <p>Aucune actualité pour le moment.</p>
            <p style="margin-top: 10px;">🌱 Revenez bientôt !</p>
        </div>
    `;
}

function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('fr-CA', options);
}

// Charger les actualités au chargement de la page
document.addEventListener('DOMContentLoaded', loadActualites);

/* ========================================
   COOKIE BANNER JAVASCRIPT
   À AJOUTER DANS UN <script> AVANT LA FERMETURE </body>
   ======================================== */

// Gestion du Cookie Banner - Loi 25 Québec
(function() {
    'use strict';
    
    const COOKIE_KEY = 'rvs_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;
    
    // Vérifier si le consentement a déjà été donné
    function checkCookieConsent() {
        const consent = localStorage.getItem(COOKIE_KEY);
        return consent !== null;
    }
    
    // Sauvegarder le choix de l'utilisateur
    function saveCookieConsent(accepted) {
        const consentData = {
            accepted: accepted,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };
        
        localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData));
        
        // Analytics optionnel - Seulement si accepté
        if (accepted && typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }
    
    // Afficher le banner avec animation
    function showCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (!banner) return;
        
        setTimeout(() => {
            banner.classList.add('show');
        }, 500); // Délai pour effet smooth
    }
    
    // Masquer le banner avec animation
    function hideCookieBanner() {
        const banner = document.getElementById('cookie-banner');
        if (!banner) return;
        
        banner.classList.remove('show');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500);
    }
    
    // Initialisation au chargement de la page
    function initCookieBanner() {
        // Si consentement déjà donné, ne rien afficher
        if (checkCookieConsent()) {
            const banner = document.getElementById('cookie-banner');
            if (banner) {
                banner.style.display = 'none';
            }
            return;
        }
        
        // Afficher le banner après un court délai
        showCookieBanner();
        
        // Bouton Accepter
        const acceptBtn = document.getElementById('cookie-accept');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                saveCookieConsent(true);
                hideCookieBanner();
                console.log('✅ Cookies acceptés - RVS Health');
            });
        }
        
        // Bouton Refuser
        const declineBtn = document.getElementById('cookie-decline');
        if (declineBtn) {
            declineBtn.addEventListener('click', function() {
                saveCookieConsent(false);
                hideCookieBanner();
                console.log('❌ Cookies refusés - RVS Health');
            });
        }
    }
    
    // Fonction pour réinitialiser (utile pour tester)
    window.resetCookieConsent = function() {
        localStorage.removeItem(COOKIE_KEY);
        console.log('🔄 Consentement réinitialisé');
        location.reload();
    };
    
    // Lancer au chargement de la page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();