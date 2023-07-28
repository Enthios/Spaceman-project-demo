const wordArray = ['stars', 'nebula', 'galaxy'];
let selectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
let guess = document.getElementById("guess").textContent
let wordContainer = document.getElementById("word");
let input = document.getElementById("text");
let letterSpan = document.createElement("span");
let selectedArray = []
const maxWrongGuessCount = 4;

function startGame() {
    guessedLetters = [];
    wrongGuessCount = 0;

    let selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    selectedArray = selectedWord.split("")

    wordContainer.textContent = "";
    for (let i = 0; i < selectedArray.length; i++) {
        console.log(i)
        let newSpan = document.createElement("span");
        newSpan.textContent = "_"
        newSpan.id = i;
        wordContainer.appendChild(newSpan);
    }



    document.getElementById("guess").textContent = ""
    document.getElementById("result").textContent = "";
    document.getElementById("wrong-guess-count").textContent = maxWrongGuessCount;
}
console.log(Math.floor(Math.random() * wordArray.length))
console.log(wordArray[0])


function displayMessage(message) {
    let messageContainer = document.getElementById("message");
    messageContainer.textContent = message;
}


function guessLetter() {
    guess = input.value
    if (guess.length != 1) {
        displayMessage("Enter a single letter!");
    }

    else if (guessedLetters.includes(guess)) {
        displayMessage("Letter already submitted")

    }
    guessedLetters.push(guess);

    if (guess) {
        document.querySelector("letterSpan");
    }

    let wordContainer = document.getElementById("word");
    let letters = wordContainer.getElementsByTagName("span");

    let correctGuess = false;

    compareLetter(guess);
    checkWin()
}

function compareLetter(currentLetter) {
    displayGuess(currentLetter)

    if (selectedWord.includes(currentLetter)) {
    }



}

function displayGuess(currentLetter) {

    let letterIndex = 0
    for (let i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i] === currentLetter) {
            letterIndex = i
            wordContainer[i] = currentLetter
            document.getElementById(i).innerHTML = currentLetter
        } else {
        }
    }

    letterSpan.innerHTML = currentLetter;

}



function checkWin() {

    //  array method from: https://dev.to/smpnjn/javascript-check-if-an-array-is-a-subset-of-another-array-950

    let arr1 = ['a', 'b', 'c'];
    let arr2 = ['b', 'c'];
    let arr3 = ['c', 'd'];

    let checkSubset = (guessedLetters, selectedArray) => {
        return guessedLetters.join("") == selectedArray.join("")


    };

    checkSubset(arr1, arr2); // returns true
    checkSubset(arr1, arr3);
    const test = checkSubset(guessedLetters, selectedArray)
    if (test === true) {
        displayMessage("You've won!");
    } else {
        displayMessage("Keep guessing!");
    }
}


const button = document.getElementById("subButton");

button.addEventListener("click", function () {
    guessLetter()
})

startGame();