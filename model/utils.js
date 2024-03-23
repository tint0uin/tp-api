function format(tag) {
    return tag.replaceAll(' ', '.');
}

async function transform(reponse) {
    let obj = await reponse.json();
    return JSON.parse(obj.contents);
}

function gameTemplate(game, fav) {
    return `<div class="game">
              <a class="card" href=${game.getGameUrl()}>
              <img class='tokenImage' src="${game.getImg()}" alt="img" />
              <h2>${game.getName()}</h2>
              <p class='description'>${game.getDescription()}</p>
              <div class='gameInfo'>
                <div class="genre">
                  <p>${game.getGenre()}</p>
                </div>
                <div class="platform">
                  <p>${game.getPlatform()}</p>
                </div>
              </div>
                <div class='creator'>
                  <p>developer : ${game.getDeveloper()}</p>
                  <p>release date : ${game.getReleaseDate()}</p>
              </div>
              </a>
              <button class="fav" id="${game.getId()}">
                <img src="images/etoile-${fav}.svg" alt="Etoile vide" width="22" />
              </button>
            </div>`
}

function favTemplate(name, id) {
  return ` <li>
              <span id="${id}fav" title="Cliquer pour relancer la recherche">${name}</span>
              <img src="images/croix.svg" alt="Icone pour supprimer le favori" width="15" title="Cliquer pour supprimer le favori"/>
            </li>
  `
}

function compare(a, b) {
    return a.getName().localeCompare(b.getName())
}

function reset(gamesList, view) {
  gamesList.reset()
  view.result.innerHTML = "";
}

function isFav(list, name) {
  for (game of list) {
    if (game.name == name) {
      return true;
    }
  }
  return false;
}

//gamesList.addFavGame(gamesList.getGames()[0]);

//console.log(gamesList.getFav());


//localStorage.setItem("test", JSON.stringify(gamesList.getFav()));


