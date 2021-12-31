window.onload = function(){
    window.document.body.onload = startScript();
};

function startScript() {
    let input = document.getElementById("input"),
    number = document.getElementsByClassName("number");
    operator = document.getElementsByClassName("operator");
    result = document.getElementById("result"),
    reset = document.getElementById("reset"),
    deleteLast = document.getElementById("delete"),
    resultDisplayed = false;

    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function(e){
            numbersEvent(e);
        }); 
    }

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(e){
            operatorsEvent(e);
        });
    }

    result.addEventListener("click", function() {
        let inputString = input.textContent;
        let numbers = inputString.split(/\+|\-|\x|\//g);
        let operators = inputString.replace(/[0-9]|\./g, "").split("");

        let divide = operators.indexOf("/");
        while (divide != -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            operators.splice(divide, 1);
            divide = operators.indexOf("/");
        }

        let multiply = operators.indexOf("x");
        while (multiply != -1) {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
            operators.splice(multiply, 1);
            multiply = operators.indexOf("x");
        }

        let subtract = operators.indexOf("-");
        while (subtract != -1) {
            numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
            operators.splice(subtract, 1);
            subtract = operators.indexOf("-");
        }

        let add = operators.indexOf("+");
        while (add != -1) {
            numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
            operators.splice(add, 1);
            add = operators.indexOf("+");
        }

        input.textContent = numbers[0];
        resultDisplayed = true;
    });

    reset.addEventListener("click", function() {
        input.textContent = "";
    })

    deleteLast.addEventListener("click", function() {
        input.textContent = input.textContent.slice(0, -1);
    })
}

function numbersEvent(e) {
    let currentString = input.textContent;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
        input.textContent += e.target.textContent;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/") {
        resultDisplayed = false;
        input.textContent += e.target.textContent;
    } else {
        resultDisplayed = false;
        input.textContent = e.target.textContent;
    }
}

function operatorsEvent(e) {
    let currentString = input.textContent;
    let lastChar = currentString[currentString.length - 1];

    if (currentString.length != 0 && lastChar != "+" && lastChar != "-" && lastChar != "x" && lastChar != "/") {
        input.textContent += e.target.textContent;
    }
}