import { Request } from "./Inputs.js";

var inputs = new Request();

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("valider").addEventListener("click", function () {
		let p1 = document.getElementById("p1").value;
		let p2 = document.getElementById("p2").value;

		inputs.getInputs(p1, p2);
		inputs.outputs();
	});
});
