const items = document.querySelectorAll(".item");
console.log("Number of categories: " + items.length);

items.forEach(function (item) {
  console.log("Category: " + item.querySelector("h2").textContent);
  console.log("Elements: " + item.querySelectorAll("li").length);
});
