import view from './view.js';
// import renderSearchResult from './renderResults.js';
class resultView extends view{
    parentElement = document.querySelector('.results');
    _data;

    renderSearchResult(value){
        return `
          <li class="preview">
                <a class="preview__link preview__link--active" href="#23456">
                  <figure class="preview__fig">
                    <img src="${value.image_url} " alt="Test" />
                  </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${value.title}</h4>
                    <p class="preview__publisher">${value.publisher}</p>
                    <div class="preview__user-generated">
                      <svg>
                        <use href="src/img/icons.svg#icon-user"></use>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>` ;
    }
    generateHTML(){
        return this._data.map(element => this.renderSearchResult(element))
    }
}
export default new resultView();