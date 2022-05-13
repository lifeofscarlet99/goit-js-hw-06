const form = document.querySelector(".login-form");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");

function onSubmitForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log("onSubmitForm -> name", name);
    console.log("onSubmitForm -> value", value);
  });
  // const email = formElements.email.value;
  // const password = formElements.password.value;
  // console.log(email, password);
  // const formData = {
  //   email,
  //   password,
  // };
  // console.log(formData);
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(" Все поля должны быть заполнены!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

// function onInputForm() {
//   if (!email.value) {
//     email.textContent = "Все поля должны быть заполнены!";
//     return;
//   }
// }

form.addEventListener("submit", onSubmitForm);
// email.addEventListener("input", onInputForm);
