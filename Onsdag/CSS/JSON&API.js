//create a varible with a link to the api you want to use
//const instead of var, since this is a variable you do not want to change
const url = "http://nokeynoshade.party/api/queens?limit=59";

// vi griper tak i en tom tag fra hmtl dokumentet, dette setter i en variabel utenfor funksjonen
// denne vil stå helt tom fram til du setter inn api innholdet
const resultsContainer = document.querySelector(".results");

//create a async function.
async function getProducts() {
  //lag en ny variabel, med fetch som verdi
  //fetch: innebygd funksjon i javascript som tar tak i api url for oss. nødt til å skrive inn for å ta den i bruk.
  const response = await fetch(url);
  //vi legger til enda en variabel
  const results = await response.json();
  console.log(results);

  resultsContainer.innerHTML = "";

  // vi setter inn en helt vanlig for loop
  // loop igjennom apien
  for (let i = 0; i < results.length; i++) {
    // for hvert object så logger vi navnet i objecten.
    console.log(results[i].name);
    resultsContainer.innerHTML += 'div class="result">${results[i].name}</div>';
  }
}

getProducts();

