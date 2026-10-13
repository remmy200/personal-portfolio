// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = open ? "✕" : "☰";
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("open"));
});

// Close the menu after choosing a link, or pressing Escape
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();