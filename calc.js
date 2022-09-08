function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, ...operands) {
    if (operator == '+') {
        return add(...operands);
    } else if (operator == '-') {
        return subtract(...operands);
    } else if (operator == '*') {
        return multiply(...operands);
    } else if (operator == '/') {
        return divide(...operands);
    };
};

console.log(operate('/', 2, 7));























