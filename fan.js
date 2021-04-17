var readlineSync= require("readline-sync");

var score=0;

const highScores=[
    {
        name:"akash",
        score:3
    },{
        name:"akshita",
        score:2
    }
];


const questions=[
    {
        question:"What is the full name or original name of Captain America",
        answer:"steve rogers"
    },{
        question:"What's Thor's Hammer called?",
        answer:"mjolnir"
    },{
        question:"Do you know what's Spiderman's real name?",
        answer:"peter parker"
    }
]

function welcome(){
    let name= readlineSync.question("May I have your name?");
    readlineSync.question(`Hello ${name} let's see if you know Marvel Cinematic Universe`);

}

welcome();
game();
showScores();


function game(){
    questions.forEach(function(questionData){
        let answer=  readlineSync.question(questionData.question);
        if(answer.toLowerCase()===questionData.answer){
            score++;
            console.log("Correct! Your score is "+score);
        }
        else{
            console.log("Wrong!");
        }
    })
}

function showScores(){
    console.log("You scored "+score);
    console.log("Check out the high scores, if you should be there ping me and I'll update it");
    highScores.forEach(function(scoreData){
        console.log(`${scoreData.name}:${scoreData.score}`);
    })
}