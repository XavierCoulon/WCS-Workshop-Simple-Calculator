const firstValue = document.getElementById("firstValue");
const operator = document.getElementById("operator");
const secondValue = document.getElementById("secondValue");
const btn = document.querySelector("button");
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

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const result = simpleCalc(
    parseInt(firstValue.value),
    operator.value,
    parseInt(secondValue.value)
  );
  textarea.value = result;
});
