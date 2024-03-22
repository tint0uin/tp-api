class Game {
    _name

    _img

    _description

    _game_url

    _genre

    _platform

    _publisher

    _developer

    _release_date

    constructor( game) {
        this._name = game.title;
        this._img = game.thumbnail;
        this._description = game.short_description;
        this._game_url = game.game_url;
        this._genre = game.genre;
        this._platform = game.platform;
        this._publisher = game.publisher;
        this._developer = game.developer;
        this._release_date = game.release_date;
    }

    getName() {
        return this._name;
    }

    getImg() {
        return this._img;
    }

    getDescription() {
        return this._description;
    }

    getGameUrl() {
        return this._game_url;
    }

    getGenre() {
        return this._genre;
    }

    getPlatform() {
        return this._platform;
    }

    getPublisher() {
        return this._publisher;
    }

    getDeveloper() {
        return this._developer;
    }

    getReleaseDate() {
        return this._release_date;
    }
}