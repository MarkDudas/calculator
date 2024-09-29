function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Division by 0.";
    }
    return a / b;
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

let displayValue = "0";

function updateDisplay() {
    const display = document.querySelector("#display");
    display.textContent = displayValue;
}

function handleDigitPress(digit) {
    if (displayValue === "0") {
        displayValue = digit;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}

function handleClear() {
    displayValue = "0";
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    updateDisplay();
}

const digits = document.querySelectorAll(".digit");
digits.forEach(button => {
    button.addEventListener("click", () => {
        handleDigitPress(button.textContent);
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", handleClear);

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
        } else {
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(currentOperator, firstNumber, secondNumber);
        }
        currentOperator = button.textContent;
        displayValue = "0";
        updateDisplay();
    });
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    if (currentOperator && firstNumber !== null) {
        secondNumber = parseFloat(displayValue);
        displayValue = operate(currentOperator, firstNumber, secondNumber).toString();
        firstNumber = null;
        currentOperator = null;
        updateDisplay();
    }
});

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by 0";
    }
    return a / b;
}
