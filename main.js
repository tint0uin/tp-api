let gamesList = new Games();






view.searchBtn.addEventListener('click', async() => {
    const tag = format(view.tagInput.value);
    reset(gamesList, view);
    view.waitGif.style.display = "block";
    
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/filter?tag='+tag)}`);
        let games = await transform(rep);
        for (let game of games) {
            let tmpGame = new Game(game);
            gamesList.addGame(tmpGame);
        }
        gamesList.getGames().sort(compare)
        view.waitGif.style.display = "none";
        for (let game of gamesList.getGames()) {
            if (isKeyExists(gamesList.getFav(), game.getName())) {
                view.result.innerHTML += gameTemplate(game, "pleine");
            } else {
                view.result.innerHTML += gameTemplate(game, "vide");
            }
            
        }
        
    }catch (e) {
        console.log(e);
    }
});

