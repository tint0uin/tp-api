favoris = localStorage.favoris.split("|");
if (localStorage.favoris == "") {
    favoris = [];
}
favorisBtn = document.getElementById("btn-favoris");
champ = document.querySelector("input[type = 'text']");
favorisList = document.getElementById("liste-favoris");
favorisVide = document.getElementById("favoris-vide");
refresh();
function refresh() {
    favoris = localStorage.favoris.split("|");
    favorisList.innerHTML = "";
    if (favoris.length == 0) {
        favorisVide.style.visibility = "show";
    }else{
        favorisVide.style.visibility = "hidden";
        for (let i = 0; i < favoris.length; i++) {
            favorisList.innerHTML +="<li> \n<span title='Cliquer pour relancer la recherche'>"+favoris[i]+"</span>\n<img\nsrc='images/croix.svg'\nalt='Icone pour supprimer le favori'\nwidth='15'\ntitle='Cliquer pour supprimer le favori'/>\n</li>";
        }
    }
}
champ.addEventListener("change", () => {
    if (champ.value == "") {
        favorisBtn.disabled = true;
    }else{
        favorisBtn.disabled = false;
    }
    i = 0;
    while (i <favorisList.length || champ.value != favoris[i]) {
        if (favoris[i+1]!= null && favoris[i+1]== champ.value) {
            favorisBtn.innerHTML ="<img src='images/etoile-pleine.svg' alt='Etoile pleine' width='22' ></img>"
        }else{
            favorisBtn.innerHTML ="<img src='images/etoile-vide.svg' alt='Etoile vide' width='22' ></img>"
        }
        i++;
    }
});