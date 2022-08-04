const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", onInputColor);

function onInputColor() {
  const currentLength = Number(textInputEl.value.length);
  const corectLength = Number(textInputEl.dataset.length);

  return corectLength === currentLength
    ? textInputEl.classList.add("valid")
    : textInputEl.classList.add("invalid");
}
