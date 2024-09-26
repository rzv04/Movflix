const lines = document.querySelectorAll(".line");
const menuBtn = document.querySelector(".menu-btn");
const mainMenuItems = document.querySelectorAll(".main-menu-item");
const subMenuItems = document.querySelectorAll(".sub-menu-item");
const subMenuHeading = document.querySelector(".sub-menu-heading");
const page = document.querySelector(".page");
const lineDelays = [
  0.2, 0.3, 0.23, 0.4, 0.43, 0.4, 0.52, 0.58, 0.55, 0.61, 0.64, 0.69,
];
menuBtn.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("open"));
  mainMenuItems.forEach((mainMenuItem) =>
    mainMenuItem.classList.toggle("open")
  );
  subMenuItems.forEach((subMenuItem) => subMenuItem.classList.toggle("open"));
  subMenuHeading.classList.toggle("open");
  page.classList.toggle("open");
  page.classList.toggle("close");
});

lines.forEach(
  (line, index) => (line.style.transition = `all ${lineDelays[index]}s ease-in`)
);
