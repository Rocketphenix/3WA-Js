"use strict";
// On défini le propriété de notre carré que l'on va dessiner dans un objet

let square = {
	color: "#FF0000",
	length: 50,
	x: 10,
	y: 10,
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions

let canvasDom = null;
let ctx = null;

// Dès que le DOM est chargé on commence

document.addEventListener("DOMContentLoaded", function () {
	// L'objet du DOM Canvas

	canvasDom = document.querySelector("#canvas");

	canvasDom.width = 800;
	canvasDom.height = 600;

	// Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D

	ctx = canvasDom.getContext("2d");

	// On dessine notre carré la première fois

	displaySquare();

	// Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier

	document.addEventListener("keydown", moveSquare);
});

function displaySquare() {
	ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

	ctx.font = "bold 50px Verdana";

	// On dit au contexte que la couleur de remplissage est gris
	ctx.fillStyle = "#DDDDDD";

	// On rempli le Canvas de gris
	ctx.fillRect(square.x, square.y, square.length, square.length);
}

function moveSquare(e) {
	if (e.keyCode === 39) {
		console.log("droit");
		if (square.x + square.length < canvasDom.width) square.x++;
	} else if (e.keyCode === 40) {
		console.log("bas");
		if (square.y + square.length < canvasDom.height) square.y++;
	} else if (e.keyCode === 37) {
		console.log("gauche");
		if (square.x > 0) square.x--;
	} else if (e.keyCode === 38) {
		console.log("haut");
		if (square.y > 0) square.y--;
	}

	displaySquare();
}
