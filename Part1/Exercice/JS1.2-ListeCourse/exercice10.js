/**
 * Gérer une liste de courses en affichant les informations dans la console du navigateur web.
 *
 * 	La liste de courses est stockée dans une seule variable.
 * 	Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
 * 	Les fonctionnalités de gestion de la liste de courses sont :
 * 		Ajouter un produit par son nom
 * 		Supprimer un produit ayant un nom spécifique
 * 		Supprimer tous les produits
 * 		Afficher la taille et le contenu de la liste
 *
 * 	Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
 * 	Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
 * 	Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
 * 		Ajouter 4 produits simples puis afficher les informations
 * 		Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
 * 		Supprimer tous les produits puis afficher les informations
 */

var listeCourse = ["pate", "nutella", "beurre"];

console.log(listeCourse);

function addProduit(liste, newItem) {
	liste.push(newItem);
}

function delProduit(liste, delItem) {
	return liste.filter((item) => item !== delItem);
}

function voidProduit(liste) {
	return (liste = []);
}

function afficheListe(liste) {
	document.write(`<h2>Il y a ${liste.length} produit dans la liste</h2>`);
	document.write(`<ul>`);
	for (const produit of liste) {
		document.write(`<li>${produit}</li>`);
	}
	document.write(`</ul>`);
}
afficheListe(listeCourse);

addProduit(listeCourse, "patate");
console.log(listeCourse);
listeCourse = delProduit(listeCourse, "beurre");
console.log(listeCourse);
listeCourse = voidProduit(listeCourse);
console.log(listeCourse);

// Rajout DOM
var titreliste = document.getElementById("titreliste");
var ulListe = document.getElementById("liste");

var addProdInput = document.getElementById("addProdInput");
var addProdBtn = document.getElementById("addProdBtn");
var suppProdInput = document.getElementById("suppProdInput");
var suppProdBtn = document.getElementById("suppProdBtn");
var voidListeBtn = document.getElementById("voidListeBtn");

function afficheListeDOM(liste) {
	titreliste.innerText = `Il y a ${liste.length} produit dans la liste`;
	ulListe.innerHTML = "";

	for (const produit of liste) {
		console.log(produit);
		var newLi = document.createElement("li");
		ulListe.appendChild(newLi);
		newLi.innerText = produit;
	}
}

addProdBtn.addEventListener("click", function () {
	addProduit(listeCourse, addProdInput.value);
	addProdInput.value = "";
	afficheListeDOM(listeCourse);
});
suppProdBtn.addEventListener("click", function () {
	listeCourse = delProduit(listeCourse, suppProdInput.value);
	suppProdInput.value = "";
	afficheListeDOM(listeCourse);
});
voidListeBtn.addEventListener("click", function () {
	listeCourse = voidProduit(listeCourse);
	afficheListeDOM(listeCourse);
});
