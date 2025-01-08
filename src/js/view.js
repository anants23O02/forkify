export default class view{
    _data;
    render(data) {
        this._data = data;
        const html = this.generateHTML()
        console.log('html :>> ', html);
    }
}