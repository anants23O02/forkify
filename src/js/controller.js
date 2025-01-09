// const recipeContainer = document.querySelector('.recipe');


// const timeout = function (s) {
  //   return new Promise(function (_, reject) {
    //     setTimeout(function () {
      //       reject(new Error(`Request took too long! Timeout after ${s} second`));
      //     }, s * 1000);
      //   });
      // };
      // NEW API URL (instead of the one shown in the video)
      // https://forkify-api.jonas.io
      
      ///////////////////////////////////////
     
import search from './search.js';
import * as model from './model.js'
import resultView from './resultView.js'
import pagination from './pagination.js'
import recipe from './recipe.js'



  const searchHandle = async function() {
  const query = search.getQueryfromInput();
  await model.getSearchResults(query); 
  resultView.render(model.state.search.results[model.state.search.page-1]);
  pagination.renderPagination(model.state.search.page);
}


const init = function() {
  
  search.handlerSearch(searchHandle);
  recipe.handleRecipe();
}
init();