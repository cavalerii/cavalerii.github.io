let firstNumber=0 
let secondNumber=0

function askForFirstNumber(){
 let text = prompt("Introdu primul numar") 
firstNumber=parseInt(text,10)
}

function askForSecondNumber(){
let text = prompt("Introdu al doilea numar")
secondNumber=parseInt(text,10)
}
function displayResult(){
 let result= firstNumber+ secondNumber
        confirm(`rezultatul este ${result}`)
}