// chapter7-tables-script.js

// 🎉 Animate the table rows when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("table tr");
  rows.forEach((row, index) => {
    row.style.opacity = 0;
    setTimeout(() => {
      row.style.transition = "opacity 0.6s ease";
      row.style.opacity = 1;
    }, index * 300);
  });
});

// 🎨 Fun hover effect to highlight a cell
const table = document.querySelector("table");
table.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "TD" || e.target.tagName === "TH") {
    e.target.style.backgroundColor = "#FFF0F5"; // light pink highlight
    e.target.style.transform = "scale(1.05)";
    e.target.style.transition = "all 0.2s ease-in-out";
  }
});
table.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "TD" || e.target.tagName === "TH") {
    e.target.style.backgroundColor = "";
    e.target.style.transform = "scale(1)";
  }
});

// 💡 Click on a cell to show alert with its value
table.addEventListener("click", (e) => {
  if (e.target.tagName === "TD") {
    alert(`You clicked on: ${e.target.textContent}`);
  }
});
