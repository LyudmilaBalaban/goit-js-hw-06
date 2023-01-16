const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const listEl = document.querySelector("#ingredients");
// const elements = [];

// for (let i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);

//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredients[i];

//   elements.push(itemEl);
// }

// listEl.append(...elements);
// console.log(listEl.append(...elements));
// console.log(elements);

const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;

  return itemEl;
});

listEl.append(...elements);
console.log(elements);
