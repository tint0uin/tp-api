class Games {
    _games;

    _favGames;

    constructor() {
        this._games = [];
        this._favGames = [];
    }

    getGames() {
        return this._games;
    }

    addGame(game) {
        this._games.push(game);
    }

    reset() {
        this._games = [];
    }

    addFavGame(game) {
        this._favGames.push({"name" : game.getName(), "id": game.getId()});
        this.stockageLocalStorage();
    }

    removeFavGame(name) {
        this._favGames = this._favGames.filter((game) => game.name !== name);
        this.stockageLocalStorage();
    }

    getFav() {
        return this._favGames;
    }
    stockageLocalStorage() {
        localStorage.setItem('favoris', JSON.stringify(this._favGames));
    }
    recuperationLocalStorage() {
        let game =  JSON.parse(localStorage.getItem('favoris'));
        if (game) {
            this._favGames = game;
        }
    }

    getGameById(id) {
        for (let game of this._games) {
            if (game.getId() == id) {
                return game;
            }
        }
    }

}