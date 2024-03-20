favoris = localStorage.favoris.split("|");
if
ajoutBtn = document.getElementById("btn-favoris");
champ = document.querySelector("input[type = 'text']");
favorisList = document.getElementById("liste-favoris");
favorisVide = document.getElementById("favoris-vide");
start();
function start() {
    if (favoris.lenght <= 1) {
        favorisVide.style.visibility = "show";
    }else{
        favorisVide.style.visibility = "hidden";
        for (let i = 0; i < favoris.length; i++) {

        }
    }
}