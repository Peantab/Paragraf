function createCharacter(){ //BBLoc createCharacter BBGen female/male
    localStorage.setItem("BBLoc","createCharacter");
    document.getElementById('header').innerHTML = "Tworzenie postaci";
    document.getElementById('scene').innerHTML = "<h2 id=\"CCSub\">Wybierz płeć</h2><div id=\"description\"></div>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onMouseOver=\"female()\" onMouseOut=\"clearDesc()\" onClick=\"localStorage.setItem(\'BBGen\',\'female\'); selectClass();\">Kobieta &#9792;</a><a class=\"option\" onMouseOver=\"male()\" onMouseOut=\"clearDesc()\" onClick=\"localStorage.setItem(\'BBGen\',\'male\'); selectClass();\">Mężczyzna &#9794;</a>"
}

function female() {
    document.getElementById('description').innerHTML = "Kobiety w serwerowni mogą awansować w dowolnym paradygmacie, który wybiorą – mogą być magami, złodziejami czy znawcami sztuki wojennej.";
}

function male() {
    document.getElementById('description').innerHTML = "Mężczyźni są przeważająca rasą w serwerowni. Oni również mogą awansować w dowolnym paradygmacie.";
}

function clearDesc() {
    document.getElementById('description').innerHTML = "";
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function selectClass(){
    document.getElementById('options').innerHTML = "<a class=\"option\" onMouseOver=\"mage()\" onMouseOut=\"clearDesc()\" onClick=\"localStorage.setItem(\'BBClass\',\'mage\'); createName();\">Mag &#9882;</a>" +
        "<a class=\"option\" onMouseOver=\"warrior()\" onMouseOut=\"clearDesc()\" onClick=\"localStorage.setItem(\'BBClass\',\'warrior\'); createName();\">Wojownik &#9876;</a>" +
        "<a class=\"option\" onMouseOver=\"thief()\" onMouseOut=\"clearDesc()\" onClick=\"localStorage.setItem(\'BBClass\',\'thief\'); createName();\">Złodziej &#9923;</a>";
    document.getElementById('CCSub').innerHTML = "Wybierz klasę";
}

function mage(){
    document.getElementById('description').innerHTML = "Posiada głęboką wiedzę i pisze zgodnie ze sztuką i duchem języka. Jego programy są najbardziej złożone, jednak ich implementacja zajmuje najwięcej czasu.";
}

function warrior(){
    document.getElementById('description').innerHTML = "Wojownik to rycerz, fechmistrz, żołnierz i miłośnik potyczek algorytmicznych. Najbardziej bezpośreni z trójki, jego głównym atutem jest Brute Force - pisze programy szybko, ale nie są one najlepsze.";
}

function thief(){
    document.getElementById('description').innerHTML = "Złodziej to zręczny hacker, który stara się osiągnąć własne cele – dobre lub złe. Potrafi stworzyć tylko najprostsze programy, lecz może <i>pożyczyć</i> kod znajdujący się w pobliżu.";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function createName(){
    document.getElementById('scene').innerHTML = "<h2 id=\"CCSub\">Nadaj imię</h2><input id=\"CharName\" type=\"text\" />";
    if (localStorage.getItem("BBGen")=="male"){
        document.getElementById('CharName').value = "Bufor";
    }else{
        document.getElementById('CharName').value = "Tylda";
    }
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"localStorage.setItem(\'BBName\', document.getElementById('CharName').value); ch1init();\">Zatwierdź</a>";
}