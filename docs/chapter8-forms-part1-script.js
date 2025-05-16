// chapter8-forms-part1-script.js

// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop the form from actually submitting

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if (name.trim() === "" || email.trim() === "") {
      alert("🚨 Please fill out both your name and email, beta!");
    } else {
      alert(`🎉 Thank you, ${name}! We received your email (${email}). Aunty is proud of you! 💌`);
      form.reset(); // Clear the form
    }
  });
});
