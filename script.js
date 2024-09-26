const lines = document.querySelectorAll(".line");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("open"));
});
