/**
 * Déclarer une variable « colors » contenant les valeurs "Rouge" et "Bleu".
 * Afficher "Bleu" dans la console. En utilisant le tableau, hein !
 */

let colors = ["Rouge"];

colors.push("Bleu");

console.log(colors[1]);

/**
 * Part 2 Liste d'invité
 * créez un tableau qui contiendra la liste des prénoms de vos invités.
 *
 * Puis à l'aide d'une boucle for, parcourez ce tableau et afficher la liste des invités sous forme de liste à puce
 * avec à chaque fois le prénom puis le format du carton nécessaire.
 */

let listeInvite = ["Valentin", "Laura", "nomgrand1", "petit"];
let nbrPetit = 0;
let nbrMoyen = 0;
let nbrGrand = 0;

document.write(`<ul>`);
for (let invite of listeInvite) {
	document.write(`<li>${invite}`);
	if (invite.length > 8) {
		document.write(" GRAND");
		nbrGrand++;
	} else if (invite.length > 6 && invite.length <= 8) {
		document.write(" MOYEN");
		nbrMoyen++;
	} else {
		document.write(" PETIT");
		nbrPetit++;
	}
	document.write(`</li>`);
}
document.write(`</ul>`);
document.write(`${nbrPetit} petit carton, ${nbrMoyen} carton moyen, ${nbrGrand} grand carton`);
