const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let displayResult = false;
function displayBtn(input){
    if (displayResult) {
        display.value =  "";
        displayResult = false;
    }
    display.value += input;
}
function clearDisplay(){
    display.value = "";
    displayResult = false;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "MATHError";
    }
    displayResult = true;
}
