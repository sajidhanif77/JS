'use strict';
let score;
let secretNumber;
//initialize a random number between 1 and 20
function initializeGame() {
  secretNumber = Math.round(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = secretNumber;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);

  //When no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //When Input
  else {
    if (score > 1) {
      //Correct Guess
      if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You won!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
      }
      //Incorrect Guess
      else {
        guess > secretNumber
          ? (document.querySelector('.message').textContent = 'Too High!')
          : (document.querySelector('.message').textContent = 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  initializeGame();
});

initializeGame();
