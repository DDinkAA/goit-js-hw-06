const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredienstList = document.querySelector("#ingredients");

for (const item of ingredients) {
  const itemList = document.createElement("li");
  itemList.textContent = item;
  ingredienstList.append(itemList);
}
console.log(ingredienstList);

// console.log(ingredienstList);
