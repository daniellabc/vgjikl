/* declare the function. let's use "logWord" as an example
function logWord () {
    //The code we want the function to run goes here
}
*/


// declare the function
function logWord (theWord) {
    console.log(theWord);
}

// call the function
logWord ("hello"); // Trenger ikke være string aka "hello". Kan være number eller boolean (true eller false)


// declare a fucntion with two arguments

// Oppgave 2
// eks: navn og etternavn. må legge til "", siden det er string
function fullName(firstName, lastName) {
    var sum = firstName + " " + lastName;
    console.log(sum);
}

fullName("Daniella", "Lippert");

// eks: legge sammen to tall
function fullNumber(firstNumber, lastNumber) {
    var sum = firstNumber + lastNumber;
    console.log(sum);
}

fullNumber(3, 4);

// Oppgave 1
function logText (theWord) {
    console.log(typeof(theWord));
}

logText ("«What the func is this nonsense?»")


// Opphave 3
function multiply(firstNumber, secondNumber) {

    // find out the type of the argument values
    var typeofFirst = typeof firstNumber;
    var typeofSecond = typeof secondNumber;

    if (typeofFirst !== "number" || typeofSecond !== "number") {
        return "Please supply number values";
    }

    return firstNumber * secondNumber;

}

var result = multiply(6, 6);
console.log(result);


// Oppgave 4
function addition(num1, num2, num3) {
    // try and convert all the arguments to number values
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    // if any of the arguments cannot be converted to a number they will have the value NaN - Not a Number
    // check for a NaN value using isNaN()
    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
        // as soon as a return statement is encountered the function will exit
        return "Invalid argument types";
    }

    return convertedNum1 + convertedNum2 + convertedNum3;

}

// select the p element
var paragraph = document.querySelector("p");

var sum = addition(6, true, "f");

paragraph.innerHTML = sum;

//or
// paragraph.innerHTML = addition("rr", 5, true);

// Oppgave 5
var iDontKnow = document.querySelector('button[type="submit"]')
function clickMe() {
    document.getElementById("buttonid").style.backgroundColor = "yellow";  
    document.getElementById("buttonid").style.fontSize = "300px"; 
}
