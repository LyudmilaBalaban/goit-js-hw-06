// const listWithId = document.querySelector("#categories").children.length;
// console.log("Number of categories: " + listWithId);

// const items = document.querySelectorAll(".item");

// Array.prototype.forEach.call(items, (element) => {
//   const title = element.querySelector("h2").innerHTML;
//   const itemsLength = element.querySelectorAll("li").length;
//   console.log(`Category: ${title} `);
//   console.log(`Elements: ${itemsLength}`);
// });

const listWithId = document.querySelector("#categories").children.length;
console.log("Number of categories: " + listWithId);

const ul = Array.from(document.querySelector("#categories").children);

for (let elem of ul) {
  let titleEl = elem.firstElementChild.textContent;
  let quantityEl = elem.lastElementChild.children.length;
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${quantityEl}`);
}
