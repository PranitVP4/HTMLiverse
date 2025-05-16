// chapter12-div-span-layout-script.js

// Animate sections when they come into view
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible', 'fade-in');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Animate layout-box items on click
document.querySelectorAll('.layout-box > div').forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.add('bounce');
    setTimeout(() => box.classList.remove('bounce'), 1000);
  });
});

// Navigation scroll animation
document.querySelectorAll('header nav a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
