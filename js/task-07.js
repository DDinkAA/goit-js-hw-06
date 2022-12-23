// const textSizeChange = document.getElementById("font-size-control");
// const changeableText = document.getElementById("text");

// textSizeChange.oninput = function () {
//   changeableText.style.fontSize = textSizeChange.value + "px";
// };

const textSizeChange = document.getElementById("font-size-control");
const changeableText = document.getElementById("text");
textSizeChange.addEventListener("input", changeTextSize);
function changeTextSize(event) {
  changeableText.style.fontSize = event.currentTarget.value + "px";
}
