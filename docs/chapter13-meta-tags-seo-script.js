// chapter13-iframe-object-embed-script.js

// Scroll-based reveal animations
const revealElements = document.querySelectorAll('.reveal-on-scroll');

function revealOnScroll() {
  for (let elem of revealElements) {
    const windowHeight = window.innerHeight;
    const elementTop = elem.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      elem.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Highlight iframes on hover
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
  iframe.addEventListener('mouseenter', () => {
    iframe.style.border = '4px solid #bb8fd6';
    iframe.style.transition = 'border 0.3s ease';
  });
  iframe.addEventListener('mouseleave', () => {
    iframe.style.border = 'none';
  });
});

// Tooltip explanation (example if using meta info popups)
document.querySelectorAll('[data-tooltip]').forEach(elem => {
  elem.addEventListener('mouseover', function () {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = this.dataset.tooltip;
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#f4e6fc';
    tooltip.style.border = '1px solid #bb8fd6';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.color = '#5d3e7b';
    tooltip.style.zIndex = '999';
    tooltip.style.top = `${this.getBoundingClientRect().top - 30}px`;
    tooltip.style.left = `${this.getBoundingClientRect().left}px`;
    tooltip.classList.add('tooltip-box');
    document.body.appendChild(tooltip);
    this._tooltip = tooltip;
  });
  elem.addEventListener('mouseout', function () {
    if (this._tooltip) {
      document.body.removeChild(this._tooltip);
      this._tooltip = null;
    }
  });
});
