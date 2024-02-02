import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
	constructor() {
		super();
		this.setTitle('Book search')
	}

	render() {
		const elem = document.createElement('div');
		elem.innerHTML = 'Test';
		this.app.innerHTML = '';
		this.app.append(elem);
	}
}