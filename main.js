const goBtn = document.getElementById("go-button")
const inputGuessEle = document.getElementById("input-guess")
const row1Ele = document.getElementById("row-1")
const row2Ele = document.getElementById("row-2")
const row3Ele = document.getElementById("row-3")
const row4Ele = document.getElementById("row-4")
const row5Ele = document.getElementById("row-5")
const row6Ele = document.getElementById("row-6")
let previousVal = ""
let guessTurn = 0

inputGuessEle.addEventListener("input", handleInputChange)
goBtn.addEventListener("click", handleInputGuess)


function submitGuess(rowElement){
    for(let i = 0; i < rowElement.children.length; i++){
        rowElement.children[i].innerText = inputGuessEle.value.charAt(i)
    }
    guessTurn++
}

function isValidInput(str){
    // A valid input is all uppercased letters only 
    for (let i = 0; i < str.length; i++){
        let currentChar = str.charAt(i)
        let asciiCode = currentChar.charCodeAt(0)
        if (asciiCode < 65 || asciiCode > 90){
           return false
        } 
    }
    return true
    
}

function handleInputGuess(){
    if (inputGuessEle.value.length !== 5){
        return
    }
    if (guessTurn === 0){
        submitGuess(row1Ele)
    } else if ( guessTurn === 1) {
        submitGuess(row2Ele)
    }else if ( guessTurn === 2) {
        submitGuess(row3Ele)
    }else if ( guessTurn === 3) {
        submitGuess(row4Ele)
    }else if ( guessTurn === 4) {
        submitGuess(row5Ele)
    }else if ( guessTurn === 5) {
        submitGuess(row6Ele)
    }
    // console.log(inputGuessEle.value)
}

function handleInputChange(event){
    event.target.value = event.target.value.toUpperCase()
    if (!isValidInput(event.target.value)) {
        event.target.value = previousVal
        return
    }
    previousVal = event.target.value
}


// console.log(row1Ele.children)