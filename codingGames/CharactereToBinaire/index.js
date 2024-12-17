/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const MESSAGE = window.prompt("quelque chose");

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let block = false;
let binaire;
let nbr0 = 0;
let messageResult = "";
let messageModif = "";

for (let i = 0; i < MESSAGE.length; i++) {
	let premodif = MESSAGE.charCodeAt(i).toString(2);
	if (premodif.length < 7) {
		premodif = "0" + premodif;
	}
	messageModif += premodif;
}

let actuelle = null;
for (let i = 0; i < messageModif.length; i++) {
	if (messageModif[i] != actuelle) {
		actuelle = messageModif[i];
		if (messageResult != "") messageResult += " ";
		if (actuelle == 1) messageResult += "0 ";
		else messageResult += "00 ";
	}
	messageResult += "0";
}

console.log(messageResult);
