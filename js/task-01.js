const ulEl = document.querySelector("ul#categories");
const liEl = document.querySelectorAll(".item");
const countOfChildren = ulEl.children.length;
console.log(`Number of categories: ${countOfChildren}`);

const getCategoryInformation = (list) => {
  list.forEach((category) => {
    const title = category.firstElementChild.textContent;
    const numberOfItems = category.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberOfItems}`);
  });
};
getCategoryInformation(liEl);
