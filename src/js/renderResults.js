export  default function renderSearchResult(value){
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

export  function PaginationHTML(pageNum){
    if(pageNum == 1){
        return `
         <button class="btn--inline pagination__btn--next">
            <span>Page ${pageNum + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }
    else if(pageNum > 1){
        return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${pageNum-1} </span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page ${pageNum+1} </span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }
}