import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';
import { cmdMap } from '../models/commandmentHierarchy';
import { headerStyles } from './header.styles';
import { sharedStyles } from '../styles/shared-styles';

@customElement('app-header')
export class AppHeader extends LitElement {

	@state() completionPercentage = 0;
	@state() completedCount = 0;
	readonly totalCommandmentCount = 613;

	static styles = [headerStyles, sharedStyles];

	connectedCallback(): void {
		super.connectedCallback();
		cmdMap.getCommandments()
			.then(result => {
				this.completedCount = result.length;
				this.completionPercentage = Math.floor(this.totalCommandmentCount / result.length);
			})
	}

	render(): TemplateResult {
		return html`
			<header>
				<h1>
					Etz Mitzvot עץ מצוות
				</h1>

				<p class="subtitle">
					An interactive visual map of every commandment in the
					<abbr title="The Torah, the Law of Moses, is the first 5 books of the Hebrew Bible">Torah</abbr>.
					<br>Explore the Biblical commandments from a thousand-foot view. <a href="https://blog.judahgabriel.com/2014/04/introducing-etzmiztvotcom-rebooting.html">Learn more</a>.
				</p>
				<div class="info">
					<div>
						<h3>Instructions</h3>
						<li><strong>Hover</strong> over a commandment to see more details.</li>
						<li><strong>Tap</strong> a commandment to expand/collapse its children.</li>
						<li><strong>Click and drag</strong> to pan the commandment tree.</li>
						<li><strong>Use your mouse wheel or pinch</strong> to zoom the commandment tree.</li>
					</div>
					<div>
						<h3>Statistics</h3>
						<div class="d-flex gap-2">
							<div>
								<p>This is a work in progress. Each week we add new commandments to the tree, derived from <abbr title="Maimonides (Moshe Ben Maimon) was a preeminent rabbi of the 12th century, one of the most influential rabbis in the history of Judaism.">Maimonides'</abbr> famous list of <a href="http://en.wikipedia.org/wiki/613_mitzvot">613 commandments</a>. We blog about each addition over at the <a href="http://judahgabriel.blogspot.com/search/label/commandments%20hierarchy">Kineti blog</a>.</p>
								<p><strong>This project is ${this.completionPercentage}% done, with ${this.completedCount} of 613 commandments mapped.</strong></p>
							</div>
							<sl-progress-ring value="${this.completionPercentage}"></sl-progress-ring>
						</div>
					</div>
				</div>
			</header>
		`;
	}
}
