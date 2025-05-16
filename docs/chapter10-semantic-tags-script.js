// chapter10-semantic-script.js

// Smooth scroll for internal nav links
document.querySelectorAll('.live-demo nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.live-demo main > *');
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const id = section.id;
    const navLink = document.querySelector(`.live-demo nav a[href="#${id}"]`);
    if (!navLink) return;

    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});

// Toggle background color of semantic tags on click for fun interaction
const semanticTags = document.querySelectorAll('.live-demo main > *');
semanticTags.forEach(tag => {
  tag.style.cursor = 'pointer';
  tag.addEventListener('click', () => {
    tag.style.backgroundColor = tag.style.backgroundColor === 'rgb(221, 221, 221)' ? '#f2f2f2' : '#dddddd';
  });
});
