const inputRef = document.querySelector("#font-size-control");
const sizeRef = document.querySelector("#text");

inputRef.addEventListener("input", () => {
  sizeRef.style.fontSize = inputRef.value + "px";
});
