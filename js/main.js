const wordArray = ['stars', 'nebula', 'galaxy'];
let selectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
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
    document.getElementById("wrong-guess-count").texContent = maxWrongGuessCount;
}
console.log(Math.floor(Math.random() * wordArray.length))
console.log(wordArray[0])


function displayMessage(message) {
    let messageContainer = document.getElementById("message");
    messageContainer.textContent = message;
}

function guessLetter() {
    let guessInput = document.getElementById("guess");
    let guess = guessInput.value.toLowerCase();

    if (guess.length !== 1) {
        displayMessage("Enter a single letter!");
    }

    if (guessedLetters.includes(guess)) {
        displayMessage("Letter already submitted");
    }

    guessedLetters.push(guess);

    let wordContainer = document.getElementById("word");
    let letters = wordContainer.getElementsByTagName("span");

    let correctGuess = false;

    for (let i = 0; i < selectedWord.length; i++) {

    }
}


const button = document.getElementById("subButton");

button.addEventListener("click", function () {
    console.log("Guess Submitted!");

})

startGame()



/* function getRandomWordFromArray(wordArray) {

    console.log(getRandomWordFromArray(arr))

    const words = ['Stars', 'Nebula', 'Galaxy'];

    const randomWord = getRandomWordFromArray(words);
    console.log(randomWord);



    const randomIndex = Math.floor(Math.random() * wordArray.length);


    return wordArray[randomIndex];

}


    
    
    
    
    
    
    
    
    
    
    
    

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
