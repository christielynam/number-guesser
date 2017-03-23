// Global variables

var entry = document.querySelector('.entry');
var guessButton = document.getElementById('guess');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var submitButton = document.getElementById('submit');
var lastGuess = document.querySelector('.lastGuess');
var userState = document.querySelector('.userState');
var prevNumber = document.querySelector('.prevNumber');
var min = document.getElementById('min');
var max = document.getElementById('max');
var randomNumber
var randomRangeNumber

// Function runs when game is loaded or reset

function displayZeroState() {
  getRandomNumber();
  clearGuessInput();
  lastGuess.innerText = 'Your last guess was';
  prevNumber.innerText = '?';
  userState.innerText = '';
  resetButton.disabled = true;
}

// Function runs to generate a random number

function getRandomNumber() { randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(randomNumber);
}

// Function runs to clear the players entry from the input field

function clearGuessInput() {
  entry.value = '';
  clearButton.disabled = true;
}

// Function runs when the player submits a guess to evaluate the range and data type of entry

function evaluateInput() {
  if(entry.value < 1 || entry.value > 100) {
    alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN 1-100');
  } else if(isNaN(entry.value) || entry.value === '') {
      alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE BETWEEN 1-100');
    } else {
      evaluateGuess();
    }
  }

  // Function runs after input validation to compare the users entry and random number

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

  // Function runs to generate random number when player selects min and max range

  function getRandomRangeNumber(min, max) {
    randomRangeNumber = Math.floor(Math.random() * (max - min) + min);
  }

//   function evaluateRangeNumber(min, max) {
//     if(entry.value < min || entry.value > max) {
//       alert('INVALID ENTRY... PLEASE ENTER A NUMERIC VALUE WITHIN THE SELECTED RANGE');
//       else if(isNaN(entry.value) || entry.value === '') {
//           alert('INVALID ENTRY... PLEASE ENTER A NUMERIC WITHIN THE SELECTED RANGE');
//         } else {
//           evaluateRangeGuess();
//     }
//   }
// }
//
// function evaluateRangeGuess() {
//
// }

// Event listener detects when the guess button is clicked and evaluates the input

guessButton.addEventListener('click', function() {
  evaluateInput();
})

// Event listener detects when the clear button is clicked and clears the input field

clearButton.addEventListener('click', function() {
  clearGuessInput();
})

// Event listener detects when the reset button is clicked and returns game to zero state

resetButton.addEventListener('click', function() {
  displayZeroState();
})

// Event listener detects when the submit button is clicked and generates a new random number within the min/max range

submitButton.addEventListener('click', function() {
  getRandomRangeNumber(min, max);
})

// Event listener detects when the player enters data into the input field and enables/disables buttons

entry.addEventListener('input', function() {
  if(entry.value === '') {
    clearButton.disabled = true;
    } else {
    clearButton.disabled = false;
    }
  resetButton.disabled = false;
})
