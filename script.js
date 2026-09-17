/* ==========================================================================
   VARAHI YOUTH GROUP — VINAYAKA CHAVITHI SCRIPTS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  initNavbarLinks();
  initScrollAnimations();
});

/* =========================================
   1. HERO SLIDESHOW / CAROUSEL
========================================= */
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length <= 1) return; // No need to loop if 0 or 1 slide

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length; // Clean wrap-around modulo
    slides[current].classList.add("active");
  }, 3000);
}

/* =========================================
   2. JOIN CELEBRATION ACTION
========================================= */
function showMessage() {
  alert(
    "🙏 Welcome to Varahi Youth Group Vinayaka Chavithi Celebrations! 🐘\n\n" +
    "Ganapathi Bappa Morya! 🌺"
  );
}

// Make accessible globally for inline onclick="showMessage()" attributes
window.showMessage = showMessage;

/* =========================================
   3. NAVBAR ACTIVE LINK ON CLICK
========================================= */
function initNavbarLinks() {
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

/* =========================================
   4. SCROLL REVEAL ANIMATIONS
========================================= */
function initScrollAnimations() {
  const sections = document.querySelectorAll(
    ".about, .events, .team, .gallery, .contact"
  );
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observerInstance.unobserve(entry.target); // Unobserve once animated
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
}