'use strict';
let secretNumber = Math.floor(Math.random()*20)+1;
let score =20;

let hughscore =0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click',()=>{
    const guess = Number(document.querySelector('.guess').value)
   
    if(!guess){
       displayMessage(`⛔ Not Number`)

    }else if(guess == secretNumber){
        displayMessage (`✅ Correct!`)
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score>hughscore){
            hughscore =score;
            document.querySelector('.highscore').textContent = hughscore;
        }
        
    }else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? '📉 Too High!':'📉 Too Low!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('🔥 You Lost The Game....');
            document.querySelector('.score').textContent=0;
                    document.querySelector('body').style.backgroundColor = 'red';
        }
    }
})


document.querySelector('.again').addEventListener('click',()=>{
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ="";
    document.querySelector('.score').textContent=20;
    displayMessage('Guess Number....');
    secretNumber = Math.floor(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor = '#222';
})