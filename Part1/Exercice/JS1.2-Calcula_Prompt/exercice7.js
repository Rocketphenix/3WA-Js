/**
 * Créer ici le projet « Calculaprompt ».
 */
var premierNbr;
var operateur;
var deuxiemeNbr;

do {
	premierNbr = parseInt(prompt("Votre premier nombre"));
} while (isNaN(premierNbr));

do {
	operateur = prompt("Quel opération");

	if (operateur == "÷") operateur = "/";
	if (["x", "."].includes(operateur)) operateur = "*";

	var verif = false;
	// On peut aussi l'écrire: !["+", "-", "*", "/", "÷", "x", "."].includes(operateur) || operateur === ""
	if (operateur === "+" || operateur === "-" || operateur === "*" || operateur === "/") {
		verif = true;
	} else verif = false;
} while (!verif);

do {
	deuxiemeNbr = parseInt(prompt("Votre deuxieme nombre"));
} while (isNaN(deuxiemeNbr));

if (!isNaN(premierNbr)) {
	if (!isNaN(deuxiemeNbr)) {
		document.write(`<p> ${premierNbr} ${operateur} ${deuxiemeNbr}`);

		var resultat;
		var pasUnOP = false;
		switch (operateur) {
			case "+":
				resultat = premierNbr + deuxiemeNbr;
				break;

			case "-":
				resultat = premierNbr - deuxiemeNbr;
				break;

			case "*":
				resultat = premierNbr * deuxiemeNbr;
				break;

			case "/":
				resultat = premierNbr / deuxiemeNbr;
				break;
			default:
				pasUnOP = true;
				break;
		}
		if (pasUnOP) {
			console.error(`${operateur} n'est pas un opérateur`);
		} else {
			document.write(` est égale a ${resultat} </p>`);
		}
	} else {
		console.error(`${deuxiemeNbr} n'est pas un nombre`);
	}
} else {
	console.error(`${premierNbr} n'est pas un nombre`);
}

// Calculatrice

// Initialisation bouton
var nbr0 = document.getElementById("nbr0");
var nbr1 = document.getElementById("nbr1");
var nbr2 = document.getElementById("nbr2");
var nbr3 = document.getElementById("nbr3");
var nbr4 = document.getElementById("nbr4");
var nbr5 = document.getElementById("nbr5");
var nbr6 = document.getElementById("nbr6");
var nbr7 = document.getElementById("nbr7");
var nbr8 = document.getElementById("nbr8");
var nbr9 = document.getElementById("nbr9");
var calcul = document.getElementById("calcul");
var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var fois = document.getElementById("fois");
var diviser = document.getElementById("diviser");
var valider = document.getElementById("valider");
var vider = document.getElementById("vider");
var retour = document.getElementById("retour");
var virgule = document.getElementById("virgule");

var nbrUn = "";
var op = "";
var nbrDeux = "";

// Ajouter un nombre
function addNbr(nbr) {
	if (op == "") {
		nbrUn = nbrUn + nbr;
		calcul.innerText = nbrUn;
	} else {
		nbrDeux = nbrDeux + nbr;
		calcul.innerText = nbrDeux;
	}
}
nbr0.addEventListener("click", function () {
	addNbr("0");
});

nbr1.addEventListener("click", function () {
	addNbr("1");
});
nbr2.addEventListener("click", function () {
	addNbr("2");
});
nbr3.addEventListener("click", function () {
	addNbr("3");
});
nbr4.addEventListener("click", function () {
	addNbr("4");
});
nbr5.addEventListener("click", function () {
	addNbr("5");
});
nbr6.addEventListener("click", function () {
	addNbr("6");
});
nbr7.addEventListener("click", function () {
	addNbr("7");
});
nbr8.addEventListener("click", function () {
	addNbr("8");
});
nbr9.addEventListener("click", function () {
	addNbr("9");
});
virgule.addEventListener("click", function () {
	addNbr(".");
});

vider.addEventListener("click", function () {
	nbrUn = "";
	nbrDeux = "";
	op = "";
	calcul.innerText = nbrUn;
});
retour.addEventListener("click", function () {
	if (op == "") {
		nbrUn = nbrUn.substring(0, nbrUn.length - 1);
		calcul.innerText = nbrUn;
	} else {
		nbrDeux = nbrDeux.substring(0, nbrDeux.length - 1);
		calcul.innerText = nbrDeux;
	}
});

// Choix de l'operateur
plus.addEventListener("click", function () {
	op = "+";
});
moins.addEventListener("click", function () {
	op = "-";
});
fois.addEventListener("click", function () {
	op = "*";
});
diviser.addEventListener("click", function () {
	op = "/";
});

// Calcul
valider.addEventListener("click", function () {
	nbrUn = parseFloat(nbrUn);
	nbrDeux = parseFloat(nbrDeux);
	var resultat;
	var erreur = false;
	switch (op) {
		case "+":
			resultat = nbrUn + nbrDeux;
			break;

		case "-":
			resultat = nbrUn - nbrDeux;
			break;

		case "*":
			resultat = nbrUn * nbrDeux;
			break;

		case "/":
			resultat = nbrUn / nbrDeux;
			break;
		default:
			erreur = true;
			break;
	}
	if (erreur) {
		calcul.innerText = "Erreur";
		nbrUn = "";
		nbrDeux = "";
		op = "";
	} else {
		calcul.innerText = resultat;
		nbrUn = "";
		nbrDeux = "";
		op = "";
	}
});
