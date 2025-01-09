

class search {
    searchElement = document.querySelector('.search');
    getQueryfromInput(){
        const query = this.searchElement.querySelector('.search__field').value;
        return query;
    }

    handlerSearch(searchHandle){
        this.searchElement.addEventListener('submit',function(e) {
            e.preventDefault();
            searchHandle();
        });
    }
}

export default new search();