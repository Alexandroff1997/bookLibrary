import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';

export class MainView extends AbstractView {
	state = {
		list: [],
		loading: false,
		searchQuery: null,
		offset: 0
	};

	constructor(globalState) {
		super();
		this.globalState = globalState;
		this.globalState = onChange(this.globalState, this.globalStateHook.bind(this));
		this.setTitle('Book search')
	}

	globalStateHook(path) {
		console.log(path);
		if (path === 'favorites') {
			console.log(path);
		}
	}

	render() {
		const elem = document.createElement('div');
		elem.append(new Search(this.state).render());
		this.app.innerHTML = '';
		this.app.append(elem);
		this.renderHeader();
		this.globalState.favorites.push('ldd');
	}

	renderHeader() {
		const header = new Header(this.globalState).render();
		this.app.prepend(header);
	}
}