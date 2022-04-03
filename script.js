



const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);

const menuDrinks = "https://thecocktaildb.com/api/json/v1/1/search.php?s=d";
const menuFood = "https://edgemony-backend.herokuapp.com/gallery";
// let URL = "";


const renderDrink = (data) => {

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


const renderFood = (data = []) => {

    const items = data.map((item, index) =>
        `
        <li>
            <figure id="${index}">
            <img src="${item.url}" alt="${item.description}" />
            <figcaption>${item.description}</figcaption>
            </figure>
        </li>
        `
    );
    q(".contain_food").innerHTML = items.join("");
};



const getDrink = async () => {

    const response = await fetch(menuDrinks);
    const data = await response.json();
    console.log(response, data);

    renderDrink(data)
}

const getFood = async () => {

    const response = await fetch(menuFood);
    const data = await response.json();
    console.log(response, data);

    renderFood(data)
    // renderFood(data)
}


let dom = document.addEventListener("DOMContentLoaded", (stampa) => {


    function clickDrinks() {
        getDrink();
    }

    function clickFood() {
        getFood();
    }

});






// if (clickDrinks) {

// } else if (clickFood) {

// }
