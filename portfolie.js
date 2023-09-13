
        var copyrightElement = document.getElementById("copyright");
        var currentYear = new Date().getFullYear();
        copyrightElement.textContent = "© " + currentYear + " Melker Johansson. Alla rättigheter förbehållna.";

// JavaScript
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Stäng menyn om användaren klickar någonstans utanför menyn
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        mobileMenu.classList.remove('open');
    }
});


    