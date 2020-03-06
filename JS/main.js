let numberInput;
let addNum = 1; 
let subNum = 1; 




let inputEl = document.getElementById("input"); 
let plusBtn = document.getElementById("plusbutton")
let negBtn = document.getElementById("negbutton")
let newNumber = document.getElementById("display")
  


inputEl.addEventListener('input', inputNumber); 
plusBtn.addEventListener('click', plus); 
negBtn.addEventListener('click',sub); 
 

function inputNumber(evt){
    numberInput = parseInt(evt.target.value); 
}


function plus(evt){
    addNum += numberInput;  
    newNumber.textContent = addNum; 
    }


function sub(evt){
    subNum -= numberInput;  
     newNumber.textContent = subNum; 
    }
   







