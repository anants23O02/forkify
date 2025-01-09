// import PaginationHTML from './renderResults.js'

export default class view{
    _data;
    render(data) {
        this._data = data;
        const html = this.generateHTML().join('');
        this.parentElement.insertAdjacentHTML('afterbegin',html);        
    }
}