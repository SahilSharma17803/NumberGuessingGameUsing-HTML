// Initialize game variables
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

// Get HTML elements
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');

// Update attempts
attemptsDiv.textContent = `Attempts left: ${attempts}`;

guessBtn.addEventListener('click', function() {
  let userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    messageDiv.textContent = "Please enter a valid number between 1 and 10.";
    return;
  }

  attempts--;

  if (userGuess > randomNumber) {
    messageDiv.textContent = "Too high! Try a lower number.";
    messageDiv.className = "incorrect attempt-animation";
  } else if (userGuess < randomNumber) {
    messageDiv.textContent = "Too low! Try a higher number.";
    messageDiv.className = "incorrect attempt-animation";
  } else {
    messageDiv.textContent = "Congratulations! You guessed it right!";
    messageDiv.className = "correct attempt-animation";
    guessBtn.disabled = true;
  }

  attemptsDiv.textContent = `Attempts left: ${attempts}`;
  guessInput.value = ''; // Clear input field

  if (attempts === 0 && userGuess !== randomNumber) {
    messageDiv.textContent = `Game Over! The correct number was ${randomNumber}.`;
    guessBtn.disabled = true;
  }
});
