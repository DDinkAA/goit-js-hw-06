document.getElementById("validation-input").onblur = function () {
  console.log(this.value.length);
  if (Number(this.getAttribute("data-length")) !== this.value.trim().length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};
