const ref = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

ref.textInput.addEventListener("input", (event) =>
  ref.textInput.value === ""
    ? (ref.output.textContent = "Anonymous")
    : (ref.output.textContent = event.currentTarget.value)
);
