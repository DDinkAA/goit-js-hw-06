const categoriesRef = document.querySelector("#categories");
// console.log(`Number of categories: ${categories.children.length}`);

const listItemsRef = categories.getElementsByClassName("item");

for (let item of listItemsRef) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Element: ${item.lastElementChild.children.length}`);
}
