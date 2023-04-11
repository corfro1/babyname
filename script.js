// List of words to use in the game
const words = [
    "cameron",
    "olivia"
  ];
  
  // Get references to HTML elements
  const scrambledWordElement1 = document.getElementById("scrambled-word-1");
  const guessInputElement1 = document.getElementById("guess-input-1");
  const guessButtonElement1 = document.getElementById("guess-button-1");
  const messageElement1 = document.getElementById("message-1");
  const scrambledWordElement2 = document.getElementById("scrambled-word-2");
  const guessInputElement2 = document.getElementById("guess-input-2");
  const guessButtonElement2 = document.getElementById("guess-button-2");
  const messageElement2 = document.getElementById("message-2");
  
  // Shuffle the letters of a word
  function shuffleWord(word) {
    let shuffledWord = "";
    const wordArray = word.split("");
    while (wordArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * wordArray.length);
      shuffledWord += wordArray[randomIndex];
      wordArray.splice(randomIndex, 1);
    }
    return shuffledWord;
  }
  
  // Start a new game
  function startGame() {
    // Select a random word from the list
    const randomIndex = Math.floor(Math.random() * words.length);
  
    // Shuffle the letters of the word
    const scrambledWord1 = shuffleWord(words[0]);
    const scrambledWord2 = shuffleWord(words[1]);
  
    // Display the scrambled words
    scrambledWordElement1.textContent = scrambledWord1;
    scrambledWordElement2.textContent = scrambledWord2;
  
    // Clear the input fields and message elements
    guessInputElement1.value = "";
    guessInputElement2.value = "";
    messageElement1.textContent = "";
    messageElement2.textContent = "";
  }
  
  // Check the user's guess against the unscrambled word
  function checkGuess1() {
    const guess = guessInputElement1.value.toLowerCase();
    const unscrambledWord = words[0].toLowerCase().trim();
    if (guess === unscrambledWord) {
      messageElement1.textContent = "Correct! Well done.";
    } else {
      messageElement1.textContent = "Incorrect. Please try again.";
    }
  }
  
  // Check the user's guess against the unscrambled word
  function checkGuess2() {
    const guess = guessInputElement2.value.toLowerCase();
    const unscrambledWord = words[1].toLowerCase().trim();
    if (guess === unscrambledWord) {
      messageElement2.textContent = "Correct! Well done.";
    } else {
      messageElement2.textContent = "Incorrect. Please try again.";
    }
  }
  
  // Set up event listeners for the "Submit" buttons
  guessButtonElement1.addEventListener("click", checkGuess1);
  guessButtonElement2.addEventListener("click", checkGuess2);
  
  // Start a new game when the page loads
  startGame();
  