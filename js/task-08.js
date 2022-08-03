const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  mail === "" || password === ""
    ? alert("усі поля повинні бути заповнені!!!")
    : console.log(formData);

  formRef.reset();
}
