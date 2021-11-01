// Hvis vi skal sjekke flere variabler

//Variabel med nummber verdi på 7
var grade = 7;
//Tom udefinert variabel
var letterGrade;

//Hvis nummer verdien for variabel "grade" = 10, får variablen "lettergrade" en string verdi på "A"
if (grade === 10) {
    letterGrade = "A";
//Hvis nummer verdien for variabel "grade" = 9, får variablen "lettergrade" en string verdi på "A"
} else if (grade === 9) {
    letterGrade = "A";
//Hvis nummer verdien for variabel "grade" = 8, får variablen "lettergrade" en string verdi på "B"
} else if (grade === 8) {
    letterGrade = "B";
    //Hvis nummer verdien for variabel "grade" = 7, får variablen "lettergrade" en string verdi på "C"
} else if (grade === 7) {
    letterGrade = "C";
//Hvis ingen av statementene over er sanne, får variablen "letterGrade" en string verdi på "Unknown"
} else {
    letterGrade = "Unknown";
}

console.log(letterGrade);