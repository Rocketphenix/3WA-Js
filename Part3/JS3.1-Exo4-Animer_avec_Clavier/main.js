"use strict";

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
	color: "#FF0000",
	length: 20,
	x: 10,
	y: 10,
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom = null;
let ctx = null;

// Dès que le DOM est chargé on commence
document.addEventListener("DOMContentLoaded", function () {
	canvasDom = document.getElementById("canvas");
	ctx = canvasDom.getContext("2d");

	displaySquare();

	document.addEventListener("keydown", moveSquare);
});

function displaySquare() {
	ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
	ctx.fillStyle = square.color;

	ctx.fillRect(square.x, square.y, square.length, square.length);
}

function moveSquare(e) {
	switch (e.key) {
		case "ArrowLeft":
			if (square.x > 0) square.x--;
			break;
		case "ArrowRight":
			if (square.x < canvasDom.width - square.length) square.x++;
			break;
		case "ArrowUp":
			if (square.y > 0) square.y--;
			break;
		case "ArrowDown":
			if (square.y < canvasDom.height - square.length) square.y++;
			break;
	}

	displaySquare();
}
