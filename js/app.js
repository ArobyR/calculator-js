const InputNumbers = document.querySelector(".grid--item__input"); // Get Input Numbers
 
var LblNumbers = document.querySelector(".grid--label"); // Get Label Numbers

// Get Buttons Numbers and reset value for "security"  
const btnNumbOne = document.querySelector(".grid--item__1");
btnNumbOne.addEventListener('click', PressNumbersKeys, false);
const btnNumbTwo = document.querySelector(".grid--item__2");
btnNumbTwo.addEventListener('click', PressNumbersKeys, false);
const btnNumbThree = document.querySelector(".grid--item__3");
btnNumbThree.addEventListener('click', PressNumbersKeys, false);
const btnNumbFour = document.querySelector(".grid--item__4");
btnNumbFour.addEventListener('click', PressNumbersKeys, false);
const btnNumbFive = document.querySelector(".grid--item__5");
btnNumbFive.addEventListener('click', PressNumbersKeys, false);
const btnNumbSix = document.querySelector(".grid--item__6");
btnNumbSix.addEventListener('click', PressNumbersKeys, false);
const btnNumbSeven = document.querySelector(".grid--item__7");
btnNumbSeven.addEventListener('click', PressNumbersKeys, false);
const btnNumbEight = document.querySelector(".grid--item__8");
btnNumbEight.addEventListener('click', PressNumbersKeys, false);
const btnNumbNine = document.querySelector(".grid--item__9");
btnNumbNine.addEventListener('click', PressNumbersKeys, false);
const btnNumbZero = document.querySelector(".grid--item__0");
btnNumbZero.addEventListener('click', PressNumbersKeys, false);

btnNumbOne.value = 1;
btnNumbTwo.value = 2;
btnNumbThree.value = 3;
btnNumbFour.value = 4;
btnNumbFive.value = 5;
btnNumbSix.value = 6;
btnNumbSeven.value = 7;
btnNumbEight.value = 8;
btnNumbNine.value = 9;
btnNumbZero.value = 0;

// Get Buttons Operations
const btnClear = document.querySelector(".grid--item__clear");
btnClear.addEventListener('click', InputNumbersClear, false);
const btnAddiction = document.querySelector(".grid--item__addition");
btnAddiction.addEventListener('click', Operators, false);
const btnSubtraction = document.querySelector(".grid--item__subtraccion");
btnSubtraction.addEventListener('click', Operators, false);
const btnDivision = document.querySelector(".grid--item__division");
btnDivision.addEventListener('click', Operators, false);
const btnMultiplication = document.querySelector(".grid--item__multiplication");
btnMultiplication.addEventListener('click', Operators, false);
const btnEqual = document.querySelector(".grid--item__equal");
btnEqual.addEventListener('click', equalOperation, false);
const btnDecimal = document.querySelector(".grid--item__decimal");
btnDecimal.addEventListener('click', PressNumbersKeys, false);
const btnBackSpace = document.querySelector(".grid--item__backspace");
btnBackSpace.addEventListener('click', deleteNumber, false);

// validation the length of the input numbers
InputNumbers.maxlength = "20";
function MaxLengthInputValidation () {
    if (InputNumbers.value.length == 20) {
        return true;
    }
    else {
        return false;
    }
}

function InputNumbersClear () {
    InputNumbers.value = "";
}

function PressNumbersKeys (evt) {
    let value = this.value;
    if (MaxLengthInputValidation()) return true;
    
    if (value == "1") {
        InputNumbers.value += btnNumbOne.value;
    }
    if (value == "2") {
        InputNumbers.value += btnNumbTwo.value;
    }
    if (value == "3") {
        InputNumbers.value += btnNumbThree.value;
    }
    if (value == "4") {
        InputNumbers.value += btnNumbFour.value;
    }
    if (value == "5") {
        InputNumbers.value += btnNumbFive.value;
    }
    if (value == "6") {
        InputNumbers.value += btnNumbSix.value;
    }
    if (value == "7") {
        InputNumbers.value += btnNumbSeven.value;
    }
    if (value == "8") {
        InputNumbers.value += btnNumbEight.value;
    }
    if (value == "9") {
        InputNumbers.value += btnNumbNine.value;
    }
    if (value == "0") {
        InputNumbers.value += btnNumbZero.value;
    }
    if(value == ".") {
        InputNumbers.value += btnDecimal.value;
    }
    if (value < 0 || value > 9)
        alert("Incorrect Number. You want to hack me crack!");
}

function Operators(evt) {
    if (MaxLengthInputValidation()) return true;
    InputNumbers.value += this.value;
}

function deleteNumber() {
    let valueInput = InputNumbers.value;
    let longitud = InputNumbers.value.length;
    if(longitud == 0) return;
    let backspace = valueInput.substring(0, --longitud)
    InputNumbers.value = backspace;
}

// bug manager and operations
function equalOperation() {
    try {
       let result = eval(InputNumbers.value);
       if (result == Infinity) {
            LblNumbers.innerHTML = `Indefinite operation`;
            LblNumbers.style.color = "red";
            InputNumbers.value = "";
            return;
        }
        if(isNaN(result)) {
            LblNumbers.innerHTML = `Malformed expression`;
            LblNumbers.style.color = "red";
            return;
        }   
        LblNumbers.style.color = "black";
        LblNumbers.innerHTML = `${InputNumbers.value} = ${result}`;
        InputNumbers.value = result;
        return;
    }
    catch(err) {
        LblNumbers.innerHTML = `Malformed expression`;
        LblNumbers.style.color = "red";
       console.log(err.name + err.message);
    }
}