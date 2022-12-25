function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector("input");
const btnCreateBoxes = document.querySelector("[data-create]");
const btnDestroyBoxes = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

btnCreateBoxes.addEventListener("click", createBoxes);
btnDestroyBoxes.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(numberOfBoxes.value);

  let size = 30;
  let blocks = "";
  for (let i = 0; i < amount; i += 1) {
    blocks += `<div style=
    "
    width: ${size}px; 
    height: ${size}px; 
    background-color: ${getRandomHexColor()};
    ">
    </div>`;
    size += 10;
  }
  boxes.innerHTML = blocks;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  numberOfBoxes.value = 0;
}
