"use strict";

let canvasDom = null;
let ctx = null;

// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener("DOMContentLoaded", function () {
	canvasDom = document.getElementById("canvas");
	ctx = canvasDom.getContext("2d");

	displayText("Hello", "black", 0);
	displayText("world", "green", ctx.measureText("Hello ").width);
	displayText("!", "red", ctx.measureText("Hello world ").width);
});

function displayText(text, color, distance) {
	ctx.font = "20px Arial";
	ctx.fillStyle = color;
	console.log(distance);

	ctx.fillText(text, 5 + distance, 50);
}
