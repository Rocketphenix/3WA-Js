for (let round = 0; round < 3; round++) {
	const width = 2; // the number of cells on the X axis
	const height = 2; // the number of cells on the Y axis

	if (typeof y1 == "undefined" || typeof x1 == "undefined") {
		var y1, x1, y2, x2, y3, x3;
		y1 = -1;
		x1 = -1;
	}
	let tableau = ["00", "0."];
	let row;

	let node1 = false;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (tableau[i][j] == "0" && (i > y1 || j > x1)) {
				y1 = i;
				x1 = j;
				node1 = true;

				let position = tableau[y1].indexOf(0, x1 + 1);
				if (position != -1) {
					y2 = y1;
					x2 = position;
				} else {
					x2 = -1;
					x2 = -1;
				}
				break;
			}
		}
		if (node1 == true) {
			break;
		}
	}

	let posX3Tab = tableau.map((row) => row[x1]);
	for (let i = 0; i < height; i++) {
		if (y1 < i && posX3Tab[i] == "0") {
			x3 = x1;
			y3 = i;
			break;
		}
	}

	if (y3 == undefined) {
		y3 = -1;
		x3 = -1;
	}

	// Three coordinates: a node, its right neighbor, its bottom neighbor
	console.log(x1, y1, x2, y2, x3, y3);

	setTimeout(() => {
		console.log("lose");
	}, 150);
}
