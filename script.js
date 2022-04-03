const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=d";


const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);


const render = (data) => {

    const items = data.drinks.map((item, index) =>
        `
            <div id="${item.idDrink || ""}" class="card">
                <div>${item.strDrink || ""}</div>
                <div> <img src="${item.strDrinkThumb || ""}"> </div>
                <div>
                <p>${item.strIngredient1 || ""} ${item.strIngredient2 || ""} ${item.strIngredient3 || ""} ${item.strIngredient4 || ""} ${item.strIngredient5 || ""} ${item.strIngredient6 || ""} ${item.stringredient7 || ""} ${item.strIngredient8 || ""} ${item.strIngredient9 || ""} ${item.strIngredient10 || ""} ${item.strIngredient11 || ""} ${item.strIngredient12 || ""} ${item.strIngredient13 || ""} ${item.strIngredient14 || ""} ${item.strIngredient15 || ""}</p>
                </div>
            </div>
            `
    );
    q(".contain_cocktails").innerHTML = items.join("");
};



const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response, data);
    render(data)
}

q("#menu").addEventListener("click", () => {
    getData();
    // location.reload();
})