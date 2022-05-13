const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const changeBtnColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyColor.style.backgroundColor;
};
btnColor.addEventListener("click", changeBtnColor);

function getRandomHexColor(event) {
  const rbt = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.background = rbt;
}
