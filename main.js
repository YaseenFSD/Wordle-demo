let goBtn = document.getElementById("go-button")
let inputGuessEle = document.getElementById("input-guess")



function handleInputGuess(){
    // console.log(inputGuessEle)
    console.log(inputGuessEle.value)
}

function isValidInput(str){
    // A valid input is all uppercased letters only 
    if (str === ""){
        return false
    }
    for (let i = 0; i < str.length; i++){
        let currentChar = str.charAt(i)
        let asciiCode = currentChar.charCodeAt(0)
        if (asciiCode < 65 || asciiCode > 90){
           return false
        } 
    }
    return true
    
}

function handleInputChange(event){
    if (!isValidInput(event.target.value)) {
        
    }
    
    console.log(event)
    event.target.value = event.target.value.toUpperCase()
}

inputGuessEle.addEventListener("input", handleInputChange)


goBtn.addEventListener("click", handleInputGuess)