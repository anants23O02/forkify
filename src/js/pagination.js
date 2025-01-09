class pagination {
    paginationElement = document.querySelector('.pagination');

    handlePagination(paginationHandle) {
            const nextBtn = this.paginationElement.querySelector('.pagination__btn--next');
            paginationHandle();
    }
}

export default new pagination();