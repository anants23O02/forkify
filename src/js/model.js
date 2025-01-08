import * as values from './values.js'; 
import  resultView from './resultView.js' 


export const state = {
    search: {
        query: '',
        results: []
    }
}

export const getSearchResults = async function(query){
    const url = values.searchURL;
    const key = values.apiKey;
    const res = await fetch(`${url}${query}&key=${key}`);
    // console.log('response :>> ', res.json());
    const data = await res.json();
    // console.log('data :>> ', data);
    // console.log('res :>> ', data.data);
    state.search.query = query;
    state.search.results = data.data.recipes.map(res => {
        return {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image_url: res.image_url,
    }
    });
    
    resultView.render(state.search.results); 

    console.log('results :>> ', state.search.results);
    // pizza&key=<insert your key>
}