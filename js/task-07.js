const refs = {
  inputRef: document.querySelector("#font-size-control"),
  sizeRef: document.querySelector("#text"),
};

refs.inputRef.addEventListener("input", changeFontSize);

function changeFontSize() {
  refs.sizeRef.style.fontSize = refs.inputRef.value + "px";
}
