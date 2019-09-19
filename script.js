// Jeu du pendu

const words = ["LIVREUR", "FESSIER", "VOULOIR", "ACTIVER", "VIVANTE", "GROUPIE", "ADOPTER", "VISITER", "ORDINATEUR", "PAPA", "PENDU", "TROU", "MUR", "FARDE", "COULEUR", "INDESTRUCTIBLE", "INTERFERENCE", "DEVELOPPEUR", "SOURIS", "CLAVIER", "ECHELLE", "FOOTBALL", "DAME", "TABLEAU", "FORMATION", "FRITE", "TRANSPORT"];
let randword = words[Math.floor(Math.random() *words.length)];
let word = [...randword];
const letters = word;
let guess = [];
// Pour générer des underscore en fonction du nombre de lettres
for(i=0; i< letters.length; i++) {
    let underscore = "_";
    guess.push(underscore);
}
let tab = [];
let attempt = 0;
let failure = 0;
document.querySelector("#wrong-letters").style.color = '#ff0000';

document.querySelector("#guess-word").innerHTML = guess.join(" ");

// Début de la fonction

function guessLetter () {

    let input = document.querySelector("#input").value.toUpperCase();

    // Si la lettre dans le input ne se trouve pas dans le mot alors failure augmente

    if(!letters.includes(input) && !tab.includes(input) && input != "") {
        tab.push(input);
        document.querySelector("#wrong-letters").innerText = tab;

        failure++;

    }

    // Boucle qui permet de placer chaque lettre trouvée au bon endroit

    letters.forEach((elem, index) => {

        if(elem == input ) {
            guess[index] = elem;
            document.querySelector("#guess-word").innerText = guess.join(" ");

        }
        
    });

    // Si on appuie sur check sans rien entrer dans l'input alors l'attempt n'augmente pas

    if(input == "") {
        attempt--;
    }

    // Permet d'augmenter le nombre d'attempt
    attempt++;
    document.querySelector("#attempt").innerHTML = `Attempt ${attempt}/15 of which ${failure}/10 failure`

    document.querySelector("#input").value = "";
}

// Bouton check

document.querySelector("#try").addEventListener("click", () => {

    guessLetter();

    // Début du canvas pour le dessin du pendu

    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    // Barre du dessous (potence)

    if(failure == 1) {
        context.moveTo(0,310);
        context.lineTo(200,310);
        context.stroke();
    }

    // Barre verticale potence

    else if(failure == 2) {
        context.moveTo(100,0);
        context.lineTo(100,310);
        context.stroke();
    }

    // Barre du dessus (potence)

    else if(failure == 3) {
        context.moveTo(100,0);
        context.lineTo(200,0);
        context.stroke();
    }

    // Corde

    else if(failure == 4) {
        context.moveTo(200,0);
        context.lineTo(200,60);
        context.stroke();
    }

    // Tête

    else if(failure == 5) {
        context.beginPath();
        context.arc(200,90,30,0,2*Math.PI);
        context.stroke();
    }

    // Corps (manchot)

    else if(failure == 6) {
        context.moveTo(200,120);
        context.lineTo(200,250);
        context.stroke();
    }

    // Bras 1

    else if(failure == 7) {
        context.moveTo(200,150);
        context.lineTo(250,200);
        context.stroke();
    }

    // Bras 2

    else if(failure == 8) {
        context.moveTo(200,150);
        context.lineTo(150,200);
        context.stroke();
    }

    // Jambe 1

    else if(failure == 9) {
        context.moveTo(200,250);
        context.lineTo(250,300);
        context.stroke();
    }

    // Jambe 2

    else if(failure == 10) {
        context.moveTo(200,250);
        context.lineTo(150,300);
        context.stroke();
    }

    // fin du canvas

    // Si attempt atteint et failure atteint

    if(attempt == 15 || failure == 10) {
        document.querySelector("#guess-word").innerText = letters.join(" ");
        let button = document.createElement("button");
        button.id = "try-again";
        let textbutton = document.createTextNode("Try again");
        button.appendChild(textbutton);

        document.querySelector("#newGame").appendChild(button);

        document.querySelector("#try").disabled = true;
    }

    // Si plus d'underscore = mot trouvé
    if(!guess.includes("_")) {
        document.querySelector("#congratulations").innerText = "Congratulations";

        document.querySelector("#guess-word").innerText = letters.join(" ");
        let button = document.createElement("button");
        button.id = "try-again";
        let textbutton = document.createTextNode("Try again");
        button.appendChild(textbutton);

        document.querySelector("#newGame").appendChild(button);

        document.querySelector("#try").disabled = true;
    }

    // Bouton try again

    document.querySelector("#try-again").addEventListener("click", () => {
        window.location.reload();
    });

});