import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';

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
		elem.innerHTML = `Number of books: ${this.globalState.favorites.length}`;
		this.app.innerHTML = '';
		this.app.append(elem);
		this.globalState.favorites.push('ldd');
	}
}