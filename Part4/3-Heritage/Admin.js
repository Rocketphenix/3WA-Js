import User from "./User.js";

export class Admin extends User {
	canEditArticles() {
		return true;
	}
}
