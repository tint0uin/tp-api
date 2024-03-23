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
    }

    removeFavGame(name) {
        this._favGames = this._favGames.filter((game) => game.name !== name);
    }

    getFav() {
        return this._favGames;
    }
    stockageLocalStorage() {
        localStorage.setItem('favoris', JSON.stringify(this._favGames));
    }
    recuperationLocalStorage() {
        this._favGames = JSON.parse(localStorage.getItem('favoris'));
    }

    getGameById(id) {
        for (let game of this._games) {
            if (game.getId() == id) {
                return game;
            }
        }
    }

}