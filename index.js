// Welcome Message
var readlinesync= require('readline-sync');
var score=0;
var goodName= readlinesync.question("What is your Name");
console.log("Welcome " + goodName + " To-Do You Know Rohan,Lets Begin"); 

// functions
function play(question, answer){
  var userAnswer= readlinesync.question(question)
  var res = userAnswer.toUpperCase();
  if(res === answer){
    console.log("Bravo,Correct Answer");
    score= score+1;
  }
  else{
    console.log("Incorrect Answer");
    
  }
  console.log("Your score is: ", score);
  console.log("------------------")
}
var questions=[{
  question: "Which is my favourite sports? (a) Cricket (b) Football ",
  answer: "CRICKET" 
},{
  question: " Who is my favourite Sportsperson? (a) Virat Kohli (b) MS Dhoni",
  answer: "MS DHONI" 


},{
   question: "Which is my favourite Travelling Destination? (a) Himachal Pradesh (b) Uttrakhand ",
   answer: "HIMACHAL PRADESH"
},{
  question: "What is my favorite dish? (a) Chicken (b) Paneer",
  answer: "CHICKEN"


},{
  question:"What is my best genre of Movies? (a) Science fiction (b) Crime Mysteries",
  answer: "CRIME MYSTERIES"
}];
//  loop
var i;
for(i=0; i<questions.length; i++){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}




  




