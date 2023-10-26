document.addEventListener("DOMContentLoaded", function () {
  const digit3 = document.querySelector(".hidden-digit-3");
  const questSteps = document.querySelectorAll(".quest-step");
  const inputFields = document.querySelectorAll('input[type="text"]');
  const firstRobber = questSteps[0].querySelector(".robber");
  const secondRobber = questSteps[1].querySelector(".robber");
  const thirdRobber = questSteps[2].querySelector(".robber");
  const fourthRobber = questSteps[3].querySelector(".robber"); // Fixed the indexing here

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

  inputFields[1].addEventListener("input", function () {
    if (inputFields[1].value == "9") {
      questSteps[1].classList.add("completed");
      secondRobber.classList.remove("visible");
      thirdRobber.classList.add("visible");
    }
  });

  inputFields[2].addEventListener("input", function () {
    if (inputFields[2].value == "5") {
      questSteps[2].classList.add("completed");
      thirdRobber.classList.remove("visible");
      fourthRobber.classList.add("visible");
    }
  });

  inputFields[3].addEventListener("input", function () {
    if (inputFields[3].value == "2") {
      questSteps[3].classList.add("completed");
      thirdRobber.classList.remove("visible");
      // fourthRobber.classList.add("visible");
    }
  });
});

document.querySelector(".themeButton").addEventListener("click", function () {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
