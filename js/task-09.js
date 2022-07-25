const ref = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

ref.button.addEventListener("click", changeBgColor);

function changeBgColor() {
  ref.body.style.backgroundColor = getRandomHexColor();
  ref.span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
