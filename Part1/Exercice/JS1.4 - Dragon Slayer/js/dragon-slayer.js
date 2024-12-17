"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
var difficulte;
do {
	difficulte = window.prompt("Choisir votre difficulté (facile, normal, difficile)");
} while (!["facile", "normal", "difficile"].includes(difficulte));

function assignationPV(PV, nbrDice) {
	for (let i = 0; i < nbrDice; i++) {
		PV = PV + Math.round(Math.random() * 10);
	}
	return PV;
}
if (difficulte === "facile") {
	var PvDragon = 100;
	PvDragon = assignationPV(PvDragon, 5);
	var PvJoueur = 100;
	PvJoueur = assignationPV(PvJoueur, 10);
} else if (difficulte === "moyen") {
	var PvDragon = 100;
	PvDragon = assignationPV(PvDragon, 10);
	var PvJoueur = 100;
	PvJoueur = assignationPV(PvJoueur, 10);
} else {
	var PvDragon = 100;
	PvDragon = assignationPV(PvDragon, 10);
	var PvJoueur = 100;
	PvJoueur = assignationPV(PvJoueur, 7);
}

var NbrTour = 0;
/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
var initiative;
var speedPlayer, speedDragon;

function calculInitiative() {
	let speed = 0;
	for (let i = 0; i < 10; i++) {
		speed = speed + Math.floor(Math.random() * (6 - 0 + 1) + 0);
	}
	return speed;
}

function calculDegats(nbrDice) {
	let valeur = 0;
	for (let i = 0; i < nbrDice; i++) {
		valeur = valeur + Math.floor(Math.random() * (6 - 0 + 1) + 0);
	}
	return valeur;
}

function attack(attaquant) {
	let degats = calculDegats(3);

	if (attaquant === "Joueur") {
		if (difficulte === "facile") {
			degats = Math.round(degats + (degats * calculDegats(2)) / 100);
		} else if (difficulte === "difficile") {
			degats = Math.round(degats - (degats * calculDegats(1)) / 100);
		}
		PvDragon = PvDragon - degats;
	} else {
		if (difficulte === "facile") {
			degats = Math.round(degats - (degats * calculDegats(2)) / 100);
		} else if (difficulte === "difficile") {
			degats = Math.round(degats + (degats * calculDegats(1)) / 100);
		}
		PvJoueur = PvJoueur - degats;
	}
	affichageTour(attaquant, degats);
}

function affichageTour(attaquant, degats) {
	NbrTour++;

	if (attaquant === "Joueur") {
		document.write(`
    <h3>Tour n°${NbrTour}</h3>
				<figure class="game-round">
					<img src="images/knight-winner.png" alt="Chevalier vainqueur" />
					<figcaption>
						Vous êtes le plus rapide, vous attaquez le dragon et lui infligez ${degats} points de dommage !
					</figcaption>
				</figure>
    `);
	} else {
		document.write(`
     <h3>Tour n°${NbrTour}</h3>
				<figure class="game-round">
					<img src="images/dragon-winner.png" alt="Dragon vainqueur" />
					<figcaption>Le dragon prend l'initiative, vous attaque et vous inflige ${degats} points de dommage !</figcaption>
				</figure>
      `);
	}
	if (PvJoueur > 0 && PvDragon > 0) {
		document.write(`
      <div class="game-state">
        <figure class="game-state_player">
          <img src="images/knight.png" alt="Chevalier" />
          <figcaption>${PvJoueur} PV</figcaption>
        </figure>
        <figure class="game-state_player">
          <img src="images/dragon.png" alt="Dragon" />
          <figcaption>${PvDragon} PV</figcaption>
        </figure>
      </div>
    `);
	} else {
		if (PvJoueur <= 0) {
			document.write(`
        <div class="game-state">
          <figure class="game-state_player">
            <img src="images/knight-wounded.png" alt="Chevalier battu" />
            <figcaption>Game Over</figcaption>
          </figure>
          <figure class="game-state_player">
            <img src="images/dragon-winner.png" alt="Dragon vainqueur" />
            <figcaption>${PvDragon} PV</figcaption>
          </figure>
        </div>
        <footer>
          <h3>Fin de la partie</h3>
          <figure class="game-end">
            <figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>
            <img src="images/dragon-winner.png" alt="Dragon vainqueur" />
          </figure>
				</footer>
      `);
		} else if (PvDragon <= 0) {
			document.write(`
        <div class="game-state">
          <figure class="game-state_player">
            <img src="images/knight-winner.png" alt="Chevalier vainqueur" />
            <figcaption>${PvJoueur} PV</figcaption>
          </figure>
          <figure class="game-state_player">
            <img src="images/dragon-wounded.png" alt="Dragon battu" />
            <figcaption>Game Over</figcaption>
          </figure>
        </div>
        <footer>
          <h3>Fin de la partie</h3>
          <figure class="game-end">
            <figcaption>Vous avez gagné le combat, le dragon a été pourfendu !</figcaption>
            <img src="images/knight-winner.png" alt="Chevalier vainqueur" />
          </figure>
				</footer>
      `);
		}
	}
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.write(
	`<main>
			<div class="game">
				<h2>Que la fête commence !!</h2>
  `
);

document.write(
	`
        <div class="game-state">
        <figure class="game-state_player">
          <img src="images/knight.png" alt="Chevalier" />
          <figcaption>${PvJoueur} PV</figcaption>
        </figure>
        <figure class="game-state_player">
          <img src="images/dragon.png" alt="Dragon" />
          <figcaption>${PvDragon} PV</figcaption>
        </figure>
      </div>
  `
);

do {
	speedPlayer = calculInitiative();
	speedDragon = calculInitiative();

	if (speedPlayer > speedDragon) {
		attack("Joueur");
	} else {
		attack("Dragon");
	}
} while (PvJoueur > 0 && PvDragon > 0);

document.write(
	` </div>
	</main>
  `
);
