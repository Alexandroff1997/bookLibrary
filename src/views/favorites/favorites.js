import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/card-list/card-list.js';

export class FavoritesView extends AbstractView {
	constructor(globalState) {
		super();
		this.globalState = globalState;
		this.globalState = onChange(this.globalState, this.globalStateHook.bind(this));
		this.setTitle('Favorites Books')
	}

	destroy() {
		onChange.unsubscribe(this.globalState);
	}

	globalStateHook(path) {
		if (path === 'favorites') {
			this.render();
		}
	}

	render() {
		const elem = document.createElement('div');
		elem.innerHTML = `<h1>Favorites</h1>`
		elem.append(new CardList(this.globalState, { list: this.globalState.favorites }).render());
		this.app.innerHTML = '';
		this.app.append(elem);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.globalState).render();
		this.app.prepend(header);
	}
}