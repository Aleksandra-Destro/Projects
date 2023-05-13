const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const letters = document.querySelectorAll(".letter");

const toggleClass = function () {
  btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    btn.classList.toggle("dark-btn");
    for (const letter of letters) {
      letter.classList.toggle("dark-letter");
      letter.classList.remove("animated");
    }
  });
};

toggleClass();
