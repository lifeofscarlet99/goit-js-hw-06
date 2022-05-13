const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const myIngredients = document.querySelector("ul#ingredients");
console.log(myIngredients);
const colectIngidients = ingredients.reduce((acc, name) => {
  const listEl = document.createElement("li");
  listEl.textContent = name;
  acc.push(listEl);
  return acc;
}, []);

myIngredients.append(...colectIngidients);
// listEl.classList.add("item");
// console.log(listEl);
