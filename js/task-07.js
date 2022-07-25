const ref = {
  inputRef: document.querySelector("#font-size-control"),
  sizeRef: document.querySelector("#text"),
};

ref.inputRef.addEventListener("input", changeFontSize);

function changeFontSize() {
  ref.sizeRef.style.fontSize = ref.inputRef.value + "px";
}
