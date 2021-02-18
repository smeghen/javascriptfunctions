/*Code found on w3schools to hide elements on click. Modified to hide game start button on click (https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) */

function hideStart() {
  var startbutton = document.getElementById("start");
  var enterbutton = document.getElementById("btn");
  if (startbutton.style.display === "none") {
    startbutton.style.display = "block";
  } else {
    startbutton.style.display = "none";
  }
  if (enterbutton.style.display === "block") {
      enterbutton.style.display = "none";
  }
  else {
      enterbutton.style.display = "block";
  }

}

function addNumbers() {
    let num1 = parseInt(document.getElementById("operand1").value);
	let num2 = parseInt(document.getElementById("operand2").value);
    return [num1 + num2];
    
}

/*Need event listener to start game and display numbers
will need a button for this*/
document.getElementById("start").addEventListener("click", displayNumbers);
function displayNumbers() {
    let firstNum = parseInt(Math.random() * 12);
    let secondNum = parseInt(Math.random() * 12);
    document.getElementById("operand1").textContent = firstNum;
    document.getElementById("operand2").textContent = secondNum;
}


document.getElementById("btn").addEventListener("click", checkAnswer);
function checkAnswer() {
    let guess = parseInt(document.getElementById('guess').value);
    guess = Number(guess);
    let num1 = parseInt(document.getElementById("operand1").textContent);
    num1 = Number(num1);
    let num2 = parseInt(document.getElementById("operand2").textContent);
    num2 = Number(num2);
    let calculatedAnswer = num1 + num2;
    let isCorrect = guess === calculatedAnswer;
   

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        /*increment score*/
    } else {
        alert(`Sorry the correct answer is ${calculatedAnswer}!`);
        /*increment incorrect total*/
    }

    
}

 
function clear() {
    document.getElementById("guess").reset();
    }