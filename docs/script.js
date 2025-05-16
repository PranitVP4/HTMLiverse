// script.js

// Wait for DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Animate header text letters one by one
  const header = document.querySelector("header h1");
  const text = header.textContent;
  header.textContent = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.opacity = 0;
    span.style.transition = `opacity 0.3s ease ${i * 0.1}s`;
    header.appendChild(span);
  }

  // Fade in letters one by one
  const spans = header.querySelectorAll("span");
  spans.forEach(span => (span.style.opacity = 1));

  // Create floating colored circles background (soft bubbles)
  const body = document.body;
  for (let i = 0; i < 15; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.top = Math.random() * 100 + "vh";
    bubble.style.width = 30 + Math.random() * 40 + "px";
    bubble.style.height = bubble.style.width;
    bubble.style.background = `rgba(100, 181, 246, 0.3)`;
    bubble.style.position = "fixed";
    bubble.style.borderRadius = "50%";
    bubble.style.filter = "blur(10px)";
    bubble.style.zIndex = "-1";
    bubble.style.animation = `floatBubble ${5 + Math.random() * 5}s ease-in-out infinite alternate`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    body.appendChild(bubble);
  }
});
