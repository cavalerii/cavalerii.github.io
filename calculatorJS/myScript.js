let firstNumber=0 
let secondNumber=0

function askForFirstNumber(){
 let text = prompt("Introdu primul numar") 
document.getElementById("firstNumber").innerHTML= `Primul număr: ` + text; 
 firstNumber=parseInt(text,10)
}

function askForSecondNumber(){
let text = prompt("Introdu al doilea numar")
document.getElementById("secondNumber").innerHTML= `Al doilea număr: ` + text; 
secondNumber=parseInt(text,10)
}
function displayAddResult(){
 let result= firstNumber + secondNumber
document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
}

function displayMinResult(){
    let result= firstNumber - secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayMultiplyResult(){
    let result= firstNumber * secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayDivideResult(){
    let result= firstNumber / secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }