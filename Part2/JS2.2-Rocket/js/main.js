"use strict";

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var btnLauch = document.getElementById("firing-button");
var btnCancel = document.getElementById("cancel-button");
var btnReset = document.getElementById("reset-button");
var rocket = document.getElementById("rocket");
var billboard = document.querySelector("#billboard span");
var body = document.querySelector("body");

var chrono = null;
var seconde = 10;
var miliseconde = 0;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function countdown() {
	btnLauch.classList.add("disabled");
	btnLauch.disabled = true;
	rocket.src = "./images/rocket2.gif";
	chrono = window.setInterval(() => {
		if (miliseconde > 1) {
			miliseconde--;
		} else if (seconde >= 1) {
			seconde--;
			miliseconde = 99;
		} else {
			seconde = 0;
			miliseconde = 0;
			decolage();
			clearInterval(chrono);
		}
		displayChrono(seconde, miliseconde);
	}, 10);

	btnCancel.addEventListener("click", stopCount);
}

function displayChrono(seconde, miliseconde) {
	billboard.innerHTML = `${seconde < 10 ? "0" + seconde : seconde} ${
		miliseconde < 10 ? "0" + miliseconde : miliseconde
	}`;
}

function decolage() {
	rocket.src = "./images/rocket3.gif";
	rocket.classList.add("tookOff");

	btnReset.addEventListener("click", reset);
}

function aleatoire(max) {
	return Math.round(Math.random() * max);
}

function etoiles(nbrStar) {
	for (let i = 0; i < nbrStar; i++) {
		let star = document.createElement("div");
		let starTaille = aleatoire(3);

		star.classList.add("star");
		switch (starTaille) {
			case 1:
				star.classList.add("tiny");
				break;
			case 2:
				star.classList.add("normal");
				break;
			default:
				star.classList.add("big");
				break;
		}
		let posLeft = aleatoire(100);
		star.style.left = posLeft + "%";
		let posTop = aleatoire(100);
		star.style.top = posTop + "%";

		body.appendChild(star);
	}
}

function stopCount() {
	clearInterval(chrono);
	chrono = null;
	rocket.src = "./images/rocket1.png";
	btnLauch.classList.remove("disabled");
	seconde = 10;
	miliseconde = 0;
	displayChrono(seconde, miliseconde);

	btnCancel.addEventListener("click", function () {});
}
function reset() {
	rocket.src = "./images/rocket1.png";
	rocket.classList.remove("tookOff");
	btnLauch.classList.remove("disabled");
	seconde = 10;
	miliseconde = 0;
	displayChrono(seconde, miliseconde);

	btnReset.addEventListener("click", function () {});
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
btnLauch.addEventListener("click", countdown);

displayChrono(seconde, miliseconde);

let nbrStar = aleatoire(150);
etoiles(nbrStar);
