let prenom = window.prompt("Donner votre prenom");
let nom = window.prompt("Donner votre nom");
let agePresent = parseInt(window.prompt("Donner votre age actuel"));

let dateJour = new Date().getFullYear();
let year = 2030;
let result = year - dateJour;
let age2030 = result + agePresent;

window.alert(prenom + " " + nom + " " + age2030);
