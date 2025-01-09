
// import renderInitialPagination from './renderResults.js'
// import view from './view.js';
import _,{PaginationHTML} from './renderResults.js';
import * as model from './model.js';

class pagination{   
    paginationElement = document.querySelector('.pagination');
    handlePagination(pageNum){
        if (pageNum > 1 ){
            const prevBtn = document.querySelector('.pagination__btn--prev');
            prevBtn.addEventListener('click',model.changePagePrev);
        }
        const nextBtn = document.querySelector('.pagination__btn--next');
        nextBtn.addEventListener('click',model.changePageNext);

    }

    renderPagination(pageNum){
        const html = PaginationHTML(pageNum);
        this.paginationElement.innerHTML = '';
        this.paginationElement.insertAdjacentHTML('afterbegin',html);
        this.handlePagination(pageNum);
}
}

export default new pagination();