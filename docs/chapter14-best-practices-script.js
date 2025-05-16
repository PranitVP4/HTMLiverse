// chapter14-best-practices-script.js

// Smooth scroll reveal for all sections
document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll(".reveal-on-scroll");

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        scrollObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  revealSections.forEach(section => {
    scrollObserver.observe(section);
  });
});

// Floating tip message on hover
const tips = document.querySelectorAll(".tip-box");

tips.forEach(tip => {
  tip.addEventListener("mouseenter", () => {
    tip.style.transform = "scale(1.05)";
    tip.style.transition = "transform 0.3s ease";
  });
  tip.addEventListener("mouseleave", () => {
    tip.style.transform = "scale(1)";
  });
});

// Fun blinking tip icon
const tipIcons = document.querySelectorAll(".tip-icon");

setInterval(() => {
  tipIcons.forEach(icon => {
    icon.style.opacity = icon.style.opacity === "0" ? "1" : "0";
  });
}, 700);

// Sticky header on scroll
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    header.style.top = "-100px"; // hide
  } else {
    header.style.top = "0"; // show
  }
  lastScroll = currentScroll;
});
