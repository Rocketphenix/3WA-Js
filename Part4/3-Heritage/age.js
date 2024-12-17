export default class Age {
	#age;

	constructor(age) {
		this.#age = age;
	}

	validation() {
		if (isNaN(this.#age) || this.#age < 0 || this.#age > 150) {
			this.#age = "l'âge doit être un nombre entre 0 et 150";
		} else {
			return this.#age;
		}
	}
}
