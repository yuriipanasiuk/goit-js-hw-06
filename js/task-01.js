const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const itemLength = el.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemLength}`);
});
