const wordArray = ['stars', 'nebula', 'galaxy'];
let selectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
let guess = document.getElementById("guess").textContent
const maxWrongGuessCount = 4;


function startGame() {
console.log('startGame')
    guessedLetters = [];
    wrongGuessCount = 0;

    let selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    console.log(selectedWord)

    let wordContainer = document.getElementById("word");
    wordContainer.textContent = "";
    
    for (let i = 0; i < selectedWord.length; i++) {
        let letterSpan = document.createElement("span");
        letterSpan.textContent = "_"
        wordContainer.appendChild(letterSpan);
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
   
    if (guess.length !== 1) {
        displayMessage("Enter a single letter!");
    }

    else if (guessedLetters.includes(guess)) {
        displayMessage("Letter already submitted");

    
    }

    guessedLetters.push(guess);
    console.log(guessedLetters)

    let wordContainer = document.getElementById("word");
    let letters = wordContainer.getElementsByTagName("span");

    let correctGuess = false;

    for (let i = 0; i < selectedWord.length; i++) {

    }
}

function compareLetter() {

// compare word to letters that have been guessed

let guessString = guessedLetters.toString() 
guessString.toLowerCase

if(selectedWord === guessString) {
console.log("1")
console.log(selectedWord)
}
console.log(guessString)
console.log("2")
}


const button = document.getElementById("subButton");

button.addEventListener("click", function () {
    console.log("Guess Submitted!");
guessLetter()
compareLetter()

})

startGame()



    
    
    
    
    
    
    
    
    
    
    
    

/* let solution = "Nebula"

let userInput = ""

let inputEl = document.querySelector("#input")
let submitEl = document.querySelector("#submit")
let statusEl = document.querySelector("#status")

submitEl.addEventListener("click", handleGuessSubmit);

function handleGuessSubmit() {
    
const currentAnswer = inputEl.value;

let correctNum = compareAnswer(solution, currentAnswer);
inputEl.value = ""
;

guess--;

statusEl.textContent = "You have ${correctNum} letters right!"

function compareAnswer(answer, input) {

let correctCount =0;
if (answer === input) {

} else {
    for (let i = 0; i < answer.length; i++) {
        const answerChar = answer[i];
        const inputChar = input[i];
        console.log(answerChar, inputChar);
        if (answerChat === inputChar) {
            correctCount++;
        }
    }
    return correctCount;
}
}


}





// document.body.style.backgroundImage = 'url("Images/backgroundmain.jpeg")';
document.body.style.backgroundSize = "100%";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "auto";

document.h1.style.color = "white";

*/
