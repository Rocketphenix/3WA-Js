"use strict";

var balle = document.getElementById("ball");
var body = document.querySelector("body");
balle.style.left = "1px";

var animationID = null;
window.addEventListener("load", function () {
	animationID = window.requestAnimationFrame(bounce);
	animationActiver = true;
});

var horizontal = true;
var vertical = true;
var left = 100;
var haut = 100;
function bounce() {
	// Relancé l'animation
	animationID = window.requestAnimationFrame(bounce);
	if (vertical) {
		left++;
	} else {
		left--;
	}
	if (horizontal) {
		haut++;
	} else {
		haut--;
	}
	balle.style.left = left + "px";
	balle.style.top = haut + "px";
	if (left >= window.innerWidth - 40) {
		vertical = false;
	}
	if (left <= 0) {
		vertical = true;
	}
	if (haut >= window.innerHeight - 40) {
		horizontal = false;
	}
	if (haut <= 0) {
		horizontal = true;
	}
}

var animationActiver;
window.addEventListener("click", function () {
	if (animationActiver === true) {
		window.cancelAnimationFrame(animationID);
		animationActiver = false;
	} else {
		animationID = window.requestAnimationFrame(bounce);
		animationActiver = true;
	}
});

document.getElementById("speed").addEventListener("click", function () {
	animationID = window.requestAnimationFrame(bounce);
});
