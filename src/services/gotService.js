export default class GotService {
    constructor () {
        this._apiBase = 'https://www.anapioficeandfire.com/api';//niznee podserkivanie, stobi, ukazatj deugim razrabotsikam, sto eto statitsnie dannie
    }



    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);//fetchim nas url
    
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status : ${res.status}`);
        }
    
        return await res.json();    
    
    };
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
    getAllHouses() {
        return this.getResource('/houses/');
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }
    getAllBooks() {
        return this.getResource('/books/');
    }
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }

}









