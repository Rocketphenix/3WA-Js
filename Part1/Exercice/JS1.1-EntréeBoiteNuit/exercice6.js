/**
 * Si il est mineur refusé
 * si il est majeur autorisé
 * mais si il est majeur mais connu pas la boite il est refusé
 */

var age = 23;
var connu = false;

if (age < 18) {
	console.log("refusé");
} else if (age >= 18) {
	if (connu) {
		console.log("refusé");
	} else {
		console.log("accepté");
	}
}
