import {getCocktail, createCard} from "./utils.js";



//effetuo chiamata 
getCocktail('https://thecocktaildb.com/api/json/v1/1/search.php?s=d')
.then((data) => {
    console.log(data.drinks);
    
    data.drinks.map(drink => 
        createCard(
            drink.strDrink, 
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
            drink.strDrinkThumb, 
            drink.strInstructionsIT)
    );
    
});