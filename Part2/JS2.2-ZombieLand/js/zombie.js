"use strict";

var zombie = {
	imgZombie: null,
	animationZombie: null,
	imgPosition: 0,
	zombieSortie: 0,
	zombiePositionVertical: 0,
	zombiePositionHorizontal: 0,
};

window.addEventListener("load", function () {
	zombie.imgZombie = document.getElementById("zombietomb");
	zombie.animationZombie = window.requestAnimationFrame(zombieSort);
});

function zombieSort() {
	zombie.zombieSortie++;
	zombie.imgZombie.style.backgroundImage = "url(./img/zombie.png)";

	zombie.imgZombie.style.backgroundPosition = "-" + zombie.imgPosition + "px";
	zombie.imgPosition += 100;

	if (zombie.zombieSortie >= 11) {
		zombie.animationZombie = null;
		document.addEventListener("keydown", function (e) {
			zombieMove(e);
		});
	} else {
		setTimeout(() => {
			zombie.animationZombie = window.requestAnimationFrame(zombieSort);
		}, 100);
	}
}

function zombieMove(e) {
	switch (e.key) {
		case "ArrowRight":
			zombie.zombiePositionVertical += 20;
			zombie.imgZombie.style.transform = "scaleX(-1)";
			break;
		case "ArrowLeft":
			zombie.zombiePositionVertical -= 20;
			zombie.imgZombie.style.transform = "scaleX(1)";
			break;
		case "ArrowDown":
			zombie.zombiePositionHorizontal += 20;
			break;
		case "ArrowUp":
			zombie.zombiePositionHorizontal -= 20;
			break;
		default:
			break;
	}
	zombie.imgZombie.style.left = zombie.zombiePositionVertical + "px";
	zombie.imgZombie.style.top = zombie.zombiePositionHorizontal + "px";
}
