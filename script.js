// Create add function (two inputs)
function add(a, b) {
    return a + b;
}

// Create subtract function (two inputs)
function subtract(a, b) {
    return a - b;
}

// Create multiple function (two inputs)
function multiply(a, b) {
    return a * b;
}

// Create divide function (two inputs)
function divide(a, b) {
    return a / b;
}

// Create two var variables and an operator variable
let firstNumber = null;
let pendingOperator = null;
let awaitingSecondNumber = false;


// Create operator function
function operate(var1, var2, sign) {
    if(sign === "+") {
        return add(var1, var2);
    } else if (sign === "-") {
        return subtract(var1, var2);
    } else if (sign === "*") {
        return multiply(var1, var2);
    } else if (sign === "/") {
        return divide(var1, var2);
    } else {
        return "Enter a viable operator"
    };
};

// Listen to all buttons
const buttons = document.querySelectorAll("button:not(#clear");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    firstNumber = null;
    pendingOperator = null;
    awaitingSecondNumber = false;
    display.textContent = "";
    return;
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        const isOperator = ["+", "-", "*", "/"].includes(value);

        if (value === "=") {
            if(firstNumber !== null && pendingOperator !== null) {
                let result = operate(firstNumber, Number(display.textContent), pendingOperator);
                display.textContent = result;
                firstNumber = null;
                pendingOperator = null;
                awaitingSecondNumber = true;
            }

        } else if (isOperator) {
            if (firstNumber !== null && pendingOperator !== null && !awaitingSecondNumber) {
                // Chain: evaluate what's pending before storing new operator
                let result = operate(firstNumber, Number(display.textContent), pendingOperator);
                display.textContent = result;
                firstNumber = result;
            } else {
                firstNumber = Number(display.textContent);
            }
            pendingOperator = value;
            awaitingSecondNumber = true;

        } else {
            // It's a digit
            if (awaitingSecondNumber) {
                display.textContent = value;
                awaitingSecondNumber = false;
            } else {
                display.textContent += value;
            }
        }
    });
});