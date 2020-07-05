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
    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');//here we get an aaray
        return res.map(this._transformCharacter);//with map we looping throm and transfrom it for us into object
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
        
    }
    async getAllHouses() {
        const res = await this.getResource('/houses/');
        return res.map(this._transformCharacter);
    }
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformCharacter(house);

    }
    async getAllBooks() {
        const res = await this.getResource('/books/');
        return res.map(this._transformCharacter);

    }
    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformCharacter(book);
    }

    _transformCharacter(char) {
        return {
            name: char.name ? char.name : 'No Information',
            born: char.born ? char.born : 'No Information',

            gender: char.gender ? char.gender : 'No Information',

            died: char.died ? char.died : 'No Information',

            culture: char.culture ? char.culture : 'No Information'  
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }

    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

}









