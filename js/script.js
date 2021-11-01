const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//display symbols as placeholders for chosen word's letters
const placeholders = function (word) {
  const placeholderLetters = [];
 for (const letter of word) {
   console.log(letter);
   placeholderLetters.push("●");
 }
 wordInProgress.innerText = placeholderLetters.join("");
};

placeholders(word);

guessLetterButton.addEventListener("click", function(e) {
  e.preventDefault();
  const guess = textInput.value;
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  textInput.value = "";

});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0){
    message.innerText = "Please enter a letter";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z";
  } else {
    return input;
  }
};

const makeGuess = function(guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.input = "You have already guessed that! Try again!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
