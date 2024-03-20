let gamesList = new Games();






view.searchBtn.addEventListener('click', async() => {
    const tag = format(view.tagInput.value);
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/filter?tag='+tag)}`);
        let games = await transform(rep);
        for (let game of games) {
            let tmpGame = new Game(game.title, game.thumbnail, game.short_description, game.game_url, game.genre, game.platform, game.publisher, game.developer, game.release_date);
            gamesList.addGame(tmpGame);
        }
        console.log(gamesList);
    }catch (e) {
        console.log(e);
    }
});