// chapter6-lists-script.js

// Wait for the DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
  // Select all list items in unordered, ordered, and definition lists
  const listItems = document.querySelectorAll("ul li, ol li, dl dt");

  listItems.forEach((item) => {
    // Add a click event to show more info on each list item
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      // Toggle explanation paragraph under the clicked item
      let explanation = item.nextElementSibling;

      // For dl dt, next sibling is dd (explanation)
      // For ul/ol li, create explanation dynamically if not exist

      if (!explanation || explanation.tagName.toLowerCase() !== "p") {
        // Create explanation paragraph dynamically for ul/ol list items
        explanation = document.createElement("p");
        explanation.classList.add("explanation");
        explanation.style.color = "#5a44b1";
        explanation.style.marginTop = "6px";
        explanation.style.fontStyle = "italic";
        explanation.style.fontSize = "1rem";
        explanation.textContent = `This is an explanation for "${item.textContent}". Lists help organize content!`;
        item.insertAdjacentElement("afterend", explanation);
      } else {
        // If explanation exists, toggle visibility
        if (explanation.style.display === "none" || !explanation.style.display) {
          explanation.style.display = "block";
        } else {
          explanation.style.display = "none";
        }
      }
    });
  });

  // Bonus: Add a small animation on hover to all list items
  listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.color = "#a48de6";
      item.style.transition = "color 0.3s ease";
    });
    item.addEventListener("mouseleave", () => {
      item.style.color = "";
    });
  });
});
