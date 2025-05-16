// chapter4-text-formatting-script.js

// 🌟 Add animations and interactivity to formatting tags explanation

// When the user hovers over any list item, it gets highlighted
const listItems = document.querySelectorAll(".tags ul li");

listItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#ffe6f0"; // baby pink highlight
    item.style.transform = "scale(1.05)";
    item.style.transition = "all 0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "transparent";
    item.style.transform = "scale(1)";
  });
});

// Highlight text formatting examples on click with animation
const exampleText = document.querySelector(".example p");
exampleText.addEventListener("click", () => {
  exampleText.style.animation = "bounce 0.5s ease";
  setTimeout(() => {
    exampleText.style.animation = "none";
  }, 500);
});

// Add a bounce keyframe animation
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(styleTag);

// Console cheer-up message 💖
console.log("Chapter 4 JS loaded – You're learning like a star! 🌟");
