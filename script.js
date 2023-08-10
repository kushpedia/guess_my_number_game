'use strict';



let numbers = Math.trunc(Math.random()*20)+1;


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
        document.querySelector('.message').textContent = "You Guessed correct🏁";
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        

    }
    
    else if(numbers !== Number(document.querySelector('.guess').value)){
        
        if (score > 0){
            document.querySelector('.message').textContent = numbers > Number(document.querySelector('.guess').value) ? "Too Low " : "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{

            document.querySelector('.message').textContent = "You Lost😒";
            document.querySelector('.score').textContent = score;

        }  

    }

});

document.querySelector('.again').addEventListener('click', 
function (){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    numbers = Math.trunc(Math.random()*20)+1;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    ocument.querySelector('.guess').value = ""



});