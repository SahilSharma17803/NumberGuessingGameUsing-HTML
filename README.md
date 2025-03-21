# Number Guessing Game (Web Version)

This project implements a number guessing game using HTML, CSS, and JavaScript. The computer generates a random number between 1 and 10, and the player has three attempts to guess the number through a web interface.

## Project Structure

* `index.html`: The HTML file that structures the game's interface.
* `style.css`: The CSS file that styles the game's interface.
* `script.js`: The JavaScript file that contains the game's logic.

## How to Run

1.  **Save the Files:** Save the provided HTML, CSS, and JavaScript code into separate files named `index.html`, `style.css`, and `script.js`, respectively, in the same directory.
2.  **Open in Browser:** Open the `index.html` file in your web browser (e.g., Chrome, Firefox, Safari).
3.  **Play the Game:**
    * Enter your guess in the input field.
    * Click the "Submit Guess" button.
    * Follow the on-screen messages and attempt to guess the correct number within three attempts.

## Code

**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Guess the Number!</h1>
        <p>Pick a number between 1 and 10. You have 3 attempts!</p>
        <input type="number" id="guessInput" placeholder="Enter your guess" min="1" max="10">
        <button id="guessBtn">Submit Guess</button>
        <div id="message"></div>
        <div id="attempts"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
style.css:

CSS

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f0f0f0, #c0c0ff);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background: #ffffff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

input {
    padding: 10px;
    width: 80%;
    border: 2px solid #333;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 1.2em;
}

button {
    padding: 10px 20px;
    font-size: 1.2em;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

#message {
    font-size: 1.5em;
    margin-top: 20px;
    color: #333;
}

#attempts {
    margin-top: 10px;
    color: #888;
}

.correct {
    color: green;
}

.incorrect {
    color: red;
}

.attempt-animation {
    animation: fade 0.5s ease-in-out;
}

@keyframes fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
script.js:

JavaScript

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
Game Logic (JavaScript)
Initialization:
randomNumber: Generates a random integer between 1 and 10.
attempts: Sets the initial number of attempts to 3.
Gets references to HTML elements using document.getElementById.
Updates the attemptsDiv to display the initial number of attempts.
Event Listener:
An event listener is attached to the "Submit Guess" button (guessBtn).
When the button is clicked:
The user's input is parsed as an integer.
Input Validation: Checks if the input is a valid number between 1 and 10. If not, an error message is displayed.
Decrements the attempts count.
Guess Comparison:
If the guess is higher, a "Too high" message is displayed.
If the guess is lower, a "Too low" message is displayed.
If the guess is correct, a "Congratulations" message is displayed, and the "Submit Guess" button is disabled.
Updates the attemptsDiv with the remaining attempts.
Clears the input field.
Game Over: If the player runs out of attempts and the guess is incorrect, a "Game Over" message is displayed, and the "Submit Guess" button is disabled.
CSS animations: The message div will have a fade animation when a message is displayed.
