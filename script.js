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
let var1;
let var2;
let operator;

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

let clickcount = 0;

clear.addEventListener("click", () => {
    clickcount = 0;
    var1;
    var2;
    operator;
    display.textContent = "";
    return;
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        clickcount++;

        if(clickcount === 1) {
            var1 = Number(button.textContent);
            console.log(var1);
        } else if (clickcount === 2) {
            operator = button.textContent;
            console.log(operator);
        } else if (clickcount === 3) {
            var2 = Number(button.textContent)
        }
        
        // Run operations when user clicks =
        if(button.textContent === "=") {
            let result = input(operator);
            display.append(result);
        }

    });
});

// Create input function
function input(operator) {
    if(operator === "+") {
        return add(var1, var2);
    } else if (operator === "-") {
        return subtract(var1, var2);
    } else if (operator === "*") {
        return multiply(var1, var2);
    } else if (operator === "/") {
        return divide(var1, var2);
    } else {
        alert("Not a valid operations!");
        return;
    }
}

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));

console.log(operate(10, 20, "+"));
console.log(operate(10, 20, "-"));
console.log(operate(10, 20, "*"));
console.log(operate(10, 20, "/"));
console.log(operate(10, 20, "**"));

