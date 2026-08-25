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

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));

console.log(operate(10, 20, "+"));
console.log(operate(10, 20, "-"));
console.log(operate(10, 20, "*"));
console.log(operate(10, 20, "/"));
console.log(operate(10, 20, "**"));

