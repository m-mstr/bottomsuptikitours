const primaryNav = document.querySelector(".navlinks");
const navToggle = document.querySelector(".burger");
const navClose = document.querySelector(".x");
const navlinks = document.querySelectorAll(".navlinks li");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        navClose.setAttribute("aria-expanded", "true");
    }

    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFadein 0.5s ease forwards ${index / 5 + 0.3}s`;
    });
});

navClose.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        navClose.setAttribute("aria-expanded", "false");
    }

    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFadeOut 0.5s ease forwards ${index / 5 + 0.1}`;
    });
});

