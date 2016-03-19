function ifFemale(){
    if (localStorage.getItem("BBGen")=="female"){
        var amount = document.getElementsByClassName('genDep').length;
        for (var i=0;i<amount;i=i+1) {
            document.getElementsByClassName('genDep')[i].innerHTML = "a";
        }
    }
}

function ch1init() { //BBLoc ch1init
    localStorage.setItem("BBLoc","ch1init");
    document.getElementById('header').innerHTML = "Segment 1";
    document.getElementById('scene').innerHTML = "<h2 id=\"CCSub\">Wprowadzenie</h2><p class=\"firstParagraph\">Znajdujesz się w karczmie, gdzieś na bezludziu Mostka Południowego. Popijał<span class=\"genDep\">e</span>ś właśnie WINE i komentował<span class=\"genDep\">e</span>ś z karczmarzem warunki panujące w okolicy. Nagle drzwi otwierają się z hukiem.</p> " +
        "<p>– Straszna zawieja tam na zewnątrz! Jakiś pakiet z samego Sieciowego Podzespołu przywiało! – woła od progu przybysz, wyraźnie nie pochodzący z tych stron.</p>" +
        "<p>Tragarz danych to dość niewdzięczna fucha, a Ty chcesz odpocząć po ciężkim dniu.</p>" +
        "<p>– Odstawię go jutro na jakiś port, prześlą go, gdzie trzeba... – odpowiadasz od niechcenia.</p>" +
        "<p>– Jutro może być za późno... Nie został mu długi Time To Live.</p>" +
        "<p>Nie widząc innej możliwości wychodzisz zrezygnowan<span class=\"genDep\">y</span> przed karczmę w poszukiwaniu nieszczęsnego pakietu.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_1()\">Kontynuuj</a>";
    ifFemale();
}

function p1_1(){
    localStorage.setItem("BBLoc","p1_1");
    document.getElementById('header').innerHTML = defaultHeader;
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Na dworze szaleje zamieć. Widzisz na odległość może 10 metrów. Pomimo gęsto padającego śniegu dostrzegasz na ziemi dwa rodzaje nie swoich śladów: te, które występują jedynie dalej od karczmy, są drobne, na skraju widoczności.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_1a()\">Udaj się za silnie typowymi śladami</a>" +
        "<a class=\"option\" onClick=\"p1_2()\">Udaj się za drobnymi śladami</a>";
    if (localStorage.getItem("BBClass")=="thief"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_1b()\">[Złodziej]: Przechwyć sygnatury od bywalców karczmy, by przyporządkować ślady do właścicieli.</a>";
    }
    if (localStorage.getItem("BBClass")=="warrior"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_1c()\">[Wojownik]: Korzystając z podręcznej brzytwy Ockhama wybierz właściwsze ślady</a>";
    }
    if (localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_1d()\">[Mag]: Napisz sieć neuronową, która rozpozna ślady.</a>";
    }
}

function p1_1a() {
    localStorage.setItem("BBLoc","p1_1a");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Podążasz za śladami, aż dostrzegasz tuż obok nich papierek po batoniku, jakich wiele wystawało z kieszeni przybysza, który dołożył ci roboty. Wściekł<span class=\"genDep\">y</span> na siebie za wybranie złego tropu, nie widzisz powodu, by iść dalej w tym kierunku.</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_1()\">Wróć pod karczmę</a>";
}

function p1_1b() {
    localStorage.setItem("BBLoc","p1_1b");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Szerokie ślady ewaluują się do ostatniego gościa karczmy.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_2()\">Udaj się za drobnymi śladami</a>";
}

function p1_1c() {
    localStorage.setItem("BBLoc", "p1_1c");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Z prawdopodobieństwem szacowanym na 89% należy pójść za mniejszymi odciskami butów</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_1a()\">Mimo wszystko udaj się jednak za silnie typowymi śladami. 11% to zawsze jednak około (11 +/- 10)%.</a>" +
        "<a class=\"option\" onClick=\"p1_2()\">Udaj się za drobnymi śladami</a>";
}

function p1_1d() {
    localStorage.setItem("BBLoc", "p1_1d");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Wieczór przechodzi w poranek, pogoda się uspakaja, a ty masz już pewność, że należy się udać za drobnymi, prawie zasypanymi już śladami.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_2()\">Triumfalnie podążaj za drobnymi śladami, udowodniwszy wyższość metod rozumowych nad prostackimi rozwiązaniami.</a>";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function p1_2() {
    localStorage.setItem("BBLoc","p1_2");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Po pięciu minutach drogi, przerywanej co chwilę poszukiwaniem tropu, drobna sylwetka zaczyna majaczyć na horyzoncie. W miarę, jak się zbliżasz dostrzegasz więcej szczegółów i widzisz, że pakiet goni przerażająca bestia. Musisz szybko coś zrobić.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_2()\">Zacznij krzyczeć na bestię.</a>";

    if (localStorage.getItem("BBClass")=="warrior"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_2()\">[Wojownik]: Jesteś w swoim żywiole. Rzuć się w wir walki.</a>";
    } else if(localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_2()\">[Mag]: Odejdź z godnością w zarośla i zacznij bohatersko kodzić.</a>";
    } else{
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_2()\">[Złodziej]: Zaadaptuj kod źródłowy bestii.</a>";
    }

    if (localStorage.getItem("BBGen")=="female") {
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_2()\">Wiej. Nie chcesz być w końcu żadną bohaterką.</a>";
    }else{
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_2()\">Wiej. Nie chcesz być w końcu żadnym bohaterem.</a>";
    }
}