import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}
	
	render() {
		this.el.classList.add('search');
		this.el.innerHTML = `
			<div class="search__wrapper">
				<input 
					class="search__input"
					type="text" 
					placeholder="Find a book or author..."
					value="${this.state.searchQuery ? this.state.searchQuery : ''}"
				/>
				<img src="/static/logo-search.svg" alt="search-icon" />
			</div>
			<div class="search__button">
				<button aria-label="Search">
					<img src="/static/logo-search-input.svg" alt="search-icon" />
				</button>
			</div>
		`;
		return this.el;
	}
}