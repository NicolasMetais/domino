var boutonJ2 = document.getElementById("bouton2");
var tabDominos = [];
var tabJeu = [];
var tabJoueur1 = [];
var tabJoueur2 = [];
var boutonPioche = document.getElementById('pioche');
var pioche = false;
var tour = 0;
var ind;

var domino0 = new construcDomino('Domino0.png', 0, 0);
var domino1 = new construcDomino('Domino1.png', 0, 1);
var domino2 = new construcDomino('Domino2.png', 0, 2);
var domino3 = new construcDomino('Domino3.png', 0, 3);
var domino4 = new construcDomino('Domino4.png', 0, 4);
var domino5 = new construcDomino('Domino5.png', 0, 5);
var domino6 = new construcDomino('Domino6.png', 0, 6);
var domino7 = new construcDomino('Domino7.png', 1, 1);
var domino8 = new construcDomino('Domino8.png', 1, 2);
var domino9 = new construcDomino('Domino9.png', 1, 3);
var domino10 = new construcDomino('Domino10.png', 1, 4);
var domino11 = new construcDomino('Domino11.png', 1, 5);
var domino12 = new construcDomino('Domino12.png', 1, 6);
var domino13 = new construcDomino('Domino13.png', 2, 2);
var domino14 = new construcDomino('Domino14.png', 2, 3);
var domino15 = new construcDomino('Domino15.png', 2, 4);
var domino16 = new construcDomino('Domino16.png', 2, 5);
var domino17 = new construcDomino('Domino17.png', 2, 6);
var domino18 = new construcDomino('Domino18.png', 3, 3);
var domino19 = new construcDomino('Domino19.png', 3, 4);
var domino20 = new construcDomino('Domino20.png', 3, 5);
var domino21 = new construcDomino('Domino21.png', 3, 6);
var domino22 = new construcDomino('Domino22.png', 4, 4);
var domino23 = new construcDomino('Domino23.png', 4, 5);
var domino24 = new construcDomino('Domino24.png', 4, 6);
var domino25 = new construcDomino('Domino25.png', 5, 5);
var domino26 = new construcDomino('Domino26.png', 5, 6);
var domino27 = new construcDomino('Domino27.png', 6, 6);


function construcDomino(image, gauche, droite) {  
    this.image = image;
    this.gauche = gauche;
    this.droite = droite;
    tabDominos.push(this);
}

melanger(tabDominos);
tabJoueur1 = tabDominos.slice(0,7);
tabJoueur2 = tabDominos.slice(7,14);
tabDominos.splice(0,14);

boutonJ2.addEventListener('click', function() {
    choixJoueurs.style.display = 'none';
    main.style.display = 'flex';
    containerPioche.style.display = 'block';
});

boutonPioche.addEventListener('click', function() {
    if(tour === 1){
        tabJoueur1.push(tabDominos[0]);
        tabDominos.splice(0,1);
        document.getElementById("main").innerHTML = '';
        for (var i = 0; i != tabJoueur1.length; i++){
        document.getElementById("main").insertAdjacentHTML('afterbegin', '<img id="j1Domino' + i + '" src="' + tabJoueur1[i]["image"] + '" />');
        }
        tour = 0;
    }else if(tour === 0) {
        tabJoueur2.push(tabDominos[0]);
        tabDominos.splice(0,1);
        document.getElementById("main").innerHTML = '';
        for (var i = 0; i != tabJoueur2.length; i++){
            document.getElementById("main").insertAdjacentHTML('afterbegin', '<img id="j2Domino' + i + '" src="' + tabJoueur2[i]["image"] + '" />');
            }
        tour = 1;
    }
});

 do {
    if (tour === 0) {
        document.getElementById("main").innerHTML = '';
        for(var i = 0; i != tabJoueur2.length; i++) {
            document.getElementById("main").insertAdjacentHTML('afterbegin', '<img id="j2Domino' + i +  '" src="' + tabJoueur2[i]["image"] + '" />');
            document.getElementById("j2Domino"+ i).addEventListener('click', visu); 
        }
    }else if (tour === 1){
        document.getElementById("main").innerHTML = '';
        for(var i = 0; i != tabJoueur1.length; i++) {
            document.getElementById("main").insertAdjacentHTML('afterbegin', '<img id="j1Domino' + i + '" src="' + tabJoueur1[i]["image"] + '" />');
            document.getElementById("j1Domino"+ i).addEventListener('click', visu);
        }
    }
} while(pioche = false);

 function visu() {
    if (tabJeu[0] === undefined){
            document.getElementById("jeux").innerHTML = '';
            var element = document.getElementById("jeux");

            var startdiv1 = document.createElement("div");
            element.appendChild(startdiv1);
            startdiv1.setAttribute("id", "str1");

            var startdiv2 = document.createElement("div");
            element.appendChild(startdiv2);
            startdiv2.setAttribute("id", "str2");

            document.getElementById("str1").addEventListener('click', placementStr1);
            document.getElementById("str2").addEventListener('click', placementStr2);
        }
    };


function placementStr1() {
    document.getElementById("j1Domino"+ ind);
} 

function melanger(dominoPick) {
    var i = dominoPick.length, tempo, indexRandom;
  while ( i > 0) { 
        indexRandom = Math.floor(Math.random()*i);
        i--;
        tempo = dominoPick[i];
        dominoPick[i] = dominoPick[indexRandom];    
        dominoPick[indexRandom] = tempo;
    }
}