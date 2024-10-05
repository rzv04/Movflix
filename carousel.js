const dots = document.querySelectorAll(".dot-btn");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

function showNext() {
  items[currentIndex].style.transform = "translateX(-100%)"; // Slide out current
  dots[currentIndex].classList.toggle("selected");
  currentIndex = (currentIndex + 1) % items.length; // Update index
  items[currentIndex].style.transform = "translateX(0)"; // Slide in next
  dots[currentIndex].classList.toggle("selected");
}

// Set interval for automatic sliding
setInterval(showNext, 5000); // Change every 5 seconds
