const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", onInputColor);

function onInputColor() {
  const corectLength = String(textInputEl.value.length);
  const incorectLength = String(textInputEl.dataset.length);

  return corectLength === incorectLength
    ? textInputEl.classList.add("valid")
    : textInputEl.classList.add("invalid");
}
