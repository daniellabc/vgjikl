
//variabel med link til APIen vi vil bruke. 
//Const blir brukt over Var siden vi ikke skal endre på variablen.
//const url = "http://www.nokeynoshade.party/api/queens?limit=50";

/*
//Variabel for å hente en tom <div> tag fra HTML dokumentet.
//Brukes senere i funksjonen
const resultsContainer = document.querySelector(".results");


//Vi lager en funksjon for å hente APIen
//Bruk av innebygd funksjon "async", med nøkkelord "await"
//ved bruk av async forventer funksjonen nøkkelordet await. 
//Dette resulterer i at variablen venter til rett rekkefølge for å lese av korrekt data.
//Vi slipper så å manuelt sette opp en rekkefølge.

async function getProducts(){
    //Vi setter opp en ny variabel som får fetch som verdi.
    //Fetch er en innebygd funksjon som tar tak i API url for oss.

    const response = await fetch(url);
    //Vi legger til en ny variabel med verdien "response.json();"
    const results = await response.json();
    //Vi console.loger "results" for å bekrefte at vi nå har fått tilgang til data fra APIen
    console.log(results);

    //vi sier så at innholdet i resultsContainer skal være tomt til vi setter inn API innholdet.
    resultsContainer.innerHTML = "";

    //Videre må vi sette opp en loop som looper oss igjennom dataen i APIen.
    //Altså variablen "results"
    for (let i = 0; i < results.length; i++){
        //I dette tilfelle skal vi ha tak i navnene i APIen. Derfor henter vi inn name.
        console.log(results[i].name);
        //Hittil vil navnene kun vises i konsollen. For å få det til å havne på nettsiden må vi si ifra om det.
        resultsContainer.innerHTML +=
        `<div class="results">${results[i].name}</div>`;
    }

}

getProducts();
*/