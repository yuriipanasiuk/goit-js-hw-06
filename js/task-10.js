const refs = {
  inputValue: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.inputValue.addEventListener("input", getInputValue);

function createBoxes(amount) {
  amount = getInputValue();
  const basicBoxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxSize = basicBoxSize + i * 10;
    const createDivEl = document.createElement("div");
    createDivEl.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()} `;
    refs.boxesEl.append(createDivEl);
  }
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
}

function getInputValue() {
  return refs.inputValue.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
