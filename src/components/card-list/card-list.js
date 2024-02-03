import { DivComponent } from '../../common/div-component';
import './card-list.css';

export class CardList extends DivComponent {
	constructor(globalState, parentState) {
		super();
		this.globalState = globalState;
		this.parentState = parentState;
	}
	
	render() {
		if (this.parentState.loading) {
			this.el.innerHTML = `<div class="card_list_loader">Loading...</div>`;
			return this.el;
		}
		this.el.classList.add('card_list');
		this.el.innerHTML = `
			<h1>Books Found: ${this.parentState.list.length}</h1>
		`
		return this.el;
	}
}