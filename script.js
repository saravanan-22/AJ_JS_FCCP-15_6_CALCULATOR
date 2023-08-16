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



// Element Selection:

// resultElement: This variable refers to an HTML element with the ID "result", which is assumed to be a text element (e.g., a <div>) where the calculator's result or input expression will be displayed.
// expression: This variable holds the current expression that is being built or calculated.
// Function appendCharacter:
// This function takes a character (typically a digit or operator) as an argument and appends it to the expression variable. After appending the character, it updates the textContent of resultElement with the updated expression.

// Function deleteLastCharacter:
// This function removes the last character from the expression by using the slice method. It updates the resultElement with the modified expression.

// Function clearResult:
// This function resets the expression to an empty string and updates the resultElement to display "0".

// Function calculateResult:
// This function uses the eval function to evaluate the content of the expression as a mathematical expression. It then updates the resultElement with the calculated result, and the expression is updated to hold the result as a string. If an error occurs during evaluation (e.g., invalid input), it displays "Error" in the resultElement.

// Function addClickHandlers:
// This function adds click event handlers to all elements with the class "btn" (which are assumed to be the calculator buttons). Inside the event handler, the value of the clicked button is retrieved using button.textContent. Depending on the value of the button clicked, different actions are taken:

// If the button is "=", the calculateResult function is called.
// If the button is "C", the clearResult function is called.
// If the button is "⌫" (backspace), the deleteLastCharacter function is called.
// For other buttons (digits and operators), the appendCharacter function is called.
// DOMContentLoaded Event Listener:
// The code attaches an event listener to the "DOMContentLoaded" event of the document. Once the DOM content is fully loaded, the addClickHandlers function is called. This ensures that the button click handlers are attached to the buttons after the DOM is ready.
