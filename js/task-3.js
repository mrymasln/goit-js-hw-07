const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  console.log(input.value);
  const name = input.value.trim();
  console.log(name);
  output.textContent = name === "" ? "Anonymous" : name;
});
