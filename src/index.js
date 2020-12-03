import domController from "./DomController.js";

class App {
	constructor() {
		this.domController = domController;
	}
	init() {
		this.domController.init();
	}
}

const app = new App();
app.init();
