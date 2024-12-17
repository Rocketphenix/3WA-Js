import Age from "./Age.js";

let labelNom = document.getElementById("labelNom");
let labelEmail = document.getElementById("labelEmail");

export default class User {
	#nom;
	#email;

	constructor(nom, email, age) {
		this.#nom = nom;
		this.#email = email;
		this.age = new Age(age);

		this.errorNom = true;
		this.errorEmail = true;
		this.errorAge = true;

		this.error = true;
		this.check();
	}

	get nom() {
		return this.#nom;
	}
	get email() {
		return this.#email;
	}

	get info() {
		return `${this.#nom} ${this.#email} ${this.age}`;
	}

	check() {
		if (this.#nom == "") {
			labelNom.classList.add("form-error");
			labelNom.innerText = "Vous devez indiquer votre nom";
			this.errorNom = true;
		} else {
			labelNom.classList.remove("form-error");
			labelNom.innerText = "Nom";
			this.errorNom = false;
		}

		let presenceA = false;
		let emailvalide = false;
		for (let i = 0; i < this.#email.length; i++) {
			if (presenceA == false) {
				if (this.#email[i] == "@") {
					presenceA = true;
				}
			} else if (this.#email[i] == ".") {
				emailvalide = true;
			}
		}
		if (this.#email == "") {
			labelEmail.classList.add("form-error");
			labelEmail.innerText = "Vous devez indiquer votre adresse Email";
			this.errorEmail = true;
		} else if (emailvalide == false) {
			labelEmail.classList.add("form-error");
			labelEmail.innerText = "Vous devez indiquer une adresse Email valide";
			this.errorEmail = true;
		} else {
			labelEmail.classList.remove("form-error");
			labelEmail.innerText = "Email";
			this.errorEmail = false;
		}
		this.errorAge = this.age.validation();

		if (this.errorNom == true || this.errorEmail == true || this.errorAge == true) {
			this.error = true;
		} else {
			this.error = false;
		}
	}
}
