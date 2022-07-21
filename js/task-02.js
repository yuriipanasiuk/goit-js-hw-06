const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const createItemRef = (options) => {
  return options.map((option) => {
    const createLi = document.createElement("li");
    createLi.textContent = option;
    createLi.classList.add("item");
    return createLi;
  });
};

const elements = createItemRef(ingredients);
listRef.append(...elements);
