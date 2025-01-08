// import view from './view.js'

class resultView{
    _data;
    simple(){
        console.log('checking');
    }
    render(data) {
        const results = document.querySelector('.results');
        this._data = data;
        const html = this.generateHTML().join('');
        results.insertAdjacentHTML('afterbegin',html);
        
    }
    generateHTML(){
        return this._data.map(element => renderSearchResult(element))
    }
}
function renderSearchResult(value){
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

export default new resultView();