let num1 = '';
let num2 = '';
let operator = '';
let displayValue = '';

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return (num1 / num2);
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
            
        case '-':
            return subtract(num1, num2);
            
        case '*':
            return multiply(num1, num2);
                    
        case '/':
            return divide(num1, num2);            
    }
}

function display(val){
    
    if(val == '+' || val == '-' || val == '*' || val == '/'){
        displayValue = displayArea.value + " " + val + " ";
        displayArea.value = displayValue;
    } else {
        displayValue = displayArea.value  + val;
        displayArea.value = displayValue;
    }
    
}

function clear() {
    displayArea.value = '';
}

const displayArea = document.querySelector("#result");
const buttons = document.querySelectorAll(".regButton");
const equals = document.querySelector("#equals");
const clearButton = document.querySelector("#clearButton");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.value);
        console.log("click " + button.value);
    });
});

equals.addEventListener('click', () => {
    let currentValue = '';
    const values = displayValue.split(" ");

    while(values.length > 1) {
        let num1 = values.shift();
        let operator = values.shift();
        let num2 = values.shift();

        currentValue = operate(num1, num2, operator);
        values.unshift(currentValue);        
    }   
    displayArea.value = currentValue;
    
});

clearButton.addEventListener('click', () => {
    displayArea.value = '';
});


