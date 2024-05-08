let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let inputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let successMessageText = "Congratulations! You got it right.";
let failureMessageText = "Please Try Again!";

function restartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    inputElement.value = "";
}
restartButton();

function checkButton() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let enteredSum = parseInt(inputElement.value);
    
    if (enteredSum === firstRandomInteger + secondRandomInteger) {
        gameResultElement.textContent = successMessageText;
        gameResultElement.style.backgroundColor = "#028a0f"; 
    }else {
        gameResultElement.textContent = failureMessageText;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}    
