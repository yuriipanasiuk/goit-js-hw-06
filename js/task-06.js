const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", onInputColor);

function onInputColor() {
  const currentLength = String(textInputEl.value.length);
  const corectLength = String(textInputEl.dataset.length);

  return corectLength === currentLength
    ? textInputEl.classList.add("valid")
    : textInputEl.classList.add("invalid");
}
