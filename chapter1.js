//"BBBeastCode" "True"
//"BBConfidence" "True"
//"BB10Coins" "True"
//"BBTCPIdent", "True"

function ifFemale(replace){
    if (localStorage.getItem("BBGen")=="female"){
        if (typeof(replace)==='undefined') replace="a";
        var amount = document.getElementsByClassName('genDep').length;
        for (var i=0;i<amount;i=i+1) {
            document.getElementsByClassName('genDep')[i].innerHTML = replace;
        }
    }
}

function ch1init() { //BBLoc ch1init
    localStorage.setItem("BBLoc","ch1init");
    localStorage.setItem("BBBeastCode","False");
    localStorage.setItem("BBConfidence","False");
    localStorage.setItem("BB10Coins","False");
    localStorage.setItem("BBTCPIdent", "False");
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
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Na dworze szaleje zamieć. Widzisz na odległość może 10 metrów. Pomimo gęsto padającego śniegu dostrzegasz na ziemi dwa rodzaje (nie swoich) śladów: te, które występują jedynie dalej od karczmy, są drobne, na skraju widoczności.</p>";
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
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_3()\">Zacznij krzyczeć na bestię.</a>";

    if (localStorage.getItem("BBClass")=="warrior"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3a()\">[Wojownik]: Jesteś w swoim żywiole. Rzuć się w wir walki.</a>";
    } else if(localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3c()\">[Mag]: Odejdź z godnością w zarośla i zacznij bohatersko kodzić.</a>";
    } else{
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3d()\">[Złodziej]: Zaadaptuj kod źródłowy bestii.</a>";
    }

    if (localStorage.getItem("BBGen")=="female") {
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3b()\">Wiej. Nie chcesz być w końcu żadną bohaterką.</a>";
    }else{
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3b()\">Wiej. Nie chcesz być w końcu żadnym bohaterem.</a>";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function p1_3(){
    localStorage.setItem("BBLoc","p1_3");
    if (localStorage.getItem("BBGen")=="male") {
        document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Chyba naprawdę nie myślałeś, że to cokolwiek da? Bestia popatrzyła na ciebie z politowaniem, odwróciła się i pobiegła dalej za pakietem.</p>";
    }else{
        document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Chyba naprawdę nie myślałaś, że to cokolwiek da? Bestia popatrzyła na ciebie z politowaniem, odwróciła się i pobiegła dalej za pakietem.</p>";
    }
    if (localStorage.getItem("BBClass")=="warrior"){
        document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_3a()\">[Wojownik]: Jesteś w swoim żywiole. Rzuć się w wir walki.</a>";
    } else if(localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_3c()\">[Mag]: Odejdź z godnością w zarośla i zacznij bohatersko kodzić.</a>";
    } else{
        document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_3d()\">[Złodziej]: Zaadaptuj kod źródłowy bestii.</a>";
    }

    if (localStorage.getItem("BBGen")=="female") {
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3b()\">Wiej. Nie chcesz być w końcu żadną bohaterką.</a>";
    }else{
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3b()\">Wiej. Nie chcesz być w końcu żadnym bohaterem.</a>";
    }
}

function p1_3a(){
    localStorage.setItem("BBLoc","p1_3a");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Twój przeciwnik nie ma z tobą żadnych szans. W epicki sposób pokonujesz bestię, z pewnością będą o tym krążyć legendy.</p><p>Zebrał się spory tłum gapiów, podziwiających twoje zwycięstwo</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_4()\">Porozmawaiaj z przestraszonym pakietem.</a>";
    document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_3dc()\">Pozwalaj się adorować przez tłum.[+1 do sławy]</a>";
}

function p1_3b(){
    localStorage.setItem("BBLoc","p1_3b");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">No i na tym kończy się twoja przygoda. Nie warto robić o tobie gry. Niestety, nie udało ci się wykonać zadania. Zwyciężył w tobie strach albo zdrowy rozsądek.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"menu()\">Koniec</a>";
}

function p1_3c(){
    localStorage.setItem("BBLoc","p1_3c");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Tym razem postawił<span class=\"genDep\">e</span>ś na minimalizm. Decydujesz się na drobną kulę ognistą. Dosięga ona bestii tuż przed tym, jak miała ona wbić swoje kły w pakiet. Zdążył<span class=\"genDep\">e</span>ś. Warto było skorzystać z gotowej biblioteki.</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_4()\">Porozmawaiaj z przestraszonym pakietem.</a>";
}

function p1_3d(){
    localStorage.setItem("BBLoc","p1_3d");
    if (localStorage.getItem("BBGen")=="male") {
        document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Nikt nie spodziewał się takiego obrotu sprawy. Tak, stałeś się bestią. I co dalej?</p>";
    }else{
        document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Nikt nie spodziewał się takiego obrotu sprawy. Tak, stałaś się bestią. I co dalej?</p>";
    }
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_3da()\">Walcz z bestią (tą drugą!).</a>" +
        "<a class=\"option\" onClick=\"p1_3db()\">Złap pakiet zębami i przenieś w bezpieczne miejsce.</a>";
}

function p1_3da() {
    localStorage.setItem("BBLoc","p1_3da");
    localStorage.setItem("BBBeastCode","True");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Jesteś bestią. Czujesz się bestią. I czujesz krew. Smakujesz jej...</p><p>Ogromnego wysiłku woli wymaga od ciebie przywrócenie twojego repozytorium do stanu przed mergem z repo bestii.</p><p>Gdy odzyskujesz przytomność, bestia jest martwa, a pakiet patrzy na ciebie z przestrachem z oddali. Kod potwora zachowujesz w osobnym folderze.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_4()\">Porozmawaiaj z przestraszonym pakietem.</a>";
}

function p1_3db() {
    localStorage.setItem("BBLoc","p1_3db");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Oczyma bestii oceniasz sytuację. Jesteś nieznacznie bliżej pakietu niż twój przeciwnik. Ruszasz do biegu. O włos udaje ci się wyprzedzić wrogie monstrum, złapać pakiet zębami, wykonać ostry zwrot i pognać do karczmy.</p><img class=\"krecha\" src=\"przerywnik.png\" /><p>Po dotarciu do karczmy i powrocie do ludzkiej formy zauważasz, że pakiet nie przeżył tej podróży – sytuacja doprowadziła go do zawału.</p>" +
        "<p>Zrobił<span class=\"genDep\">e</span>ś, co mogł<span class=\"genDep\">e</span>ś, ale nie jesteś zadowolon<span class=\"genDep\">y</span> obrotem spraw, podejrzewasz, że można było zrobić coś inaczej...</p><p>Wrócił<span class=\"genDep\">e</span>ś niejako do punktu wyjścia: dzień był jeszcze bardziej męczący, a ty tym bardziej potrzebujsz odpoczynku w karczmie.</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"menu()\">Koniec</a>";
}

function p1_3dc() {
    localStorage.setItem("BBLoc", "p1_3dc");
    localStorage.setItem("BBConfidence","True");
    var chName = localStorage.getItem("BBName");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">" + chName + "! " + chName + "! " + chName + "! – tłum skanduje twoje imie. Czujesz się niezwykle docenion<span class=\"genDep\">y</span>, jak jeszcze nigdy w życiu. Ma to efekt w postaci zwiększenia twojej pewności siebie.</p><p>Nikt w tłumie – który w sumie nie bardzo wiadomo, skąd się wziął – nie zwraca uwagi na pakiet, ale ty, o wielk<span class=\"genDep\">i</span>, pamiętasz wciąż, po co tu jesteś</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_4()\">Porozmawaiaj ze skrytym w cieniu pakietem.</a>";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function p1_4() {
    localStorage.setItem("BBLoc", "p1_4");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Podchodzisz do skulonego ze strachu pakietu. Wygląda, jakby przebył właśnie długą drogę, znacznie dłuższą niż te, do której został powołany. Zastanawiasz się, jak zacząć rozmowę...</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5()\">– Yyy... Co ty tu robisz?</a>" +
        "<a class=\"option\" onClick=\"p1_4a()\">– Hej, stary! Sto lat cię nie widział<span class=\"genDep\">e</span>m, co tu porabiasz?!</a>";
    if (localStorage.getItem("BBClass")=="thief"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_4b()\">[Złodziej]: – Zostajesz obciążony kosztami akcji pozbywania się potwora, zgodnie z obowiązującym cennikiem wynoszącymi 10 sztuk krzemu.</a>";
    }else if(localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_4c()\">[Mag]: – <pre>pakiet.getStatus();</pre></a>"
    }
    if (localStorage.getItem("BBConfidence")=="True"){
        var chName = localStorage.getItem("BBName");
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_4a()\">[<i>Pewność siebie</i>]: – Ja, jedyn<span class=\"genDep\">y</span> i niepowtarzaln<span class=\"genDep\">y</span> " + chName + ", wybawił<span class=\"genDep\">e</span>m cię od niechybnej śmierci. Czemuż to przysłużyły się moje bohaterskie czyny?</a>";
    }
    ifFemale();
}

function p1_4a() {
    localStorage.setItem("BBLoc", "p1_4a");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Pakiet patrzy na ciebie jak na czubka. Na moment z jego oblicza znika strach. Decyduje się przemówić</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5()\">Czekaj.</a>";
}

function p1_4b() {
    localStorage.setItem("BBLoc", "p1_4b");
    localStorage.setItem("BB10Coins","True");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Na brzmienie słów „sztuki miedzi”, pakiet natychmiast odzyskuje przytomność umysłu. Niechętnie wręcza ci monety.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5()\">Czekaj.</a>";
}

function p1_4c() {
    localStorage.setItem("BBLoc", "p1_4c");
    localStorage.setItem("BBTCPIdent", "True");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\"><pre style=\"text-align: left;\">struct Pakiet{</pre><br /><pre>    string name=\"TeCeP\";</pre><br /><pre>    string state=\"frightened\";</pre><br /><pre>};</pre></p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5()\">– Witaj, TeCeP. Co sprawiło, że zapuściłeś się w tak daleko?</a>" +
        "<a class=\"option\" onClick=\"p1_5()\">– Yyy... Co ty tu robisz?</a>" +
        "<a class=\"option\" onClick=\"p1_4a()\">– Hej, stary! Sto lat cię nie widział<span class=\"genDep\">e</span>m, co tu porabiasz?!</a>";
}

function p1_4d(){
    localStorage.setItem("BBLoc", "p1_4d");
    document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">TeCeP, skonfundowany, patrzy na ciebie, jakby próbował sobie coś przypomnieć</p><p>– My się znamy? Nie kojarzę <span class=\"genDep\">pana</span>... Ale jak już pytasz...</p>";
    ifFemale("pani");
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5()\">Słuchaj dalej.</a>";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function p1_5(){
    localStorage.setItem("BBLoc", "p1_5");
    var message = "<p class=\"firstParagraph\">Pakiet zaczyna niechętnie:</p><p>– Próbowałem dostać się do Warstwy Transportowej. Wyruszyłem dobrze z tydzień temu. Pięć dni temu rozpętała się zamieć. Musiałem wówczas zgubić drogę... Gdzie właściwie jestem?";
    //document.getElementById('scene').innerHTML = "<p class=\"firstParagraph\">Pakiet zaczyna niechętnie:</p><p>– Próbowałem dostać się do Warstwy Transportowej. Wyruszyłem dobrze z tydzień temu. Pięć dni temu rozpętała się zamieć. Musiałem wówczas zgubić drogę... Gdzie właściwie jestem?";
    if (localStorage.getItem("BBTCPIdent")!="True"){
        //document.getElementById('scene').innerHTML
        message += " Tak w ogóle – mów mi TeCeP.";
    }
    //document.getElementById('scene').innerHTML
    message +="</p>";
    document.getElementById('scene').innerHTML = message;
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_5a()\">– No więc, drogi TeCePie, znajdujesz się kompletnie nie tam, gdzie chciałbyś się znajdować, to jest stanowczo nie u swego celu. Natomiast zdecydowanie bliżej osad na południu macierzy.</a>" +
        "<a class=\"option\" onClick=\"p1_5a()\">– W Południowym Mostku.</a>";
    if (localStorage.getItem("BBClass")=="mage"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_5a()\">[Mag]: (po krótkim zastanowieniu) – Znajdujesz się w punkcie (-2.7182e8,-1.12358e13)px względem środka masy Warstwy Transportowej.</a>";
    }
}

function p1_5a(){
    localStorage.setItem("BBLoc", "p1_5a");
    document.getElementById('scene').innerHTML = "<p>– Niedobrze... Muszę pilnie dotrzeć na miejsce. Administrator Baldur wysłał komendy, które mają dotrzeć do wszystkich jednostek w LANie. (Lenno Administratorów *Nixowych)</p>"
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"p1_6a()\">– Jeśli naprawdę muszę, mogę cię zaprowadzić.</a>";
    if (localStorage.getItem("BBClass")=="thief"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_6b()\">[Złodziej]: – Droga jest pełna niebezpieczeństw dla takich nieporadnych stworzonek jak ty, ale mogę cię odeskortować za niewielką opłatą 100 sztuk krzemu.</a>";
    } else if (localStorage.getItem("BBClass")=="warrior"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_6c()\">[Wojownik]: – Droga jest pełna niebezpieczeństw dla nieuzbrojonych wędrowców, ale mogę cię odeskortować z dobroci serca.</a>";
    }
    
    if (localStorage.getItem("BBBeastCode")=="True"){
        document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_6d()\">[<i>Kod potwora</i>]: – Mogę cię przemienić w bestię. Dotrzesz wtedy bezpiecznie, a u celu przemienisz się z powrotem w pakiet (...albo i nie).</a>";
    }
    document.getElementById('options').innerHTML += "<a class=\"option\" onClick=\"p1_6e()\">– To naprawdę nie jest mój problem. Nie musisz dziękować za ratowanie życia. Wracam do karczmy.</a>";
}

function p1_6a() {
    localStorage.setItem("BBLoc", "p1_6a");
    document.getElementById('scene').innerHTML = "<p>– Byłbym bardzo wdzięczny. Straciłem już wiarę, że jeszcze dotrę do celu.</p>" +
        "<p>Przygotowujecie zapasy i pakujecie się na co najmniej tygodniową drogę. Zamierzacie wyruszyć następnego dnia o świcie.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"ch2init()\">Zakończ segment pierwszy</a>"
}

function p1_6b() {
    localStorage.setItem("BBLoc", "p1_6b");
    document.getElementById('scene').innerHTML = "<p>– Jestem skłonny zpłacić tą kwotę. Informacja jest cenniejsza niż krzem!</p>" +
        "<p>Pomysł podróży nieszczególnie ci się podoba, ale czego to się nie robi za garść krzemiaków. Stracisz może dwa tygodnie, ale zarobek jest godziwy.</p>";
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"ch2init()\">Zakończ segment pierwszy</a>"
}

function p1_6c() {
    localStorage.setItem("BBLoc", "p1_6c");
    document.getElementById('scene').innerHTML = "<p>– To wspaniale! Zawsze marzyłem, żeby spotkać <span class=\"genDep\">takiego bohatera</span>, jak ty!</p>" +
        "<p>Już nie możesz doczekać się początku podróży - czeka cię nowa, wspaniała przygoda!</p>";
    ifFemale("taką bohaterkę");
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"ch2init()\">Zakończ segment pierwszy</a>"
}

function p1_6d() {
    localStorage.setItem("BBLoc", "p1_6d");
    document.getElementById('scene').innerHTML = "<p>– Czy to na pewno bezpieczne...? No dobrze, raz się żyje...</p>" +
        "<p>Linkujesz kod potwora, po czym kompilujesz. Przemieniony TeCep biegnie na północ dużo szybciej, niż mógłby jako pakiet, nie obawiając się żadnych zagrożeń. To pewność siebię, czy też instynkt bestii zdominował już umysł gońca?</p><img class=\"krecha\" src=\"przerywnik.png\" />" +
        "<p class=\"firstParagraph\">Wracasz do karczmy i dopijasz pozostawione w niej piwo.</p><p>– I co z tym pakietem? – pyta wędrowiec, który zdążył już poczuć się tu jak u sebie.</p><p>– Wyruszył w dalszą drogę. Raczej dotrze, a jeśli dotrze, to na pewno na czas.</p><p>Jest to ostatni moment, w którym zaprzątasz sobie nim głowę. Nigdy więcej nie otrzymał<span class=\"genDep\">e</span>ś już o nim żadnych informacji... Dotarł?... Przeżył?... Dostarczył wiadomość?...</p><p>Na te pytania nigdy już nie poznasz odpowiedzi, ale też nigdy tak na prawdę nie chciał<span class=\"genDep\">e</span>ś...</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"menu()\">Koniec</a>"
}

function p1_6e() {
    localStorage.setItem("BBLoc", "p1_6e");
    document.getElementById('scene').innerHTML = "<p>– Nic cię nie obchodzi los multiwersum! Nie to nie, nie będę cię zmuszać. – TeCeP wykrzykuje z wyrzutem, wyczuwasz też w jego głosie zawód. Ale co cię to obchodzi?</p>" +
        "<p>Figurka posłańca, targana wiatrem, powoli znika na tle horyzontu. Prawdopodobnie jest to bardzo malowniczy, nastrojowy widok, ale nie masz czasu ani ochoty, by go obserwować.</p><img class=\"krecha\" src=\"przerywnik.png\" />" +
        "<p class=\"firstParagraph\">Wracasz do karczmy i dopijasz pozostawione w niej piwo.</p><p>– I co z tym pakietem? – pyta wędrowiec, który zdążył już poczuć się tu jak u sebie.</p><p>– Wyruszył w dalszą drogę.</p><p>Jest to ostatni moment, w którym zaprzątasz sobie nim głowę. Nigdy więcej nie otrzymał<span class=\"genDep\">e</span>ś już o nim żadnych informacji... Dotarł?... Przeżył?... Dostarczył wiadomość?...</p><p>Na te pytania nigdy już nie poznasz odpowiedzi, ale też nigdy tak na prawdę nie chciał<span class=\"genDep\">e</span>ś...</p>";
    ifFemale();
    document.getElementById('options').innerHTML = "<a class=\"option\" onClick=\"menu()\">Koniec</a>"
}