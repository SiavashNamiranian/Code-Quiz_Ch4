var timeEl = document.querySelector(".timer");
var queEl = document.getElementById("question");
var pEl = document.getElementById("note");
var strtEl = document.getElementById("start");
var scoreEl = document.getElementById("score");
var answEl= document.querySelector("ol");
var fdbkEl = document.querySelector(".outcome");
var resEl = document.getElementById("result");



queEl.textContent = "Coding Quiz Challenge";
queEl.setAttribute("style", "font-size: 200%");
pEl.textContent = "Try to answer the following code-related questions within the time limit. keep in mind that incorrect answers will penalize your score/time by ten seconds!";
answEl.setAttribute("style", "display: none");
pEl.setAttribute("style", "display: flex");
strtEl.setAttribute("style", "display:flex");
resEl.setAttribute("style", "display: none");


var i = 0; 
var secondsleft = 100; 
   
strtEl.addEventListener("click", function startQuiz() {  

    pEl.setAttribute("style", "display: none");
    strtEl.setAttribute("style", "display: none");
    answEl.setAttribute("style", "display: relative");
    queEl.setAttribute("style", "font-size: 150%");




console.log(i); 




    
    var timeInterval = setInterval(function(){
         
        if (secondsleft > 0){secondsleft--};
        
        if(secondsleft === 0) {
    
        clearInterval(timeInterval);   
     
        scoreMessage();
        };

    
        timeEl.textContent = "Time :" + secondsleft
    
       
},1000);



           var questionList = [
            {
               List: "Commonly used data types Do Not include: ",
               answer: ["1. strings","2. boleans","3. alerts","4. numbers"],
               correct: "3. alerts",
            },
        
        
           {
               List: "The condition in an if/ else statement is enclosed within ______.",
               answer: ["1. quotes","2. curlybracket","3. parantheses","4. square brackets"],
               correct: "3. parantheses",
           },

           {
                List: "Arrays in JavaScript can be used to store ____.",
                answer: ["1. numbers and strings","2. other arrays","3.booleans","4. all of the above"],
                correct: "4. all of the above",
            },

           {
               List: "String values must be enclosed within _____ when being assigned to variables.",
               answer: ["1. commas","2. curlybracket","3. quotes","4. parantheses"],
               correct: "3. quotes",
           },
        
           {
               List: "A very useful tool used during development and debugging for printing content to the debugger is: ",
               answer: ["1. Javascript","2. terminal/bash","3. for loops","4. console.log"],
               correct: "4. console.log",
           },
        ];
  
        console.log(i);      


   queEl.textContent = questionList[i].List;
   answEl.children[0].textContent = questionList[i].answer[0];
   answEl.children[1].textContent = questionList[i].answer[1];
   answEl.children[2].textContent = questionList[i].answer[2];
   answEl.children[3].textContent = questionList[i].answer[3];

   answEl.addEventListener("click", function(event){
    console.log(event.target.outerText)    
   if (event.target.outerText === questionList[i].correct){
       fdbkEl.setAttribute("style", "visibility:visible");
       fdbkEl.textContent = "correct!";
       clearInterval(timeInterval)
       while (i < questionList.length-1) {return startQuiz(i++)} 
       ;
    } else {
       secondsleft = secondsleft-10;
       fdbkEl.setAttribute("style", "visibility:visible");
       fdbkEl.textContent = "wrong!"; 
       clearInterval(timeInterval)
       while (i < questionList.length-1) {return startQuiz(i++);}
        
    };

    }
    );



}
);
