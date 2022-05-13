const decr = document.querySelector('button[data-action ="decrement"]');
const incr = document.querySelector('button[data-action ="increment"]');
const val = document.querySelector("#value");
let counterValue = Number(val.textContent);

const decrement = () => {
  val.textContent = counterValue -= 1;
};
const increment = () => {
  val.textContent = counterValue += 1;
};
decr.addEventListener("click", decrement);

incr.addEventListener("click", increment);
