const wordArray = ['stars', 'nebula', 'galaxy'];
let selectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
let guess = document.getElementById("guess").textContent
console.log(guess)
let wordContainer = document.getElementById("word");
let input = document.getElementById("text");
console.log(input)
let letterSpan = document.createElement("span");
let selectedArray = []
const maxWrongGuessCount = 4;

function startGame() {
    console.log('startGame')
    guessedLetters = [];
    wrongGuessCount = 0;

    let selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    console.log(selectedWord)

    selectedArray = selectedWord.split("")
    console.log(selectedArray)

    wordContainer.textContent = "";
    console.log(wordContainer.textContent)
    console.log(selectedArray.length)
    for (let i = 0; i < selectedArray.length; i++) {
        console.log(i)
        let newSpan = document.createElement("span");
        newSpan.textContent = "_" 
        newSpan.id = i;
        wordContainer.appendChild(newSpan);
        console.log(newSpan.id)
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
    console.log(guess)
    if (guess.length != 1) {
        displayMessage("Enter a single letter!");
    }

    else if (guessedLetters.includes(guess)) {
        displayMessage("Letter already submitted");



    }

    guessedLetters.push(guess);
    console.log(guessedLetters)

    if (guess) {
        document.querySelector("letterSpan");
    }

    let wordContainer = document.getElementById("word");
    let letters = wordContainer.getElementsByTagName("span");



    let correctGuess = false;

    // for (let i = 0; i < selectedWord.length; i++) {
    //     if (selectedWord[i] === guess) {
    //         letters[i].textContent = guess;

    //     }
    // }


    compareLetter(guess)

}

function compareLetter(currentLetter) {

    console.log(currentLetter)
displayGuess(currentLetter)

    if (selectedWord.includes(currentLetter)) {
        console.log("1")
        console.log(selectedWord)
    }

}

function displayGuess(currentLetter) {
 console.log(letterSpan.innerHTML)

 let letterIndex = 0

for (let i = 0; i < selectedArray.length; i++) {
        console.log(i)
       if(selectedArray[i] === currentLetter) {
        letterIndex = i
        wordContainer[i] = currentLetter
        document.getElementById(i).innerHTML = currentLetter
        console.log(wordContainer)
       } else {
        console.log(selectedArray[i])
       }
}
console.log(wordContainer)

 letterSpan.innerHTML = currentLetter;

}

// if guessed letter contains current letter,

const button = document.getElementById("subButton");

button.addEventListener("click", function () {
    console.log("Guess Submitted!");
    guessLetter()


})

function checkWin() {
    let guessedLetters() {
        //  array method from: https://dev.to/smpnjn/javascript-check-if-an-array-is-a-subset-of-another-array-950
    }
            // if all letters of selectedArray are inside of the guessedLetters array, win condition met
        }
    }
}

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
