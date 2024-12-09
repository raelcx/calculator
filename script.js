const display = document.getElementById("display");
let number1;
let number2;
let operator;
let showingResult = 0;
let parentese = 'open';

function sum(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function divide(a, b) {
return a / b;
}

function multiply(a, b) {
return a * b;
}

function operate(a, b, operator) {
    switch(operator) {
        case("+"):
            return sum(a, b);
            break;
        case("-"):
            return subtract(a, b);
            break;
        case("*"):
            return multiply(a, b);
            break;
        case("/"):
            return divide(a, b);
            break;
    }
}

function updateDisplay(character) {
    if (showingResult == 1) {
        display.textContent = '';
        showingResult = 0
    }

    let charToInsert;

    switch(character) {
        case("button1"):
        charToInsert = '1';
            break;

        case("button2"):
            charToInsert = '2';
            break;

        case("button3"):
            charToInsert = '3';
            break;

        case("button4"):
            charToInsert = '4';
            break;

        case("button5"):
            charToInsert = '5';
            break;

        case("button6"):
            charToInsert = '6';
            break;

        case("button7"):
            charToInsert = '7';
            break;

        case("button8"):
            charToInsert = '8';
            break;

        case("button9"):
            charToInsert = '9';
            break;

        case("button0"):
            charToInsert = '0';
            break;

        case("button-sum"):
            charToInsert = ' + ';
            break;

        case("button-divide"):
            charToInsert = ' / ';
            break;

        case("button-multiply"):
            charToInsert = ' * ';
            break;

        case("button-subtract"):
            charToInsert = ' - ';
            break;

        case("button-decimal"):
            if (display.textContent.indexOf('.') == -1) {
                charToInsert = '.';
            }
            break;

        case("button-parentese"):
            let parenteseToInsert;
            if (parentese == 'open') {
                parenteseToInsert = '(';
                parentese = 'close';
            } else if (parentese == 'close') {
                parenteseToInsert = ')';
                parentese = 'open';
            }
            display.textContent += parenteseToInsert;
            break;

        case("button-delete"):
            let deleted;
            // Check if at left of next number there's a blank space and remove it if there is.
            if (display.textContent.lastIndexOf(' ') == (display.textContent.length - 1)) {
                deleted = display.textContent.slice(0, -2);
            } else {
                deleted = display.textContent.slice(0, -1);
            }
            display.textContent = deleted;
            break;

        case("button-clear"):
            display.textContent = '';
            break;

        case("button-result"):
            getOperation(display.textContent);
            break;
    }

    if (charToInsert && display.textContent.length < 32) {
        display.textContent += charToInsert;
        charToInsert = '';
    }
};

function getOperation(string) {
    let cleaned = string.split(' ');

    number1 = Number(cleaned[0]);
    operator = cleaned[1];
    number2 = Number(cleaned[2]);

    let result = operate(number1, number2, operator);
    displayResult(result);
}

function displayResult(result) {
    display.textContent = result;
    showingResult = 1;
}

let calculator = document.getElementById("calculator");

calculator.addEventListener("click", (e) => {
    const operators = '+-/*';


    updateDisplay(e.target.id)

})
