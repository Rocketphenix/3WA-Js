export class Personnage {
	constructor(hp, mana, force, rapidite) {
		this.hp = hp;
		this.mana = mana;
		this.force = force;
		this.speed = rapidite;
	}

	infoStat() {
		let infoHP = document.createElement("div");
		infoHP.innerText = this.hp + " PV";

		let infoMana = document.createElement("div");
		infoMana.innerText = this.mana + " PM";

		let infoForce = document.createElement("div");
		infoForce.innerText = this.force + " force";

		let infoSpeed = document.createElement("div");
		infoSpeed.innerText = this.speed + " vitesse";

		let vide = document.createElement("div");
		vide.innerText = "-----------------";

		statMenu.appendChild(infoHP);
		statMenu.appendChild(infoMana);
		statMenu.appendChild(infoForce);
		statMenu.appendChild(infoSpeed);
		statMenu.appendChild(vide);
	}
}
