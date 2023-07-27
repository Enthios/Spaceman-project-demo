const wordArray = ['Stars', 'Nebula', 'Galaxy'];
let SelectedWord = "";
let guessedLetters = [];
let wrongGuessCount = 0;
const maxWrongGuessCount = 4;


const button = document.getElementById("subButton");

button.addEventListener("click", function() {
    console.log("Guess Submitted!");
    
})


function getRandomWordFromArray(wordArray) {

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
