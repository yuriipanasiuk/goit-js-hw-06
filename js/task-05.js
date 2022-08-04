const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", changeOutput);

function changeOutput(evt) {
  refs.textInput.value === ""
    ? (refs.output.textContent = "Anonymous")
    : (refs.output.textContent = evt.currentTarget.value.trim());
}
