const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const createItemRef = (element) => {
  return element.map((el) => {
    const createLi = document.createElement("li");
    createLi.textContent = el;
    createLi.classList.add("item");
    return createLi;
  });
};

const elements = createItemRef(ingredients);
listRef.append(...elements);
