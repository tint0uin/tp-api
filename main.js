let gamesList = new Games();






view.searchBtn.addEventListener('click', async() => {
    const tag = format(view.tagInput.value);
    gamesList.reset()
    view.result.innerHTML = "";
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/filter?tag='+tag)}`);
        let games = await transform(rep);
        for (let game of games) {
            let tmpGame = new Game(game);
            gamesList.addGame(tmpGame);
        }
        gamesList.getGames().sort(compare)
        for (let game of gamesList.getGames()) {
            console.log(game)
            view.result.innerHTML += gameTemplate(game)
        }
        
    }catch (e) {
        console.log(e);
    }
});