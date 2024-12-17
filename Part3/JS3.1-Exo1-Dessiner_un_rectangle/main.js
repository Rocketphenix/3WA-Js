"use strict";

let canvasDom = null;
let ctx = null;

function createSquare(color, bordure, height, width, x, y, isFill) {
	return {
		color: color,
		bordure: bordure,
		height: height,
		width: width,
		x: x,
		y: y,
		isFill,
	};
}

const squareNoir = createSquare("black", 2, 15, 15, 15, 15, false);
const squareGreen = createSquare("green", 2, 30, 30, 30, 30, false);
const squareRed = createSquare("red", 0, 50, 50, 50, 50, true);

document.addEventListener("DOMContentLoaded", function () {
	canvasDom = document.getElementById("canvas");

	ctx = canvasDom.getContext("2d");

	displaySquare(squareNoir);
	displaySquare(squareGreen);
	displaySquare(squareRed);
});

function displaySquare(square) {
	if (square.isFill) {
		ctx.fillStyle = square.color;
		ctx.fillRect(square.x, square.y, square.width, square.height);
	}
	ctx.lineWidth = square.bordure;
	ctx.strokeStyle = square.color;
	ctx.strokeRect(square.x, square.y, square.width, square.height);
}
