let firstNumber=0 
let secondNumber=0

function askForFirstNumber(){
 let text = prompt("Introdu primul numar") 
document.getElementById("firstNumber").innerHTML= `Primul număr: ` + text; 
 firstNumber=parseInt(text,10)
}

function askForSecondNumber(){
let text = prompt("Introdu al doilea numar")
document.getElementById("secondNumber").innerHTML= `Al doile număr: ` + text; 
secondNumber=parseInt(text,10)
}
function displayResult(){
 let result= firstNumber+ secondNumber
document.getElementById("resume").innerHTML= `Rezultatul este ${result}`  
}