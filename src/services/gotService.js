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
getAllCharacters= async()=> {
        const res = await this.getResource('/characters?page=5&pageSize=10');//here we get an aaray
        return res.map(this._transformCharacter);//with map we looping throm and transfrom it for us into object
    }
    getCharacter= async(id)=> {
        const character = await this.getResource(`/characters/${id}`);
       /*  console.log(character); */
        
        return this._transformCharacter(character);
        
    }
    getAllHouses= async ()=> {
        const res = await this.getResource('/houses/');
        return res.map(this._transformCharacter);
    }
    getHouse= async(id)=> {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformCharacter(house);

    }
    getAllBooks = async ()=> {
        const res = await this.getResource('/books/');
        return res.map(this._transformCharacter);

    }
    getBook = async (id)=> {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformCharacter(book);
    }

    _transformCharacter(char) {
        return {
            name: char.name ? char.name : 'No Information',
            born: char.born ? char.born : 'No Information',

            gender: char.gender ? char.gender : 'No Information',

            died: char.died ? char.died : 'No Information',

            culture: char.culture ? char.culture : 'No Information',
            url: char.url  
        }
    }

    _transformHouse(house) {
        return {
            name: house.name ? house.name : 'No Information',
            region: house.region ? house.region : 'No Information',
            words: house.words ? house.words : 'No Information',
            titles: house.titles ? house.titles : 'No Information',
            overlord: house.overlord ? house.overlord : 'No Information',
            ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : 'No Information'
        }

    }

    _transformBook(book) {
        return {
            name: book.name ? book.name : 'No Information' ,
            numberOfPages: book.numberOfPages ? book.numberOfPages : 'No Information' ,
            publiser: book.publiser ? book.publiser : 'No Information' ,
            released: book.released ? book.released : 'No Information' 
        }
    }

}









