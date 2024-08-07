window.addEventListener('load', start);

//Levels
const levels = {
  easy: 7,
  medium: 10,
  hard: 4
};

// To change level
const currentLevel = levels.medium;
 //globals
let time = currentLevel;
let score = 0;

const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'quro',
  'wirp',
  'qooey',
  'wytoe',
  'oeie',
  'oqyerwpq',
  'ahdkf',
  'ajfgd',
  'aldkf',
  'aakdh',
  'qyer',
  'asskd',
  'yyet',
  'rtyuo',
  'oqiwry',
  'gskkad',
  'aldkf',
  'rtyuo',
  'oqyerwpq',
  'yyet',
  'wytoe',
  'gskkad',
  'gskkad',

];

// Initialize Game
function start() {
  // Show number of seconds
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start matching words
function startMatch() {
  if (matchWords(true)) {
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  scoreDisplay.innerHTML= score;

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    // isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (time === 0) {
    message.innerHTML = 'Game Over!!!';
    
    score = -1;
  }
}
