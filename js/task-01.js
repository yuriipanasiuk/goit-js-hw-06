const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

Array.prototype.map.call(items, (element) => {
  const title = element.querySelector("h2").textContent;
  const itemLength = element.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemLength}`);
});
