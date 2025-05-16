// chapter9-forms-part2-script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultDiv = document.getElementById("form-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let output = "<h3>Form Submission Result:</h3><ul>";

    for (let [key, value] of formData.entries()) {
      output += `<li><strong>${key}:</strong> ${value}</li>`;
    }

    output += "</ul>";
    resultDiv.innerHTML = output;
    resultDiv.scrollIntoView({ behavior: "smooth" });
  });

  // Animation: shake on invalid fields
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("invalid", () => {
      field.classList.add("shake");
      setTimeout(() => field.classList.remove("shake"), 500);
    });
  });
});
