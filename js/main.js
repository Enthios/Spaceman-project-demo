const wordArray = ['stars', 'nebula', 'galaxy'];
let selectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
let guess = document.getElementById("guess").textContent
// console.log(guess)
let wordContainer = document.getElementById("word");
let input = document.getElementById("text");
// console.log(input)
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
    // console.log(wordContainer.textContent)
    // console.log(selectedArray.length)
    for (let i = 0; i < selectedArray.length; i++) {
        console.log(i)
        let newSpan = document.createElement("span");
        newSpan.textContent = "_"
        newSpan.id = i;
        wordContainer.appendChild(newSpan);
        // console.log(newSpan.id)
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


    compareLetter(guess);
    checkWin()
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
        if (selectedArray[i] === currentLetter) {
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



function checkWin() {

    //  array method from: https://dev.to/smpnjn/javascript-check-if-an-array-is-a-subset-of-another-array-950

    let arr1 = ['a', 'b', 'c'];
    let arr2 = ['b', 'c'];
    let arr3 = ['c', 'd'];

    let checkSubset = (guessedLetters, selectedArray) => {
        // console.log(checkSubset)
        // return selectedArray.every((el) => {
        //     return guessedLetters.includes(el);
        // });
        console.log(guessedLetters.join(""))
        console.log(selectedWord)
        return guessedLetters.join("") == selectedArray.join("")
        
        
    };

    checkSubset(arr1, arr2); // returns true
    checkSubset(arr1, arr3);
    const test = checkSubset (guessedLetters, selectedArray) 
    console.log(test)
    if (test === true) {
        displayMessage("You've won!");
    } else {
        displayMessage("Keep guessing!");
    }
}

// Call the checkWin function to execute the code
// checkWin();


const button = document.getElementById("subButton");

button.addEventListener("click", function () {
    console.log("Guess Submitted!");
    guessLetter()
})

// checkWin();

startGame();