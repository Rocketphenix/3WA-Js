"use strict";

// On défini le propriété de notre cercle que l'on va dessiner dans un objet
let circle = {
	color: "#FF0000",
	radius: 10,
	x: 20,
	y: 20,
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;

// Dès que le DOM est chargé on commence
document.addEventListener("DOMContentLoaded", function () {
	canvasDom = document.getElementById("canvas");
	ctx = canvasDom.getContext("2d");

	displayCircle();

	document.addEventListener("keydown", moveCircle);
});

function displayCircle() {
	ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
	ctx.fillStyle = circle.color;
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
	ctx.fill();
}

function moveCircle(e) {
	switch (e.key) {
		case "ArrowLeft":
			if (circle.x > 0) circle.x -= 4;
			break;
		case "ArrowRight":
			if (circle.x < canvasDom.width - circle.radius) circle.x += 4;
			break;
		case "ArrowUp":
			if (circle.y > 0) circle.y -= 4;
			break;
		case "ArrowDown":
			if (circle.y < canvasDom.height - circle.radius) circle.y += 4;
			break;
	}
	displayCircle();
}
