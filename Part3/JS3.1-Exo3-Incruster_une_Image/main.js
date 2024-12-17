"use strict";

let canvasDom = null;
let ctx = null;
let img = new Image();
img.src = "https://picsum.photos/200/300";

document.addEventListener("DOMContentLoaded", function () {
	canvasDom = document.getElementById("canvas");
	ctx = canvasDom.getContext("2d");

	img.addEventListener("load", function () {
		displayImg();
	});
});

function displayImg() {
	ctx.drawImage(img, 75, 50);
}
