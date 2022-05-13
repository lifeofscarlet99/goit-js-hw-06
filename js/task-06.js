const inputEl = document.querySelector("#validation-input");
const onInputBlur = () => {
  const counter = inputEl.dataset.length;
  inputEl.value.length === Number(counter)
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
};
const fixClass = () => {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
};
inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("input", fixClass);
