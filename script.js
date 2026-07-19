// Designed & Developed by Raj

// Animated counters
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 80);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Reveal animation
const revealElements = document.querySelectorAll(
    ".glass-card, .timeline-item, .faq-item, .stat-card"
);

function reveal() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Navbar shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// Footer year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Raj. All Rights Reserved.`;
          }
