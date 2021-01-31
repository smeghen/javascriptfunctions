let num1 = parseInt(Math.random() * 12);
let num2 = parseInt(Math.random() * 12);

let guess = document.getElementById('guess').value;
guess = Number(guess);


function addNumbers(num1, num2) {
    var total = num1 + num2;
    return total;
}

/*Need event listener to start game and display numbers
will need a button for this*/
function displayNumbers(firstNum, secondNum) {
    document.getElementById("operand1").textContent = firstNum;
    document.getElementById("operand2").textContent = secondNum;
}

/*Need event listener to take guess and check
Button to submit answer*/
function displayAnswer() {
    addNumbers(firstNum, secondNum);
    document.getElementById("operand3").textContent = Ans;
}

function checkAnswer() {
    let guess = document.getElementById('guess').value;
    guess = Number(guess);
    let calculatedAnswer = addNumbers();
    if (guess === calculatedAnswer) {
        alert("Hey! You got it right! :D");
        /*increment score*/
    } else {
        alert(`Sorry the correct answer is ${calculatedAnswer}!`);
        /*increment incorrect total*/
    }
}


