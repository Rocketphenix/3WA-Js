export class Request {
	getInputs(p1, p2) {
		this.r1 = p1;
		this.r2 = p2;
	}

	outputs() {
		console.log(this.r1, this.r2);
	}
}
