var entry = document.querySelector('.entry');
var guessButton = document.getElementById('guess');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var lastGuess = document.querySelector('.lastGuess');
var userState = document.querySelector('.userState');
var prevNumber = document.querySelector('.prevNumber');
var randomNumber


function displayZeroState() {
  getRandomNumber();
  clearGuessInput();
  lastGuess.innerText = 'Your last guess was';
  prevNumber.innerText = '?';
  userState.innerText = '';
  resetButton.disabled = true;
}

function getRandomNumber() { randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(randomNumber);
}

function clearGuessInput() {
  entry.value = '';
  clearButton.disabled = true;
}

function evaluateInput() {
  if(entry.value < 1 || entry.value > 100) {
    alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN 1-100');
  } if(isNaN(entry.value) || entry.value === '') {
      alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN 1-100');
    } else {
      evaluateGuess();
    }
  }

function evaluateGuess() {
  var userGuess = parseInt(entry.value, 10);
  lastGuess.innerText = 'Your last guess was';
  if(userGuess > randomNumber) {
    userState.innerText = 'That is too high';
    prevNumber.innerText = userGuess;
    } else if(userGuess < randomNumber) {
      userState.innerText = 'That is too low';
      prevNumber.innerText = userGuess;
    } else {
      userState.innerText = '';
      lastGuess.innerText = '';
      prevNumber.innerText = 'BOOM!'
    }
  }


guessButton.addEventListener('click', function() {
  evaluateInput();
})

clearButton.addEventListener('click', function() {
  clearGuessInput();
})

resetButton.addEventListener('click', function() {
  displayZeroState();
})

entry.addEventListener('input', function() {
  if(entry.value === '') {
    clearButton.disabled = true;
    } else {
    clearButton.disabled = false;
    }
  resetButton.disabled = false;
})
