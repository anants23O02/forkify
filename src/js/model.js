import * as values from './values.js';
import resultView from './resultView.js';
import pagination from './pagination.js';
let data;
export const state = {
  search: {
    query: '',
    results: [],
    total_results: values.result_per_page,
    page: 1,
  },
};

export const getSearchResults = async function (query) {
  const url = values.searchURL;
  const key = values.apiKey;
  const res = await fetch(`${url}${query}&key=${key}`);
  data = await res.json();
  state.search.query = query;
  calculatePage(data);
};

function calculatePage(data) {
  let i;
  for (i = 0; i < data.data.recipes.length; i += 10) {
    const singlePageResults = [];
    if (i < data.data.recipes.length - (data.data.recipes.length % 10)) {
      for (let j = i; j < i + 10; j++) {
        singlePageResults.push({
          id: data.data.recipes[j].id,
          title: data.data.recipes[j].title,
          publisher: data.data.recipes[j].publisher,
          image_url: data.data.recipes[j].image_url,
        });
      }
    } else {
      for (let j = i; j < data.data.recipes.length; j++) {
        singlePageResults.push({
          id: data.data.recipes[j].id,
          title: data.data.recipes[j].title,
          publisher: data.data.recipes[j].publisher,
          image_url: data.data.recipes[j].image_url,
        });
      }
    }
    state.search.results.push(singlePageResults);
  }
  console.log('singlePageResults :>> ', state.search.results);
}

export const changePageNext = function () {
  state.search.page += 1;
  resultView.render(state.search.results[state.search.page - 1]);
  console.log(state.search.page - 1, state.search.results.length);
  pagination.renderPagination(state.search.page);
};
export const changePagePrev = function () {
  state.search.page -= 1;
  resultView.render(state.search.results[state.search.page - 1]);
  pagination.renderPagination(state.search.page);
};
