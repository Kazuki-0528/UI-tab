const targetElement = document.querySelectorAll(".animationTarget");
const animationTargetElements = document.querySelectorAll(".textAnimation");
const showElements = document.querySelectorAll(".animation-target");

for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i];
  texts = targetElement.textContent;
  textsArray = [];

  targetElement.textContent = "";

  for (let j = 0; j < texts.split("").length; j++) {
    const t = texts.split("")[j];
    if (t === " ") {
      textsArray.push(" ");
    } else {
      textsArray.push(
        '<span style="animation-delay: ' +
          (j * 0.1 + 0.3) +
          's;">' +
          t +
          "</span>"
      );
    }
  }

  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML += textsArray[k];
  }
}

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.6;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});

window.addEventListener("scroll", function () {
  for (let i = 0; i < showElements.length; i++) {
    const getElementDistance =
      showElements[i].getBoundingClientRect().top +
      showElements[i].clientHeight * 0.5;
    if (window.innerHeight > getElementDistance) {
      showElements[i].classList.add("show");
    }
  }
});
