  $(".card").mouseenter( function() {
    $(this).css("background", "blue");
        
   }); 
  $(".card").mouseleave( function() {
    $(this).css("background", "white");
        
   }); 
 
 function addNumbers()
                {
                    
                        var val1 = Math.floor(Math.random() * 12) + 1;
                        var val2 = Math.floor(Math.random() * 12);
                        var valAns = (val1 + val2)
                        displayAdditionQuestion(val1, val2);
                        displayAdditionAnswer(valAns);
                       
                        
    }
    function displayAdditionQuestion(operand1, operand2) {
	document.getElementById("operand1").textContent = operand1;
	document.getElementById("operand2").textContent = operand2;
   
    };

    function displayAdditionAnswer(operand3){
        document.getElementById("operand3").textContent = operand3;
    }
    function calculateCorrectAnswer() {
	// Gets the operands (the numbers) and the operator (plus, minus etc)
	// directly from the DOM
	let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    return [operand1 + operand2];
    }
/*
    function checkAnswer() {
	// Checks the answer against the first element in
	// the returned calculateCorrectAnswer array
	let userAnswer = parseInt(document.getElementById("answer-box").value);
	let calculatedAnswer = calculateCorrectAnswer();
	let isCorrect = userAnswer === calculatedAnswer[0];
	if (isCorrect) {
		alert("Hey! You got it right! :D");
		incrementScore();
	} else {
		alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
		incrementWrongAnswer();
	}
	addNumbers(calculatedAnswer[1]);
}
*/
   
                

  