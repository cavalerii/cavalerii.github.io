
function displayAddResult(){
   let firstNumber=parseFloat(document.getElementById("firstNumber").value,10) 
   let secondNumber=parseFloat(document.getElementById("secondNumber").value,10)
 let result= firstNumber + secondNumber

document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
}

function displayMinResult(){
    let firstNumber=parseFloat(document.getElementById("firstNumber").value,10) 
   let secondNumber=parseFloat(document.getElementById("secondNumber").value,10)
    let result=  firstNumber - secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayMultiplyResult(){
    let firstNumber=parseFloat(document.getElementById("firstNumber").value,10) 
    let secondNumber=parseFloat(document.getElementById("secondNumber").value,10)
    let result= firstNumber * secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displayDivideResult(){
    let firstNumber=parseFloat(document.getElementById("firstNumber").value,10) 
    let secondNumber=parseFloat(document.getElementById("secondNumber").value,10)
    let result= firstNumber / secondNumber
   document.getElementById("result").innerHTML= `Rezultatul este ${result}`  
   }

   function displaySqrtForFirstNumber(){
     let firstNumber=parseFloat(document.getElementById("firstNumber").value,10)
     let result= Math.sqrt(firstNumber)
   document.getElementById("result").innerHTML= `Radical din ${firstNumber} este ${result}`
   }