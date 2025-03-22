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
let currentWord = selectRandomWord().toUpperCase()
let letterCounts = getLetterCountsObj(currentWord)
let isGameOver = false


function getLetterCountsObj(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i)
        if (currentChar in obj) {
            obj[currentChar] = obj[currentChar] + 1
        } else {
            obj[currentChar] = 1
        }
    }
    return obj
}

inputGuessEle.addEventListener("input", handleInputChange)
goBtn.addEventListener("click", handleInputGuess)


function submitGuess(rowElement) {
    let letterCountsCopy = { ...letterCounts }
    for (let i = 0; i < rowElement.children.length; i++) {

        let currentGuessChar = inputGuessEle.value.charAt(i)
        rowElement.children[i].innerText = currentGuessChar
        if (currentGuessChar === currentWord.charAt(i)) {
            rowElement.children[i].style.backgroundColor = "green"
        } else if (currentWord.includes(currentGuessChar)) {
            if (letterCountsCopy[currentGuessChar] > 0) {
                rowElement.children[i].style.backgroundColor = "yellow"
                letterCountsCopy[currentGuessChar] = letterCountsCopy[currentGuessChar] - 1
            }

        }
    }
    checkUserWin()
    guessTurn++
}

function checkUserWin(){
    if (currentWord === inputGuessEle.value) {
        console.log("called checkUserWin")
        alert("You won!")
        isGameOver = true
    }
}

function isValidGuess(str) {
    if (!wordsList.includes(str.toLowerCase())) {
        return false
    }
    return true
}

function isValidInput(str) {
    // A valid input is all uppercased letters only 
    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i)
        let asciiCode = currentChar.charCodeAt(0)
        if (asciiCode < 65 || asciiCode > 90) {
            return false
        }
    }
    return true

}

function handleInputGuess() {
    if (inputGuessEle.value.length !== 5) {
        return
    }
    if (isGameOver === true){
        return
    }

    if (!isValidGuess(inputGuessEle.value)) {
        alert("Word does not exist")
        return
    }


    if (guessTurn === 0) {
        submitGuess(row1Ele)
    } else if (guessTurn === 1) {
        submitGuess(row2Ele)
    } else if (guessTurn === 2) {
        submitGuess(row3Ele)
    } else if (guessTurn === 3) {
        submitGuess(row4Ele)
    } else if (guessTurn === 4) {
        submitGuess(row5Ele)
    } else if (guessTurn === 5) {
        submitGuess(row6Ele)
    }
}

function handleInputChange(event) {
    event.target.value = event.target.value.toUpperCase()
    if (!isValidInput(event.target.value)) {
        event.target.value = previousVal
        return
    }
    previousVal = event.target.value
}

function selectRandomWord() {
    const randomNumber = Math.floor(Math.random() * (wordsList.length - 1))
    return wordsList[randomNumber]
}

// console.log(currentWord)