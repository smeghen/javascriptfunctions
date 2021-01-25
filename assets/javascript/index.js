 function addNumbers()
                {
                    
                        var val1 = Math.floor(Math.random() * 12) + 1;
                        var val2 = Math.floor(Math.random() * 12);
                       
                        var ansD = document.getElementById("answer");
                        ansD.value = val1 + val2;
                
                document.getElementById("answer-box").value = "";
	document.getElementById("answer-box").focus();}

 $(".card").mouseenter( function() {
    $(this).css("background", "blue");
        
   }); 
  $(".card").mouseleave( function() {
    $(this).css("background", "white");
        
   });   