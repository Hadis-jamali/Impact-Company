let caret = document.getElementById("caret");
caret.addEventListener("click", () => {
  caret.lastElementChild.classList.toggle("bi-caret-down");
  caret.lastElementChild.classList.toggle("bi-caret-up");
});

var spriteWidth = 400;
var steps = 1;

var currentStep = 0;
var currentPos = 0;
var speed = 800;

function animate() {
  currentStep = (currentStep + 1) % steps;
  currentPos = -currentStep * spriteWidth + "px";
  document.querySelector(".animation").style.backgroundPosition = currentPos + " top";
}

setInterval(animate, speed);
