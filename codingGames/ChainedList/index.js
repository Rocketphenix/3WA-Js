const N = Math.round(Math.random() * 100); // nombre de cheval

class Cheval {
	constructor(cheval) {
		this.cheval = cheval; // La valeur du nœud
		this.next = null; // Référence au prochain nœud
	}
}

class ListChaval {
	constructor() {
		this.head = null; // Le début de la liste
	}

	// Ajouter un élément à la fin de la liste
	append(cheval) {
		const newCheval = new Cheval(cheval);

		if (this.head === null || this.head.cheval >= cheval) {
			newCheval.next = this.head;
			this.head = newCheval; // Si la liste est vide, le premier nœud devient la tête
		} else {
			let current = this.head;
			while (current.next !== null && current.next.cheval < cheval) {
				current = current.next; // Parcours de la liste jusqu'au dernier nœud
			}
			newCheval.next = current.next;
			current.next = newCheval; // Ajouter le nouveau nœud à la fin
		}
	}

	// Afficher tous les éléments de la liste
	printList() {
		let current = this.head;
		while (current) {
			console.error(current.cheval); // Afficher les données du nœud actuel
			current = current.next; // Passer au nœud suivant
		}
	}

	petitEcart() {
		let ecart = 10000000;
		let current = this.head;
		let chevalSuivant = current.next;

		while (chevalSuivant) {
			if (chevalSuivant.cheval - current.cheval < ecart) {
				ecart = chevalSuivant.cheval - current.cheval;
			}

			current = current.next;
			chevalSuivant = chevalSuivant.next;
		}
		return ecart;
	}
}

// Création de la liste chaînée
let listCheval = new ListChaval();

for (let i = 0; i < N; i++) {
	const pi = Math.round(Math.random() * 10000);

	listCheval.append(pi); // Ajouter chaque chiffre à la liste
}

console.log(listCheval.petitEcart());
