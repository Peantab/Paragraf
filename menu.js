var defaultHeader="Bramka Baldura"

function menu() {
    document.getElementById('header').innerHTML = defaultHeader;
    document.getElementById('scene').innerHTML = "<a class=\"menu\" onClick=\"beforeBegin()\">Nowa przygoda</a> <div id=\"pshr\">&nbsp;</div> <img class=\"krecha\" src=\"przerywnik.png\" /> <a class=\"menu\" onClick=\"loadGame()\">Wczytaj</a>";
    document.getElementById('options').innerHTML = "<p id=\"credits\">By Agnieszka Warchoł and Paweł Taborowski</p>"
}

function  beforeBegin() {
    if (confirm('Kontynuacja usunie Twój poprzedni zapis.')) {
        createCharacter();
    } else {
    }
}

function loadGame() {
    if (localStorage.getItem("BBLoc")==null){
        alert("Brak zapisanego stanu gry.");
    } else {
        window[localStorage.getItem("BBLoc")]();
    }
}

window.onload(menu());