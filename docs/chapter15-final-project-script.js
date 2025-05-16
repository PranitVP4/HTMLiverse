// chapter15-final-project-script.js

// Rainbow text effect for header
const header = document.querySelector('header h1');
let hue = 0;

function animateHeaderColor() {
  hue = (hue + 1) % 360;
  header.style.color = `hsl(${hue}, 70%, 50%)`;
  requestAnimationFrame(animateHeaderColor);
}
animateHeaderColor();

// Scroll-triggered animation for cards
const cards = document.querySelectorAll('.card');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Typewriter effect in card content
const typeText = (element, text, delay = 50) => {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
};

document.addEventListener('DOMContentLoaded', () => {
  const firstCard = document.querySelector('.card p');
  const text = firstCard.textContent;
  firstCard.textContent = '';
  typeText(firstCard, text);
});
