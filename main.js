const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
  if (realFileBtn.value) {
    customText.innerHTML = realFileBtn.value;
  } else {
    customText.innerHTML = "No file";
  }
});
