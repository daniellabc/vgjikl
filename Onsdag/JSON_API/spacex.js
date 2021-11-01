const url = "https://api.spacexdata.com/v4/launches"; 

const resultsContainer = document.querySelector(".results");

async function getProducts() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  resultsContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    if(results[i].success !== true) {
        continue;
    } else if (results[i].success === null);
    console.log(results[i].name);
    resultsContainer.innerHTML += `<div class="cardcontainer">
            <div class="card">
                <div class="cardbox">
                    <div class="cardcontent">
                        <h2>${results[i].name}</h2>
                        <img class="cardpicture" src="${results[i].links.patch.small}">
                        <p>${results[i].details}</p>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

getProducts();
