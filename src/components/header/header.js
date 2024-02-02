import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
	constructor(globalState) {
		super();
		this.globalState = globalState;
	}
	
	render() {
		this.el.classList.add('header');
		this.el.innerHTML = `
			<div>
				<img class="imgStyles" src="/static/logo-icon.svg" alt="logo" />
			</div>
			<div class="menu">
				<a class="menu__item" href="#">
					<img class="imgStyles" src="/static/logo-search.svg" alt="logo-search" />
					Book search
				</a>
				<a class="menu__item" href="#favorites">
					<img class="imgStyles" src="/static/logo-favorites.svg" alt="logo-favorites" />
					Favorites
					<div class="menu__counter">
						${this.globalState.favorites.length}
					</div>
				</a>
			</div>
		`;
		return this.el;
	}
}