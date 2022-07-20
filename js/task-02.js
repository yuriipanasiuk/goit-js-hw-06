const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingradient = ingredients.map((element) => {
  const createLi = document.createElement("li");
  createLi.textContent = element;
  createLi.classList.add("item");
  list.append(createLi);
});
