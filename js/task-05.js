const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", (event) =>
  refs.textInput.value === ""
    ? (refs.output.textContent = "Anonymous")
    : (refs.output.textContent = event.currentTarget.value)
);
