let gamesList = new Games();

let getGame =  async function (tag) {
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/filter?tag='+tag)}`);
        let games = await transform(rep);
        for (let game of games) {
            let tmpGame = new Game(game);
            gamesList.addGame(tmpGame);
        }
        gamesList.getGames().sort(compare)
    }catch (e) {
        console.log(e);
    }
}

let getFavGame = async function (id) {
    try {
        const rep = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.freetogame.com/api/game?id='+id)}`);
        let fav = await transform(rep);
        let tmpGame = new Game(fav);
        gamesList.addGame(tmpGame);
    }catch (e) {
        console.log(e);
    }
}

let print = function (games) {
    for (let game of games) {
        if (isFav(gamesList.getFav(), game.getName())) {
            view.result.innerHTML += gameTemplate(game, "pleine");
        } else {
            view.result.innerHTML += gameTemplate(game, "vide");
        }
        
    }

    for (let btn of view.favBtn) {
        btn.addEventListener('click', favListener);
    }
}


let favListener = function (event) {
    let game = gamesList.getGameById(event.target.id);
    gamesList.addFavGame(game);
    view.listFav.innerHTML += favTemplate(game.getName(), game.getId());
    document.getElementById(game.getId()+'fav').addEventListener('click', favSearch);

}

let favSearch = async function (event) {
    let id  = event.target.id.replace('fav','');
    reset(gamesList, view);
    view.waitGif.style.display = "block";
    await getFavGame(id);
    view.waitGif.style.display = "none";
    
    print(gamesList.getGames());
}




view.searchBtn.addEventListener('click', async() => {
    const tag = format(view.tagInput.value);
    reset(gamesList, view);
    view.waitGif.style.display = "block";
    
    try {
        await getGame(tag);
        view.waitGif.style.display = "none";
        print(gamesList.getGames());
        
    }catch (e) {
        console.log(e);
    }
});

