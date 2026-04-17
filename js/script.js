// ==========================================
// 1. Navigation: Persistent Dark Mode 
// ==========================================

// PAGE LOAD CHECK: This runs immediately when any page loads.
// It checks the browser's "notepad" (localStorage) to see if dark mode was left ON.
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
    // 1. Toggle the visual class
    document.body.classList.toggle("dark-mode");
    
    // 2. Check if the body currently has the dark mode class
    if (document.body.classList.contains("dark-mode")) {
        // If yes, save "enabled" to the notepad
        localStorage.setItem("darkMode", "enabled");
    } else {
        // If no, save "disabled" (or remove it) from the notepad
        localStorage.setItem("darkMode", "disabled");
    }
}

// ==========================================
// 2. Home Page: Hand Waving Welcome
// ==========================================
function waveHello() {
    const title = document.getElementById("hero-title");
    if (title) {
        title.innerText = "Welcome to My Portfolio!";
    }
}

// ==========================================
// 3. Home Page: Preferences Panel
// ==========================================
let currentFontSize = 16; // Base font size

function changeBgColor() {
    document.body.style.background = "#d4edda"; // Soft green
}

function changeFontColor() {
    // 1. Change the general body text color
    document.body.style.color = "#004d00"; // Dark text
    
    // 2. Select ALL headings on the page and change them
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    headings.forEach(function(heading) {
        heading.style.color = "#d95f0e"; // Orange highlight for titles
    });

    // 3. Select ALL links on the page and change them
    const links = document.querySelectorAll("a");
    links.forEach(function(link) {
        // Safety check: skip the solid buttons so their text stays readable
        if (!link.classList.contains("hero-btn") && !link.classList.contains("contact-btn") && !link.classList.contains("nav-btn")) {
            link.style.color = "#004d00";
        }
    });
}

function changeFontSize() {
    currentFontSize = currentFontSize + 2; 
    document.body.style.fontSize = currentFontSize + "px";
}

function resetPreferences() {
    // Reset structural styles
    document.body.style.background = ""; 
    document.body.style.color = "";
    document.body.style.fontSize = "";
    currentFontSize = 16;
    
    // Reset the main title text back to your name
    const title = document.getElementById("hero-title");
    if (title) {
        title.innerText = "Cristino Jr. M. Del Rosario";
    }

    // Reset ALL headings back to their original CSS color
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    headings.forEach(function(heading) {
        heading.style.color = ""; // Leaving it blank removes the JS inline style
    });

    // Reset ALL links back to their original CSS color
    const links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.style.color = "";
    });
}

// ==========================================
// 4. About Page: Reveal Secret
// ==========================================
function revealSecret() {
    const secretText = document.getElementById("secret-message");
    if (secretText) {
        // The witty secret is safe here!
        secretText.innerText = "Secret: Sometimes I spend more time debugging C# Boss AI behaviors in Unity than I do actually playing games!";
        secretText.style.display = "block";
    }
}