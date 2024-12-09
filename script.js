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
    const display = document.getElementById("display");

    switch(character) {
        case("button1"):
            display.textContent += '1';
            break;
        case("button2"):
            display.textContent += '2';
            break;
        case("button3"):
            display.textContent += '3';
            break;
        case("button4"):
            display.textContent += '4';
            break;
        case("button5"):
            display.textContent += '5';
            break;
        case("button6"):
            display.textContent += '6';
            break;
        case("button7"):
            display.textContent += '7';
            break;
        case("button8"):
            display.textContent += '8';
            break;
        case("button9"):
            display.textContent += '9';
            break;
        case("button0"):
            display.textContent += '0';
            break;
        case("button-sum"):
            display.textContent += ' + ';
            break;
        case("button-divide"):
            display.textContent += ' / ';
            break;
        case("button-multiply"):
            display.textContent += ' x ';
            break;
        case("button-subtract"):
            display.textContent += ' - ';
            break;
        case("button-decimal"):
            display.textContent += '.';
            break;
        case("button-clear"):
            display.textContent = '';
            break;
    }

};


let calculator = document.getElementById("calculator");

calculator.addEventListener("click", (e) => updateDisplay(e.target.id))
