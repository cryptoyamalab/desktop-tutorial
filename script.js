const progressBar = document.querySelector('.progress');
const loadingText = document.querySelector('.loading-text');

const messages = [
  { percent: 0, text: "0% - Shark is confused..." },
  { percent: 10, text: "10% - Shark is swimming toward the hummingbird..." },
  { percent: 25, text: "25% - Hummingbird is hovering nervously..." },
  { percent: 50, text: "50% - Shark attempts to communicate..." },
  { percent: 75, text: "75% - Hummingbird realizes this is a bad idea..." },
  { percent: 100, text: "100% - ERROR: Biological incompatibility detected. Mission aborted." }
];

let currentStep = 0;

function updateLoadingBar() {
  if (currentStep < messages.length) {
    const { percent, text } = messages[currentStep];
    progressBar.style.width = `${percent}%`;
    loadingText.textContent = text;
    currentStep++;
    setTimeout(updateLoadingBar, 1000); // Update every 1 second
  }
}

updateLoadingBar();

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress");
    const continueButton = document.getElementById("continueButton");
  
    // Wait for the progress bar animation to finish
    progressBar.addEventListener("transitionend", function () {
      // Make the button visible
      continueButton.classList.add("visible");
    });
  
    // Redirect to another page when the button is clicked
    continueButton.addEventListener("click", function () {
      window.location.href = "another-page.html"; // Replace with your desired URL
    });
  });