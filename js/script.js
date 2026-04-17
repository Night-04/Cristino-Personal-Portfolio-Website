window.addEventListener("DOMContentLoaded", () => {
    // Apply theme immediately
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Fix Jitter: Remove preload class after a tiny delay
    setTimeout(() => {
        document.body.classList.remove("preload");
    }, 100);
});


/* ... [Rest of your preferences and reset functions] ... */

// ==========================================
// 1. Initial State & Load Fix
// ==========================================

// Load saved font size or default to 16
let currentFontSize = parseInt(localStorage.getItem("fontSize")) || 16;

window.addEventListener("DOMContentLoaded", () => {
    // 1. Apply saved preferences
    applySavedPreferences();

    // 2. REMOVE PRELOAD CLASS: This is the fix for the jitter.
    // We wait a tiny bit to ensure settings are applied before enabling transitions.
    setTimeout(() => {
        document.body.classList.remove("preload");
    }, 100);
});

function applySavedPreferences() {
    // Apply Dark Mode (Matches the head script)
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Apply Font Size
    document.body.style.fontSize = currentFontSize + "px";

    // Apply Custom BG if saved
    if (localStorage.getItem("customBg") === "enabled") {
        document.body.style.background = "#d4edda";
    }

    // Apply Custom Font Colors if saved
    if (localStorage.getItem("customColors") === "enabled") {
        applyCustomFontColors();
    }
}

// ==========================================
// 2. Persistent Dark Mode
// ==========================================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

// ==========================================
// 3. Home Page Features
// ==========================================
function waveHello() {
    const title = document.getElementById("hero-title");
    if (title) title.innerText = "Welcome to My Portfolio!";
}

// ==========================================
// 4. Preferences & Persistence
// ==========================================

function changeBgColor() {
    // Turn off dark mode to apply custom BG
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");

    document.body.style.background = "#d4edda";
    localStorage.setItem("customBg", "enabled");
}

function changeFontColor() {
    applyCustomFontColors();
    localStorage.setItem("customColors", "enabled");
}

function applyCustomFontColors() {
    document.body.style.color = "#004d00";
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    headings.forEach(h => h.style.color = "#d95f0e");
    
    const links = document.querySelectorAll("a:not(.hero-btn):not(.contact-btn):not(.nav-btn)");
    links.forEach(l => l.style.color = "#004d00");
}

function changeFontSize() {
    // Refinement: Cap font size at 24px so the UI doesn't break
    if (currentFontSize < 24) {
        currentFontSize += 2; 
        document.body.style.fontSize = currentFontSize + "px";
        localStorage.setItem("fontSize", currentFontSize);
    }
}

function resetColorsOnly() {
    document.body.style.background = ""; 
    document.body.style.color = "";
    document.querySelectorAll("h1, h2, h3, h4, a").forEach(el => el.style.color = "");
    localStorage.removeItem("customBg");
    localStorage.removeItem("customColors");
}

function resetPreferences() {
    resetColorsOnly();
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    
    currentFontSize = 16;
    document.body.style.fontSize = "";
    localStorage.removeItem("fontSize");

    const title = document.getElementById("hero-title");
    if (title) title.innerText = "Cristino Jr. M. Del Rosario";
}

// ==========================================
// 5. About Page: Secret
// ==========================================
function revealSecret() {
    const secretText = document.getElementById("secret-message");
    if (secretText) {
        secretText.innerText = "Secret: I built this whole persistence system because C# logic in Unity taught me that state management is king!";
        secretText.style.display = "block";
    }
}