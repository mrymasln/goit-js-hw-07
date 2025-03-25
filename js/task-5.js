const chanceColor = document.querySelector(".change-color");

chanceColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = newColor;
  const spanColor = document.querySelector(".color");
  spanColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
