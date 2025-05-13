import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './components/header';
import './components/sidebar';
import './styles/global.css';
import { RouteEvent, router } from './router';
import { alertService } from './services/alert-service';
import { Alert } from './models/alert';
import { sharedStyles } from './styles/shared-styles';
import { appIndexStyles } from './app-index.styles';

@customElement('app-index')
export class AppIndex extends LitElement {
	@state() activeAlert: Alert | null = null;

	static styles = [appIndexStyles, sharedStyles];

	constructor() {
		super();
	}

	connectedCallback(): void {
		super.connectedCallback();
		window.addEventListener("unhandledrejection", e => this.unhandledRejection(e));
		alertService.events.addEventListener("alert", e => this.showAlert(e as CustomEvent<Alert>));
	}

	firstUpdated() {
		router.addEventListener('route-changed', e => this.routeChanged(e as RouteEvent));	}

	render() {
		// router config can be round in src/router.ts
		return html`
		<div class="layout-container">
			<app-header></app-header>
			<main>
				<div class="router-outlet">
					${router.render()}
				</div>
				<app-sidebar></app-sidebar>
  			</main>
		</div>
		${this.renderAlert()}
	`;
	}

	renderAlert(): TemplateResult {
		return html`
		<div class="alert-container">
			<sl-alert variant="${this.activeAlert?.variant || "primary"}" ?open="${!!this.activeAlert}" closable class="alert-closable" countdown="rtl" duration="10000">
				<sl-icon slot="icon" name="info-circle"></sl-icon>
				${this.activeAlert?.message}
				<br>
				<details class="${this.activeAlert?.details ? "" : "d-none"}">
					<summary>Details</summary>
					<pre>${this.activeAlert?.details}</pre>
				</details>
			</sl-alert>
		</div>
	`;
	}

	routeChanged(e: RouteEvent): void {
		if ("startViewTransition" in document) {
			document.startViewTransition(() => this.requestUpdate());
		}
		else {
			this.requestUpdate();
		}
	}

	showAlert(e: CustomEvent<Alert>): void {
		this.activeAlert = e.detail;
	}

	unhandledRejection(e: PromiseRejectionEvent): void {
		const errorMessage = e.reason instanceof Error ? e.reason.message : "";
		const stackTrace = e.reason instanceof Error ? e.reason.stack : "";
		const alertMessage = errorMessage || "Woops, an error occurred. Please try again later.";
		console.log("Unhandled rejection occurred", stackTrace);
		alertService.showError(alertMessage, stackTrace);
	}
}
