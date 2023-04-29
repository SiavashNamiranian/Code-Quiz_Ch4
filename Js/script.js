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
    

    var timeInterval = setInterval(function(){
        if (secondsleft>0) {
            secondsleft--;
            timeEl.textContent = "Time:" + secondsleft
        }
    }, 1000);


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
                List: "arrays in Javascript can be used to store ____.",
                answer: ["1. numbers and strings","2. other arrays","3.boolean","4. all of the above"],
                correct: "4. all of the above",
            },

           {
               List: "String values must be enclosed within _____ when being assigned to variables.",
               answer: ["1. commas","2. curlybracket","3. quotes","4. parantheses"],
               correct: "3. quotes",
           },
        
           {
               List: "a very useful tool used during development and debugging for printing content to the debugger is: ",
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
    

        console.log(event.target.outerText);
    
         console.log(questionList.length);

         if (i === questionList.length) {
            clearInterval(timeInterval);
            timeEl.textContent = "Time :" + secondsleft; 
            pEl.setAttribute("style", "display: flex");
            resEl.setAttribute("style", "display: flex");
            answEl.setAttribute("style", "display: none");
            queEl.setAttribute("style", "font-size: 200%");  
            fdbkEl.setAttribute("style", "visibility:hidden");
            pEl.textContent= "your score is " + secondsleft
            queEl.textContent= "All Done !"          
            } else if (event.target.outerText == questionList[i].correct){
            fdbkEl.setAttribute("style", "visibility:visible");
            fdbkEl.textContent = "correct!"
            return startQuiz(i+=1);
            } else {
            secondsleft = secondsleft-10;
            fdbkEl.setAttribute("style", "visibility:visible");
             fdbkEl.textContent = "wrong!"; 
             return startQuiz(i+=1);   
        }
    
    }
    );
 
}

);

