let num1 = parseInt(Math.random()*10);
let num2 = parseInt(Math.random()*10);


function addNumbers(num1, num2){
var total = num1 + num2;
return total;
}

function displayNumbers(firstNum, secondNum){
    document.getElementById("operand1").textContent = firstNum;
	document.getElementById("operand2").textContent = secondNum;
}

function displayAnswer(Ans){
    addNumbers(firstNum, secondNum);
    document.getElementById("operand3").textContent = Ans;
}