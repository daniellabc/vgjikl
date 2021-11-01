const url = "http://www.nokeynoshade.party/api/queens?limit=50";

const resultsContainer = document.querySelector(".results");


async function getProducts(){

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++){
        console.log(results[i].name);
        resultsContainer.innerHTML +=
        `<div class="cardcontainer">
            <div class="card">
                <div class="cardbox">
                    <div class="cardcontent">
                        <h2 class="result">${results[i].name}</h2>
                        <img class="cardpicture" src="${results[i].image_url}">
                        <p>${results[i].quote}</p>
                    </div>
                </div>
            </div>
        </div>`;
    };

}

getProducts();