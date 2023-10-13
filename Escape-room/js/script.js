document.addEventListener("DOMContentLoaded", function () {
  const digit3 = document.querySelector(".hidden-digit-3");
  const questSteps = document.querySelectorAll(".quest-step");
  const inputFields = document.querySelectorAll('input[type="text"]');
  const firstRobber = questSteps[0].querySelector(".robber");
  const secondRobber = questSteps[1].querySelector(".robber");

  digit3.addEventListener("click", function () {
    inputFields[0].value = "3";
  });

  inputFields[0].addEventListener("input", function () {
    if (inputFields[0].value == "3") {
      questSteps[0].classList.add("completed");
      firstRobber.classList.remove("visible");
      secondRobber.classList.add("visible");
      digit3.style.display = "none";
    }
  });
});
