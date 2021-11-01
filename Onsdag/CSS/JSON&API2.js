const url = "http://www.nokeynoshade.party/api/queens?limit=50";

const resultsContainer = document.querySelector(".results");


async function getProducts(){

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++){
        console.log(results[i].name);
        resultsContainer.innerHTML += 'div class="result">${results[i].name}</div>';
    }
}