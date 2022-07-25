const ref = {
  inputValue: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

ref.createBtn.addEventListener("click", createBoxes);
ref.destroyBtn.addEventListener("click", destroyBoxes);
ref.inputValue.addEventListener("input", getInputValue);

function createBoxes(amount) {
  amount = getInputValue();
  const basicBoxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxSize = basicBoxSize + i * 10;
    const createDivEl = document.createElement("div");
    createDivEl.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()} `;
    ref.boxesEl.append(createDivEl);
  }
}

function destroyBoxes() {
  ref.boxesEl.innerHTML = "";
}

function getInputValue() {
  return ref.inputValue.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
