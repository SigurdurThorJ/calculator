const outcome = document.querySelector('.display');


const add = function(num1, num2) {
    const sum = num1 + num2;
    return sum;
};

const subtract = function(num1, num2) {
    const sum = num1 - num2; 
    return sum;
};

const multiply = function(num1, num2) {
    let sum = num1 * num2;
    return sum; 
};

const divide = function(num1, num2) {
    let sum =  num1 / num2;
    return sum;
}

function operate(num1, num2, operator) {
switch (operator) {
    case "+":
        return add(num1, num2);
    case "-":
        return subtract(num1, num2);
    case "*":
        return multiply(num1, num2);
    case "/":
        return divide(num1, num2);
    }
}

function outcome(operate) {
let outcome = 0;

}

outcome()