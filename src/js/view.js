import PaginationHTML from './renderResults.js'

export default class view{
    _data;
    render(data) {
        const results = document.querySelector('.results');
        this._data = data;
        const html = this.generateHTML().join('');
        results.innerHTML = '';
        results.insertAdjacentHTML('afterbegin',html);        
    }
}