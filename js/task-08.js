const form = document.querySelector(".login-form");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(" Все поля должны быть заполнены!");
    return;
  }
  if (password.value.length <= 8) {
    alert("Длинна пароля должна быть более 8 символов");
    return;
  }

  console.log({ [email.name]: email.value, [password.name]: password.value });
  event.currentTarget.reset();
}
form.addEventListener("submit", onSubmitForm);
// email.addEventListener("input", onInputForm);
