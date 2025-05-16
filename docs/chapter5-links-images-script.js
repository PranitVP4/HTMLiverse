// JavaScript to enhance Chapter 5: Links & Images

// Function to show a tooltip on hover for the sample link
document.addEventListener("DOMContentLoaded", function () {
  const sampleLink = document.querySelector(".sample-link");
  if (sampleLink) {
    sampleLink.title = "Click to visit an external site!";
  }

  const sampleImage = document.querySelector(".sample-image");
  if (sampleImage) {
    sampleImage.addEventListener("mouseover", () => {
      sampleImage.style.transform = "scale(1.1) rotate(2deg)";
      sampleImage.style.transition = "transform 0.3s ease";
    });
    sampleImage.addEventListener("mouseout", () => {
      sampleImage.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Show alert on clicking the image
  if (sampleImage) {
    sampleImage.addEventListener("click", () => {
      alert("You clicked the image! Great job exploring!");
    });
  }
});
