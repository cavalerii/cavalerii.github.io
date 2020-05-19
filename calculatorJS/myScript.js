
function displayAddResult(){
   let firstNumber=parseInt(document.getElementById("firstNumber").value,10) 
   let secondNumber=parseInt(document.getElementById("secondNumber").value,10)
 let result= firstNumber + secondNumber

document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
}

function displayMinResult(){
    let firstNumber=parseInt(document.getElementById("firstNumber").value,10) 
   let secondNumber=parseInt(document.getElementById("secondNumber").value,10)
    let result=  firstNumber - secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayMultiplyResult(){
    let firstNumber=parseInt(document.getElementById("firstNumber").value,10) 
    let secondNumber=parseInt(document.getElementById("secondNumber").value,10)
    let result= firstNumber * secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayDivideResult(){
    let firstNumber=parseInt(document.getElementById("firstNumber").value,10) 
    let secondNumber=parseInt(document.getElementById("secondNumber").value,10)
    let result= firstNumber / secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }