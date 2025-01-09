import view from './view.js';
import renderSearchResult from './renderResults.js';
class resultView extends view{
    _data;
    generateHTML(){
        return this._data.map(element => renderSearchResult(element))
    }
}
export default new resultView();