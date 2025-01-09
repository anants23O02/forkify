class recipe {
    recipeContainer = document.querySelector('.recipe');
    recipes = document.querySelector('.preview');

    handleRecipe() {
        this.recipes.addEventListener('click', () => {
            console.log('Recipe clicked!');
        });
    }

    showRecipe() {
        console.log('called me');
    }
}

export default new recipe();

// this.recipes.forEach(currentRecipe => {            
//     currentRecipe.addEventListener('click',console.log(' :>> ' ))
// });