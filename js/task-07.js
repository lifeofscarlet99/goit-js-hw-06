const sizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const setFontSize = () => {
  textEl.style.fontSize = sizeEl.value + "px";
};
sizeEl.addEventListener("input", setFontSize);
