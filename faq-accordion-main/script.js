let icon_one = document.querySelector("#one");
let minus_one = document.querySelector("#minus_one");
let answer_one = document.querySelector(".answer_one");
let icon_two = document.querySelector("#two");
let minus_two = document.querySelector("#minus_two");
let answer_two = document.querySelector(".answer_two");
let icon_three = document.querySelector("#three");
let minus_three = document.querySelector("#minus_three");
let answer_three = document.querySelector(".answer_three");
let icon_four = document.querySelector("#four");
let minus_four = document.querySelector("#minus_four");
let answer_four = document.querySelector(".answer_four");

icon_one.addEventListener("click", function () {
  icon_one.classList.toggle("hidden");
  answer_one.classList.toggle("hidden");
  minus_one.classList.toggle("hidden");
});

minus_one.addEventListener("click", function () {
  icon_one.classList.toggle("hidden");
  answer_one.classList.toggle("hidden");
  minus_one.classList.toggle("hidden");
});
icon_two.addEventListener("click", function () {
  icon_two.classList.toggle("hidden");
  answer_two.classList.toggle("hidden");
  minus_two.classList.toggle("hidden");
});

minus_two.addEventListener("click", function () {
  icon_two.classList.toggle("hidden");
  answer_two.classList.toggle("hidden");
  minus_two.classList.toggle("hidden");
});
icon_three.addEventListener("click", function () {
  icon_three.classList.toggle("hidden");
  answer_three.classList.toggle("hidden");
  minus_three.classList.toggle("hidden");
});

minus_three.addEventListener("click", function () {
  icon_three.classList.toggle("hidden");
  answer_three.classList.toggle("hidden");
  minus_three.classList.toggle("hidden");
});
icon_four.addEventListener("click", function () {
  icon_four.classList.toggle("hidden");
  answer_four.classList.toggle("hidden");
  minus_four.classList.toggle("hidden");
});

minus_four.addEventListener("click", function () {
  icon_four.classList.toggle("hidden");
  answer_four.classList.toggle("hidden");
  minus_four.classList.toggle("hidden");
});
