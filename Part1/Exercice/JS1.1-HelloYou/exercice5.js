/**
 * Créer ici le projet « Hello You ».
 */

// Base
const userPrenom = window.prompt("Quel est votre prénom");

console.log("Salut " + userPrenom);

// Bonus 1
const userNom = window.prompt("Quel est votre nom");
const userbirthYear = parseInt(window.prompt("Quel est ton année de naissance"));

let date = new Date(); // Récupère la date d'aujourd'hui

const userAge = date.getFullYear() - userbirthYear;

console.log(`Salut ${userPrenom} ` + userNom + `, cette année tu a ${userAge} ans !`);

// Bonus 3
const userbirthDay = parseInt(window.prompt("Quel est votre jour de naissance"));
const userbirthMonth = parseInt(window.prompt("Quel est votre mois de naissance")) - 1;

let dateDeNaissance = new Date(userbirthYear, userbirthMonth, userbirthDay); // Regroupe l'age de l'user et la transforme en date informatique

let diff = Date.now() - dateDeNaissance.getTime(); // Différence entre la date d'aujourd'hui et la naissance user
let age = new Date(diff); // La diférence est mis en milliseconde on remet en date normal
let ageExact = age.getFullYear() - 1970; // On veut seulement l'année pour l'age et on retire 1970 (la date ou les ordinateur on commencer a compter)

console.log(`Salut ${userPrenom} ` + userNom + `, cette année tu a ${age} ans !`);
