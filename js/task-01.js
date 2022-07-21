const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);

Array.prototype.map.call(itemsRef, (element) => {
  const title = element.querySelector("h2").textContent;
  const itemLength = element.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemLength}`);
});
