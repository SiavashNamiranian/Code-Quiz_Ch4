var timeEl = document.querySelector(".timer")
var queEl = document.getElementById("question")
var pEl = document.getElementById("note")
var strtEl = document.getElementById("start")
var scoreEl = document.getElementById("score")
//var butEl = document.querySelectorAll(".button")
var answEl= document.querySelector("ol")
var fdbkEl = document.querySelector(".outcome")














queEl.textContent = "Coding Quiz Challenge";
queEl.setAttribute("style", "font-size: 200%")
pEl.textContent = "Try to answer the following code-related questions within the time limit. keep in mind that incorrect answers will penalize your score/time by ten seconds!";
answEl.setAttribute("style", "display: none");
pEl.setAttribute("style", "display: flex")
strtEl.setAttribute("style", "display:flex")















   
strtEl.addEventListener("click", function() {

//event.preventDefault();


var secondsleft = 100;

function setTime() {

var timeInterval = setInterval(function(){
    secondsleft--;

    timeEl.textContent = "Time :" + secondsleft

    if(secondsleft === 0) {

        clearInterval(timeInterval);

       // scoreMessage();
    }

},1000);

}

setTime();


var questionList = [
    {
       List: "Commonly used data types Do Not include: ",
       answer: ["1. strings","2. boleans","3. alerts","4. numbers"],
       correct: "2. alerts",
   },


   {
       List: "The condition in an if/ else statement is enclosed within ______.",
       answer: ["1. quotes","2. curlybracket","3. parantheses","4. square brackets"],
       correct: "3. parantheses",
   },


   {
       List: "The condition in an if/ else statement is enclosed within ______.",
       answer: ["1. quotes","2. curlybracket","3. parantheses","4. square brackets"],
       correct: "3. parantheses",
   },


   {
       List: "The condition in an if/ else statement is enclosed within ______.",
       answer: ["1. quotes","2. curlybracket","3. parantheses","4. square brackets"],
       correct: "3. parantheses",
   },

   {
       List: "The condition in an if/ else statement is enclosed within ______.",
       answer: ["1. quotes","2. curlybracket","3. parantheses","4. square brackets"],
       correct: "3. parantheses",
   },
];

pEl.setAttribute("style", "display: none")
strtEl.setAttribute("style", "display: none")
answEl.setAttribute("style", "display: relative");
queEl.setAttribute("style", "font-size: 150%");

var questionIndex = 0; 

    queEl.textContent = questionList[questionIndex].List
    answEl.children[0].textContent = questionList[questionIndex].answer[0];
    answEl.children[1].textContent = questionList[questionIndex].answer[1];
    answEl.children[2].textContent = questionList[questionIndex].answer[2];
    answEl.children[3].textContent = questionList[questionIndex].answer[3];

//event.stopPropagation();
answEl.children[0].addEventListener("click", function(event){
    console.log(event);
    if (event.target.outerText === questionList[questionIndex].correct)    
    questionIndex+=questionIndex++
     }),
answEl.children[1].addEventListener("click", function(event){
    console.log(event);
    if (event.target.outerText === questionList[questionIndex].correct)    
    questionIndex+=questionIndex++
    }),
answEl.children[2].addEventListener("click", function(event){
    console.log(event);
    if (event.target.outerText === questionList[questionIndex].correct)    
    questionIndex+=questionIndex++
    }),
answEl.children[3].addEventListener("click", function(event){
    console.log(event);
    if (event.target.outerText === questionList[questionIndex].correct)    
    questionIndex+=questionIndex++
    }),
}
);