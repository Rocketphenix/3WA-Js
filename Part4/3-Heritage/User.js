import Age from "./age.js";

export default class User {
	#name;
	#firstName;
	#job;
	#age;

	constructor(name, firstName, age) {
		this.#name = name;
		this.#firstName = firstName;
		this.#age = new Age(age);
	}

	setName(name) {
		this.#name = name;
	}
	setFirstName(firstName) {
		this.#firstName = firstName;
	}
	set job(newjob) {
		this.#job = newjob;
	}

	get job() {
		return this.#job;
	}
	get age() {
		return this.#age.validation();
	}

	fullname() {
		return `${this.#name} ${this.#firstName}`;
	}
}

// class Age {
// 	#age;

// 	constructor(age) {
// 		this.validation(age);
// 	}

// 	validation(age) {
// 		if (isNaN(newAge) || newAge < 0 || newAge > 150) {
// 			this.#age = "l'âge doit être un nombre entre 0 et 150";
// 		} else {
// 			this.#age = age;
// 		}
// 	}
// }
