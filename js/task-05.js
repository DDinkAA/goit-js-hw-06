let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", (event) => {
//   if (nameInput.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = event.currentTarget.value.trim();
//   }
// });

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value.trim() === "" 
  ? "Anonymous" : event.currentTarget.value.trim();
});
