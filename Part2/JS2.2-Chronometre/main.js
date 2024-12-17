"use strict";

//var chrono = document.getElementById("chrono");
var btnChrono = document.getElementById("btnChrono");
var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
var btnReset = document.getElementById("btnReset");

/* ***********************************************************************************************
Façon qui marche pas super bien
**************************************************************************************************  */
// var time = new Date();
// var pause = new Date();
// var surplusMiliSec = 0;
// var chronoing = true;

// btnChrono.addEventListener("click", function () {
// 	if (chronoing) {
// 		let newTime = new Date();
// 		let milisec = newTime - time - surplusMiliSec;
// 		let seconde = 0;
// 		let minute = 0;

// 		console.log(milisec);
// 		for (; milisec > 1000; ) {
// 			seconde++;
// 			milisec = milisec - 1000;
// 		}
// 		for (; seconde > 60; ) {
// 			minute++;
// 			seconde = seconde - 10;
// 		}

// 		setTimeout(() => {
// 			chrono.innerText = `${minute} : ${seconde} : ${milisec}`;
// 		}, 100);
// 	}
// });

// btnStart.addEventListener("click", function () {
// 	surplusMiliSec = pause - time;
// 	console.log(surplusMiliSec);
// 	pause = 0;
// 	chronoing = true;
// });

// btnStop.addEventListener("click", function () {
// 	pause = new Date();
// 	chronoing = false;
// });

// btnReset.addEventListener("click", function () {
// 	time = new Date();
// });

/* ***********************************************************************************************
Façon qui marche
**************************************************************************************************  */

// L'objet du DOM ou sera écrit la valeur du chronomètre
let chronoDom = null;

let toto;

// On lance la mise à jour toutes les 10 millièmes de secondes soit toutes les centièmes de secondes
let updateSpead = 10;

// Initialisation du chronomètre à 0
const chrono = {
	minutes: 0,
	secondes: 0,
	centiemes: 0,
};

const init = {
	domStartButton: null,
	domResetButton: null,
};

// Timer ID
let timerId = null;

document.addEventListener("DOMContentLoaded", function () {
	toto = 0;
	// Récupération de la zone HTML
	chronoDom = document.querySelector("#chrono");

	// Récupération du bouton start/stop
	init.domStartButton = document.querySelector("#btnStart");

	// Récupération du bouton reset
	init.domResetButton = document.querySelector("#btnReset");

	// On initialise l'affichage à 0
	updateDisplay();

	// Evenement de clique sur le bouton. On démarre ou arrête le chrono et on change le texte
	init.domStartButton.addEventListener("click", start);

	init.domResetButton.addEventListener("click", reset);
});

function start() {
	if (timerId === null) {
		timerId = window.setTimeout(updateChrono, updateSpead);
		init.domStartButton.innerText = "Stop";
	} else {
		window.clearTimeout(timerId);
		timerId = null;
		init.domStartButton.innerText = "Start";
	}
}

// Evenement de clique sur le bouton reset. On initialise les valeurs
function reset() {
	chrono.minutes = 0;
	chrono.secondes = 0;
	chrono.centiemes = 0;

	init.domStartButton.innerText = "Start";
	window.clearTimeout(timerId);
	timerId = null;
	updateDisplay();
}

/** Met à jour l'affichage du chrono dans la page HTML
 *
 */
function updateChrono() {
	// On arrête si on est à 60 minutes
	if (chrono.minutes == 60 && chrono.secondes == 59) return;

	// Mofication des valeurs à afficher
	if (chrono.centiemes < 99) {
		console.log(chrono.centiemes);
		chrono.centiemes++;
	} else if (chrono.secondes < 59) {
		chrono.centiemes = 0;
		chrono.secondes++;
	} else {
		console.log("ouloulou");
		chrono.centiemes = 0;
		chrono.secondes = 0;
		chrono.minutes++;
	}

	updateDisplay();

	//on relance la mise à jour du chrono
	timerId = window.setTimeout(updateChrono, updateSpead);
}

/** Affiche les valeurs dans le HTML */
function updateDisplay() {
	// on met à jour l'affichage
	chronoDom.innerText = `${chrono.minutes < 10 ? "0" + chrono.minutes : chrono.minutes} : ${
		chrono.secondes < 10 ? "0" + chrono.secondes : chrono.secondes
	} : ${chrono.centiemes < 10 ? "0" + chrono.centiemes : chrono.centiemes}`;
}

// 00 minute  00 seconde
