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


   
strtEl.addEventListener("click", function() {  

var i = 0; 

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
       List: "Array in Javascript can be used to store _____.",
       answer: ["1. numbers and strings","2. other arrays ","3. boleans","4. all of the above"],
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

pEl.setAttribute("style", "display: none")
strtEl.setAttribute("style", "display: none")
answEl.setAttribute("style", "display: relative");
queEl.setAttribute("style", "font-size: 150%");



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


    function quiz() {

    queEl.textContent = questionList[i].List;
    answEl.children[0].textContent = questionList[i].answer[0];
    answEl.children[1].textContent = questionList[i].answer[1];
    answEl.children[2].textContent = questionList[i].answer[2];
    answEl.children[3].textContent = questionList[i].answer[3];

    answEl.children[0].addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.outerText === questionList[i].correct);
    if (event.target.outerText === questionList[i].correct){
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "correct!";
        return i++;  
     } else {
        secondsleft = secondsleft-10;
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "wrong!";
        return i++;
    }})
    answEl.children[1].addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.outerText === questionList[i].correct);
    if (event.target.outerText === questionList[i].correct){
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "correct!";
        return i++; 
    } else {
        secondsleft = secondsleft-10;
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "wrong!";
        return i++; 
    }})
    answEl.children[2].addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.outerText === questionList[i].correct);
    if (event.target.outerText === questionList[i].correct){
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "correct!";
        return i++;
    } else {
        secondsleft = secondsleft-10;
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "wrong!";
        return i++; 
    }})
    answEl.children[3].addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.outerText === questionList[i].correct);
    if (event.target.outerText === questionList[i].correct){    
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "correct!";
        return i++; 
    } else {
        secondsleft = secondsleft-10;
        fdbkEl.setAttribute("style", "visibility:visible");
        fdbkEl.textContent = "wrong!";
        return i++; 
    }})
    
    
    setTime()
}

quiz()

});