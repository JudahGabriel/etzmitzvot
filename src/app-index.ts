import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './components/header';
import './styles/global.css';
import { router } from './router';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
	main {
	  padding-left: 16px;
	  padding-right: 16px;
	  padding-bottom: 16px;
	}
  `;

  constructor() {
	super();
  }

  connectedCallback(): void {
	super.connectedCallback();
	// cmdMap.getCommandments()
	// 	.then(result => window.mitzvot = result);
  }

  firstUpdated() {
	router.addEventListener('route-changed', () => {
	  if ("startViewTransition" in document) {
		(document as any).startViewTransition(() => this.requestUpdate());
	  }
	  else {
		this.requestUpdate();
	  }
	});
  }

  render() {
	// router config can be round in src/router.ts
	return html`
		<app-header></app-header>
		${router.render()}
	`;
  }
}
