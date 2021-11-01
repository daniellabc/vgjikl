// Oppgave 1
var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colours);

//Oppgave 3
var winningNumbers = [1, 76, 2, 78, 16, 7];
var thirdItem = winningNumbers[2]; /* Andre nummer fordi grunnen til at det da er 2 istedenfor 3 som står i bracketen, er at arrays starter på 0
så hvis du skulle henta det første tallet, ville det blitt: var firstItem = winningNumbers[0];*/
console.log(thirdItem);

// Oppgave 4
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
var newIngredient = "pumpkin";

vegetables.push(newIngredient);
// Kunne skrevet "pumpkin" i stedet for "newIngredient", men ryddigere å bruke sistenevnte
console.log(vegetables);

// Oppgave 5
var randomThings = ["pumpkin", false, 23, true, "tomato"];



randomThings.forEach()

// Oppgave 6
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; <moreThings.length; i**) {
    var typeOfItem = typeof moreThings [i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

// Oppgave 7
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var sorted = ingredients.sort();

for (var i = =; i < sorted.length; i++){
    console.log(sorted[i]);
}

// Oppgave 8
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}