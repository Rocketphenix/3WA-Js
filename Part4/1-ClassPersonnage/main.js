import { Assasin } from "./assasin.js";
import { Personnage } from "./personage.js";

let statMenu = null;
var ass = new Assasin();
var guerrier = new Personnage(20, 5, 30, 15);

document.addEventListener("DOMContentLoaded", function () {
	statMenu = document.getElementById("statMenu");
	guerrier.infoStat();
	ass.msg();
});
