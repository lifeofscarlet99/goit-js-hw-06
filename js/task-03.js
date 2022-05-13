const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("ul.gallery");
const createEl = images.reduce((acc, item) => {
  const liEl = document.createElement("li");
  liEl.insertAdjacentHTML(
    "beforeend",
    `<img src = "${item.url}" alt = "${item.alt}" width = "250" height = "150"/>`
  );
  liEl.classList.add("gallery__list-img");
  acc.push(liEl);
  return acc;
}, []);
galleryEl.append(...createEl);
galleryEl.classList.add("galery-list");
