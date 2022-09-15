let operands = [];
let operators = [];
let currentNumber = '0';
let operationMode = false;


function operatorClicked(operator) {
    if (!operationMode) {
        return;
    };
    operators.push(operator);
    operands.push(currentNumber);
    if (operator === 'equals') {
        currentNumber = calculate();
        updateDisplay(currentNumber);
        reset(currentNumber);
    } else {
        currentNumber = '0';
        updateDisplay();
        operationMode = false; 
    };
       
};

function numberClicked(num) {
    currentNumber === '0' ? currentNumber = num : currentNumber += num;
    updateDisplay(currentNumber);
    operationMode = true;
};

function reset(num = '0') {
    operands = [];
    operators = [];
    currentNumber = num;
};

function calculate() {
  let total = 0;
  
  for (let i = 0; i< operands.length; i++) {
    if (i === 0) {
        total = Number.parseFloat(operands[i]);
    } else {
        total = operate(total, Number.parseFloat(operands[i]), operators[i-1]);
    };
  };
    return `${total}`;
};

function operate(val1, val2, operator) {
    switch (operator) {
        case 'add':
            return val1 + val2;
        case 'subtract':
            return val1-val2;
        case 'multiply':
            return val1 * val2;
        case 'divide':
            return val1 / val2;
        default:
            return '0';
    };
};

function updateDisplay(num = '0') {
    const digitCount = num.length;
    const screen = document.getElementById('screen');
    if (digitCount >= 7 && digitCount < 10) {
        screen.style.fontSize = '350%';
    } else if (digitCount >= 10) {
        screen.style.fontSize = '250%';
    } else if (digitCount >= 13) {
        screen,style.fontSize ='150%'
    } else {
        screen.style.fontSize = '500%';
    };


    screen.innerText = num;
}

function handleButtonClick(btnId) {
    if (btnId === 'decimal') {
        currentNumber += '.';
        updateDisplay(currentNumber);
    } else if (btnId === 'clear') {
        reset();
        updateDisplay();
    } else if (!isNaN(Number.parseInt(btnId))) {
        numberClicked(btnId);
    } else {
        operatorClicked(btnId);
    };
};



const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.id));
});















