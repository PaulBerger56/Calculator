let num1 = '';
let num2 = '';
let operator = '';
let displayValue = '';

function add(num1, num2) {
    return num1 + num2;
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
    const displayArea = document.querySelector("#result");
    if(val == '+' || val == '-' || val == '*' || val == '/'){
        displayValue = displayArea.value + " " + val + " ";
        displayArea.value = displayValue;
    } else {
        displayValue = displayArea.value  + val;
        displayArea.value = displayValue;
    }
    
}


const buttons = document.querySelectorAll(".regButton");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button.value);
        console.log("click " + button.value);
    });
})