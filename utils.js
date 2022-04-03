export {getCocktail, createCard};

const createCard = (strDrink, strIngredient1, strIngredient2,  strIngredient3,  strIngredient4,  strIngredient5,  strIngredient6,  strIngredient7,  strIngredient8,  strIngredient9,  strIngredient10,  strIngredient11,  strIngredient12,  strIngredient13,  strIngredient14,  strIngredient15, strDrinkThumb, strInstructionsIT) => {
    const divCard = document.createElement('div');
    const imgCocktail = document.createElement('img');
    const titleCocktail = document.createElement('h3');
    const ingredientsCocktail = document.createElement('p');
    
    divCard.classList.add('card');
    
    imgCocktail.setAttribute('src', strDrinkThumb);

    titleCocktail.textContent = strDrink;
    ingredientsCocktail.textContent = 'Ingredienti: ' + strIngredient1 + strIngredient2 + strIngredient3 + strIngredient4 + strIngredient5 + strIngredient6 + strIngredient7 + strIngredient8 + strIngredient9 + strIngredient10 + strIngredient11 + strIngredient12 + strIngredient13 + strIngredient14 + strIngredient15;
    

    divCard.append( imgCocktail, titleCocktail,ingredientsCocktail);
    document.querySelector('.section-cocktails').append(divCard);





    
}

//servizio chiamata
const getCocktail = async (URL, item = "") => {
    const res = await fetch(`${URL}${item}`);
    return await res.json();
};