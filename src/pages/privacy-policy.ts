import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import { sharedStyles } from '../styles/shared-styles';
import { privacyPolicyStyles } from './privacy-policy.styles';

@customElement("privacy-policy")
export class PrivacyPolicy extends LitElement {

    static styles = [
        privacyPolicyStyles,
        sharedStyles
    ]

    render(): TemplateResult {
        return html`
            <h1>Privacy Policy</h1>
            <p>EtzMitzvot is an open-source application committed to protecting your privacy. We do not collect, store, or share any personal information, including usernames, passwords, emails, or any other user data. Since we do not gather any information, there is no risk of your data being shared, sold, or misused. Your use of EtzMitzvot is entirely private and secure.</p>
            <p>If you have any questions or concerns, feel free to reach out to <a href="mailto:contact@blessisraelonline.com">contact@blessisraelonline.com</a>. Thank you for using EtzMitzvot!</p>
        `;
    }
}