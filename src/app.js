import { FavoritesView } from './views/favorites/favorites.js';
import { MainView } from './views/main/main.js';

class App {
	globalState = {
		favorites: []
	};

	routes = [
		{ path: "", view: MainView },
		{ path: "#favorites", view: FavoritesView },
	];

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = this.routes.find(el => el.path == location.hash).view;
		this.currentView = new view(this.globalState);
		this.currentView.render();
	}
}

new App();