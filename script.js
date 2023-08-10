'use strict';



let numbers = Math.trunc(Math.random()*20)+1;

const messageFunction = function(message){
    document.querySelector('.message').textContent = message;
}
const message = document.querySelector('.message')
let score = 20;
let highScore = 0;
const checkButton = document.querySelector('.check')

checkButton.addEventListener('click', function ()
{
    // if Player Wins
    if (numbers === Number(document.querySelector('.guess').value))
    {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        document.querySelector('.number').textContent = numbers;
        messageFunction("You Guessed correct🏁");
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        

    }
    
    else if(numbers !== Number(document.querySelector('.guess').value)){
        
        if (score > 0){
            messageFunction(numbers > Number(document.querySelector('.guess').value) ? "Too Low " : "Too High");

            score--;
            document.querySelector('.score').textContent = score;
        }
        else{

            messageFunction("You Lost😒");
            document.querySelector('.score').textContent = score;

        }  

    }

});

document.querySelector('.again').addEventListener('click', 
function (){
    score = 20;
    document.querySelector('.score').textContent = score;
    messageFunction("Start guessing...");
    document.querySelector('.number').textContent = "?";
    numbers = Math.trunc(Math.random()*20)+1;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ""



});