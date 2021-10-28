const guessedLetters = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

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
  console.log(guess);
  textInput.value = "";
});
