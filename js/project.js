let caret = document.getElementById("caret");
caret.addEventListener("click", () => {
  caret.lastElementChild.classList.toggle("bi-caret-down");
  caret.lastElementChild.classList.toggle("bi-caret-up");
});
