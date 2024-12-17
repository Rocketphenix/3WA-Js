let url = "https://api.thecatapi.com/v1/images/search";

let grid = document.getElementById("grid");

function afficheImg(data) {
	let carte = document.createElement("div");
	carte.classList.add("carte");

	let titre = document.createElement("h3");
	titre.innerText = data[0].id;
	let catImg = document.createElement("img");
	catImg.setAttribute("src", data[0].url);

	carte.appendChild(titre);
	carte.appendChild(catImg);

	grid.appendChild(carte);
}

for (let i = 0; i < 10; i++) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => afficheImg(data))
		.catch((err) => console.error(err));
}
