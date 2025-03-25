const input = document.querySelector('input[type="number"]');
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  const inputNumber = Number(input.value);

  if (inputNumber >= 1 && inputNumber <= 100) {
    createBoxes(inputNumber);
    input.value = "";
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const kutu = document.createElement("div");
    kutu.style.width = `${size}px`;
    kutu.style.height = `${size}px`;
    kutu.style.backgroundColor = getRandomHexColor();
    kutu.style.marginBottom = "8px";
    boxes.appendChild(kutu);
    size += 10;
  }
}

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
