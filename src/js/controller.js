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
  const searchHandle = async function() {
  const query = search.getQueryfromInput();
  await model.getSearchResults(query); 
}

const init = function() {

  search.handlerSearch(searchHandle);


}
init();