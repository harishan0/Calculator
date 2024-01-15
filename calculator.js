const display = document.getElementById("display");
let input = "";
let prevOperation = false;
let prevNumber = ""

function appendToDisplay(char){
    if(display.value == "Error" || display.value == "0" || prevOperation){
        display.value = char;
        prevNumber += char;
        prevOperation = false;
    }
    else{
        display.value += char;
        prevNumber +=char;
    }
}
function operation(op){
    input+=prevNumber
    input+=op;
    prevOperation = true;
    prevNumber = "";
}
function changeSign(){
    if(isNaN(Number(display.value))){
        display.value = display.value;
    }
    else{
        display.value = Number(display.value)*-1;
        prevNumber *= -1;
    }
}
function toPercentage(){
    if(isNaN(Number(input))){
        display.value = display.value;
    }
    else{
        display.value = Number(display.value)/100;
        input /= 100;
    }

}
function clearDisplay(){
    display.value = "0";
    input = "";
    prevNumber = "";
}
function calculate(){
    try{
        input += prevNumber;
        input = eval(input);
        display.value = input;
        console.log(input);
        console.log(eval(input));
        prevNumber = "";
    }catch(error){
        console.log(error);
        display.value = "Error"; 
    }
}