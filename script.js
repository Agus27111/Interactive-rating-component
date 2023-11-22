const ratingState = document.querySelector(".ratingState");
const thankYou = document.querySelector(".thankYou");
const submitButton = document.getElementById("submit");
const backAgain = document.getElementById("thanks");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  ratingState.classList.add("hidden");
});

backAgain.addEventListener("click", () => {
  ratingState.classList.remove("hidden");
  thankYou.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
