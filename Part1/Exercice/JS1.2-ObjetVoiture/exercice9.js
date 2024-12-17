/**
 * Créer puis afficher en HTML un objet représentant une voiture :
 *
 * 	La marque de la voiture
 * 	Son année de fabrication
 * 	Sa date d'achat
 * 	La liste des passagers (au moins 2), avec le prénom de chacun des passagers
 *
 * Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
 * On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe Date :
 */

let voiture = {
	marque: "toyota",
	anneeFabrication: 2005,
	dateAchat: new Date("2024-04-05"),
	listePassagers: ["Valentin", "Laura"],
};

console.log(voiture);

document.write(`<ul>`);
document.write(`<li>${voiture.marque}</li>`);
document.write(`<li>${voiture.anneeFabrication}</li>`);
document.write(
	`<li>${voiture.dateAchat.getDate()}/${voiture.dateAchat.getMonth()}/${voiture.dateAchat.getFullYear()}</li>`
);
document.write(`<li>`);
for (let passager of voiture.listePassagers) {
	document.write(`${passager}, `);
}
document.write(`</li>`);
document.write(`</ul>`);
