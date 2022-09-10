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

const allClear = document.getElementById('clear');
const equation = document.querySelector('.calculations');
const btn = document.querySelectorAll('.operand');
let numsShown = [];

btn.forEach(button => {
    button.addEventListener('click', () => {
        numsShown.push(button.value);
        equation.textContent = numsShown.join('');
        return numsShown;
    });
});

allClear.addEventListener('click', () => {
    numsShown = [];
    equation.textContent = numsShown;
});


























