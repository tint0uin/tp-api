let gamesList = new Games();
gamesList.recuperationLocalStorage();
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
            view.result.innerHTML += gameTemplate(game, "pleine", "disabled");
        } else {
            view.result.innerHTML += gameTemplate(game, "vide", "");
        }
        
    }

    for (let btn of view.favBtn) {
        btn.addEventListener('click', favListener);
    }
}

let unfav = function (event) {
    let name = event.target.title;
    

    gamesList.removeFavGame(name);
    event.target.parentElement.remove();
    gamesList.stockageLocalStorage();
}


let favListener = function (event) {
    event.target.firstElementChild.src="../images/etoile-pleine.svg";
    event.target.disabled="true";
    let game = gamesList.getGameById(event.target.id);
    gamesList.addFavGame(game);
    gamesList.stockageLocalStorage();
    view.listFav.innerHTML += favTemplate(game.getName(), game.getId());
    document.getElementById(game.getId()+'fav').addEventListener('click', favSearch);

    for (let fav of view.unFavBtn) {
        fav.addEventListener('click', unfav);
    }
}

let favSearch = async function (event) {
    let id  = event.target.id.replace('fav','');
    reset(gamesList, view);
    view.waitGif.style.display = "block";
    await getFavGame(id);
    view.waitGif.style.display = "none";
    
    print(gamesList.getGames());
}


gamesList.recuperationLocalStorage();
for (fav of gamesList.getFav()) {
    view.listFav.innerHTML += favTemplate(fav.name, fav.id);
    document.getElementById(fav.id+'fav').addEventListener('click', favSearch);
}
for (let fav of view.unFavBtn) {
    fav.addEventListener('click', unfav);
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

