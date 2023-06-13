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

const displayArea = document.querySelector("#result");
const buttons = document.querySelectorAll(".regButton");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clearButton");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.value);
        console.log("click " + button.value);
    });
});

equals.addEventListener('click', () => {
    const values = displayValue.split(" ");
    let num1 = values[0];
    let operator = values[1];
    let num2 = values[2];
    displayArea.value = operate(num1, num2, operator);
})


