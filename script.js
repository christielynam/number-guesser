var entry = document.querySelector('.entry');
var guessButton = document.getElementById('guess');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var submitButton = document.getElementById('submit');
var lastGuess = document.querySelector('.lastGuess');
var userState = document.querySelector('.userState');
var prevNumber = document.querySelector('.prevNumber');
var min = 1;
var max = 100;
var randomNumber
var randomRangeNumber

function displayZeroState() {
  clearGuessInput();
  lastGuess.innerText = 'Your last guess was';
  prevNumber.innerText = '?';
  userState.innerText = '';
  getRandomNumber();
  resetButton.disabled = true;
}

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}

function clearGuessInput() {
  entry.value = '';
  clearButton.disabled = true;
}

function evaluateInput() {
  if(entry.value < min || entry.value > max) {
    alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN ' + min + ' - ' + max);
  } else if(isNaN(entry.value) || entry.value === '') {
      alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN ' + min + ' - ' + max);
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

submitButton.addEventListener('click', function() {
  min = parseInt(document.querySelector('#min').value);
  max = parseInt(document.querySelector('#max').value);
  getRandomNumber();
})

entry.addEventListener('input', function() {
  if(entry.value === '') {
    clearButton.disabled = true;
    } else {
    clearButton.disabled = false;
    }
  resetButton.disabled = false;
})

document.addEventListener('input', function() {
  if(min.value !== '' && max.value !== '') {
    submitButton.disabled = false;
  }
})
