class Games {
    _games;

    constructor() {
        this._games = [];
    }

    getGames() {
        return this._games;
    }

    addGame(game) {
        this._games.push(game);
    }

}