let resultElement = document.getElementById("result");
let expression = "";

function appendCharacter(character) {
  expression += character;
  resultElement.textContent = expression;
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
  resultElement.textContent = expression;
}

function clearResult() {
  expression = "";
  resultElement.textContent = "0";
}

function calculateResult() {
  try {
    let result = eval(expression);
    resultElement.textContent = result;
    expression = result.toString();
  } catch (error) {
    resultElement.textContent = "Error";
    expression = "";
  }
}

function addClickHandlers() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonValue = button.textContent;
      if (buttonValue === "=") {
        calculateResult();
      } else if (buttonValue === "C") {
        clearResult();
      } else if (buttonValue === "⌫") {
        deleteLastCharacter();
      } else {
        appendCharacter(buttonValue);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addClickHandlers();
});
