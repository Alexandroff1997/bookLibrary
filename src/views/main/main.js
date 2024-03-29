import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';

export class MainView extends AbstractView {
	state = {
		list: [],
		loading: false,
		searchQuery: null,
		offset: 0,
		numFound: 0
	};

	constructor(globalState) {
		super();
		this.globalState = globalState;
		this.globalState = onChange(this.globalState, this.globalStateHook.bind(this));
		this.state = onChange(this.state, this.stateHook.bind(this));
		this.setTitle('Book search')
	}

	destroy() {
		onChange.unsubscribe(this.globalState);
		onChange.unsubscribe(this.state);
	}

	globalStateHook(path) {
		if (path === 'favorites') {
			this.render();
		}
	}

	async stateHook(path) {
		if (path === 'searchQuery') {
			this.state.loading = true;
			const data = await this.loadList(this.state.searchQuery, this.state.offset);
			this.state.loading = false;
			this.state.numFound = data.numFound;
			this.state.list = data.docs; 
		}
		if (path === 'loading') {
			this.render();
		}

		if (path === 'list') {
			this.render();
		}
	}

	async loadList(query, offset) {
		const res = await fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}`);
		return res.json();
	}

	render() {
		const elem = document.createElement('div');
		elem.innerHTML = `<h1>Books Found: ${this.state.numFound}</h1>`
		elem.append(new Search(this.state).render());
		elem.append(new CardList(this.globalState, this.state).render());
		this.app.innerHTML = '';
		this.app.append(elem);
		this.renderHeader();
	}

	renderHeader() {
		const header = new Header(this.globalState).render();
		this.app.prepend(header);
	}
}