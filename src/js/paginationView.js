import view from './view.js';

class paginationView extends view {
    parentElement = document.querySelector('.pagination');
    generateHTML(){
        return [`
        <button class="btn--inline pagination__btn--next">
            <span>Page ${2} </span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `];
    }
}

export default new paginationView();