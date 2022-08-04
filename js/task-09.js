const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", changeBgColor);

function changeBgColor() {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
