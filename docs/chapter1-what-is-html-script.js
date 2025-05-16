// Chapter 1 JS - Interactive features for better learning experience

// Show welcome alert once per session when page loads
window.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('welcomeShown')) {
    alert('Welcome to Chapter 1: What is HTML? Enjoy your learning journey! 🚀');
    sessionStorage.setItem('welcomeShown', 'true');
  }
});

// Add sparkle effect on header h1 on mouse hover
const heading = document.querySelector('header h1');

heading.addEventListener('mouseenter', () => {
  heading.style.textShadow = '0 0 10px #FFD700, 0 0 20px #FF8C00';
});

heading.addEventListener('mouseleave', () => {
  heading.style.textShadow = '1px 1px 2px #9bd6ff';
});

// Smooth scroll back to top and then redirect to index.html on clicking "Back to Home"
const backHome = document.querySelector('footer a.back-home');

backHome.addEventListener('click', (event) => {
  event.preventDefault(); // prevent instant jump

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 700);
});
