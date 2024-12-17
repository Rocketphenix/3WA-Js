import User from "./User.js";

let formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function (e) {
	e.preventDefault();

	let nom = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let age = document.getElementById("age").value;
	let user = new User(nom, email, age);

	if (user.error == false) {
		let stockage = {
			nom: user.nom,
			email: user.email,
			age: user.age,
		};
		localStorage.setItem("user", JSON.stringify(stockage));
	}
});

let recup = JSON.parse(localStorage.getItem("user"));

if (recup) {
	console.log(recup.age);
}
