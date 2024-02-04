import { DivComponent } from '../../common/div-component.js';
import { Card } from '../card/card.js';
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
			<h1>Books Found: ${this.parentState.numFound}</h1>
		`
		for (const card of this.parentState.list) {
			this.el.append(new Card(this.globalState, card).render());
		}
		return this.el;
	}
}