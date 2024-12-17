let labelAge = document.getElementById("labelAge");

export default class Age {
	#age;
	constructor(age) {
		this.#age = age;
		this.validation();
	}

	get age() {
		return this.#age;
	}

	validation() {
		if (!isNaN(this.#age) && this.#age > 0 && this.#age < 150) {
			labelAge.classList.remove("form-error");
			labelAge.innerText = "Age";
			return false;
		} else {
			labelAge.classList.add("form-error");
			if (isNaN(this.#age)) {
				labelAge.innerText = "Votre age doit être un nombre";
			} else if (this.#age == "") {
				labelAge.innerText = "Vous devez indiquer votre age";
			} else {
				labelAge.innerText = "Votre age doit être compris entre 0 et 150 ans";
			}
			return true;
		}
	}
}
