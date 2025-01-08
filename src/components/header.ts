import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';
import { headerStyles } from './header.styles';
import { sharedStyles } from '../styles/shared-styles';

@customElement('app-header')
export class AppHeader extends LitElement {
	static styles = [headerStyles, sharedStyles];

	render(): TemplateResult {
		return html`
			<header>
				<img src="/assets/icons/logo-128x128.png" alt="Etz Mitzvot logo" />
				<h1>
					<span>Etz Mitzvot</span>
					<span lang="he">עץ מצוות</span>
				</h1>
			</header>
		`;
	}
}
