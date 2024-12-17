/* Exercice - Move Your Div
Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.
*/

var carreRouge = document.querySelector(".red");
var modal = document.querySelector(".modal");
var btnMoveDiv = document.getElementById("moveDiv");
var btnhideModal = document.getElementById("hideModal");

var nbrPress = 0;
btnMoveDiv.addEventListener("click", function () {
	nbrPress++;
	switch (nbrPress) {
		case 1:
			carreRouge.style.left = "100%";
			carreRouge.style.top = 0;
			carreRouge.style.transform = "translateX(-100%)";
			if (modal.classList.contains("active")) modal.classList.toggle("active");
			break;
		case 2:
			carreRouge.style.left = "100%";
			carreRouge.style.top = "100%";
			carreRouge.style.transform = "translate(-100%, -100%)";
			break;
		case 3:
			carreRouge.style.left = 0;
			carreRouge.style.top = "100%";
			carreRouge.style.transform = "translate(0, -100%)";
			break;
		default:
			carreRouge.style.left = 0;
			carreRouge.style.top = 0;
			carreRouge.style.transform = "translate(0, 0)";
			nbrPress = 0;
			modal.classList.toggle("active");
			break;
	}
});

btnhideModal.addEventListener("click", function () {
	modal.classList.remove("active");
});
