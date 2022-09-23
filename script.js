const firstValue = document.getElementById("firstValue");
const operator = document.getElementById("operator");
const secondValue = document.getElementById("secondValue");
const btnCalculate = document.getElementById("btn-calculate");
const btnGame = document.getElementById("btn-game");
const btnReset = document.getElementById("btn-reset");
const textarea = document.querySelector("textarea");

function simpleCalc(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
      break;
    case "-":
      return firstValue - secondValue;
      break;
    case "/":
      return firstValue / secondValue;
      break;
    case "*":
      return firstValue * secondValue;
      break;
    default:
      alert(`${operator} is an invalid operator`);
      return "Invalid operator";
      break;
  }
}

btnCalculate.addEventListener("click", function (event) {
  event.preventDefault();
  const result = simpleCalc(
    parseInt(firstValue.value),
    operator.value,
    parseInt(secondValue.value)
  );
  textarea.value = result;
});

btnReset.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelectorAll("input").forEach((element) => (element.value = ""));
});

btnGame.addEventListener("click", function (event) {
  event.preventDefault();
  game();
});

function game() {
  const random = Math.floor(Math.random() * 100) + 1;
  const name = prompt("What is your name?");

  let choice = prompt("What is your choice? (between 1 and 100)");

  while (parseInt(choice) !== random) {
    if (parseInt(choice) > random) {
      choice = prompt("You're too up, try again:");
    } else {
      choice = prompt("You're too low, try again:");
    }
  }
  alert(`Gagné ${name}, la valeur était ${random}.`);
  document.querySelectorAll("input");
}

// Option, using while true (preferred)
// while (true) {
//   const choice = prompt("What is your choice? (between 1 and 100)");
//   if (choice > random) {
//     alert("You're too up!");
//   } else if (choice < random) {
//     alert("You're too low!");
//   } else if (choice === "q") {
//     return false;
//   } else {
//     alert(`Gagné ${name}, la valeur était ${random}.`);
//     return false;
//   }
// }
