import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
	constructor(globalState, cardState) {
		super();
		this.globalState = globalState;
		this.cardState = cardState;
	}

	#addToFavorites() {
		this.globalState.favorites.push(this.cardState);
	}

	#deleteFromFavorites() {
		this.globalState.favorites = this.globalState.favorites.filter(el => el.key !== this.cardState.key);
	}
	
	render() {
		this.el.classList.add('card');
		const existInFavorites = this.globalState.favorites.find(el => el.key === this.cardState.key);
		this.el.innerHTML = `
			<div class="card__image">
				<img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Book cover" />
			</div>
			<div class="card__info">
				<div class="card__tag">
					${this.cardState.subject ? this.cardState.subject[0] : 'Not found'}
				</div>
				<div class="card__name">
					${this.cardState.title}
				</div>
				<div class="card__author">
					${this.cardState.author_name ? this.cardState.author_name[0] : 'Not found'}
				</div>
				<div class="card__footer">
					<button class="button__add ${existInFavorites ? 'button__active' : ''}">
						${existInFavorites 
							? '<img class="button_favorite" src="/static/logo-favorites.svg" />'
							: '<img class="button_favorite" src="/static/logo-favorite-book.svg" />'
						}
					</button>
				</div>
			</div>
		`
		existInFavorites 
			? this.el.querySelector('button').addEventListener('click', this.#deleteFromFavorites.bind(this))
			: this.el.querySelector('button').addEventListener('click', this.#addToFavorites.bind(this));
		
		return this.el;
	}
}