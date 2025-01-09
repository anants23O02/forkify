class recipe {
    recipeContainer = document.querySelector('.recipe');
    recipes = document.querySelector('.results');

    async handleRecipe() {
        const recipe = await document.querySelectorAll('.preview');
        await console.log(recipe);
        recipe.forEach(currentRecipe => {            
            currentRecipe.addEventListener('click',console.log(' :>> ' ))
        });
        // this.recipes.addEventListener('click', () => {
        //     console.log('Recipe clicked!');
        // });
    }

    showRecipe() {
        console.log('called me');
    }
}

export default new recipe();

