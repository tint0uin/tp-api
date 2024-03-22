function format(tag) {
    return tag.replaceAll(' ', '.');
}

async function transform(reponse) {
    let obj = await reponse.json();
    return JSON.parse(obj.contents);
}

function gameTemplate(game) {
    return `<div class="game">
      <a href=${game.getGameUrl()}>
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
      <hr />
      <div class='creator'>
        <p>developer : ${game.getDeveloper()}</p>
        <p>release date : ${game.getReleaseDate()}</p>
      </div>
      </a>
    </div>`
}

function compare(a, b) {
    return a.getName().localeCompare(b.getName())
}

