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

    constructor(name, img, description, game_url, genre, platform, publisher, developer, release_date ) {
        this._name = name;
        this._img = img;
        this._description = description;
        this._game_url = game_url;
        this._genre = genre;
        this._platform = platform;
        this._publisher = publisher;
        this._developer = developer;
        this._release_date = release_date;
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