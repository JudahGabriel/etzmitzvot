import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { sharedStyles } from '../styles/shared-styles';
import { sidebarStyles } from './sidebar.styles';
import { cmdMap } from '../models/commandmentHierarchy';
import { Commandment } from '../models/commandment';

@customElement('app-sidebar')
export class AppSidebar extends LitElement {

    @state() completionPercentage = 0;
	@state() completedCount = 0;
	@state() observedInJudaismPercentage = 0;
	@state() observedInChristianityPercentage = 0;
	@state() observedInMessianicJudaismPercentage = 0;
	@state() requireTemplePercentage = 0;
	@state() carriedOutAnywherePercentage = 0;
	@state() carriedOutTodayPercentage = 0;
    @state() positiveCmdPercentage = 0;
    @state() idolatryPercentage = 0;
    @state() sidebarCollapsed = false;
	readonly totalCommandmentCount = 613;

    static styles = [sidebarStyles, sharedStyles];

    connectedCallback(): void {
        super.connectedCallback();
        cmdMap.getCommandments()
            .then(results => this.commandmentsLoaded(results));
    }

    render(): TemplateResult {
        return html`
            <aside class="${this.sidebarCollapsed ? 'collapsed' : ''}">
                <div class="${this.sidebarCollapsed ? 'd-none' : ''}">
                    <div>
                        <div class="d-flex justify-content-space-between align-items-baseline">
                            <h1>A Visual Torah</h1>
                            <sl-tooltip content="Collapse the sidebar" style="font-size: 1.5em;">
                                <sl-icon-button class="collapse-btn" name="chevron-bar-right" @click="${this.toggleCollapse}"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                        <p>
                            An interactive visual map of every commandment in the
                            <abbr title="The Torah, the Law of Moses, is the first 5 books of the Hebrew Bible">Torah</abbr>.
                            Explore the Biblical commandments from a thousand-foot view. <a href="https://blog.judahgabriel.com/2025/01/re-introducing-etzmitzvot.html">Learn more</a>.
                        </p>
                        <p>

                        </p>
                    </div>
                    <div>
                        <h1>Instructions</h1>
                        <ul>
                            <li><strong>Tap</strong> a commandment to view details about it</li>
                            <li><strong>Tap and drag</strong> to pan the commandments tree.</li>
                            <li><strong>Pinch or use mouse wheel</strong> to zoom the commandments tree.</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Stats</h1>
                        <h3>Project status</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.completionPercentage}">
                                <div>${this.completionPercentage}% complete</div>
                            </sl-progress-ring>
                            <p>
                                <strong>EztMitzvot is a work in progress</strong>.  ${this.completedCount} of 613 commandments have been added to the tree. We <a href="https://blog.judahgabriel.com/search/label/commandments%20hierarchy" target="_blank">add more each week</a>.
                            </p>
                        </div>
                        <h3>Modern day</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.carriedOutTodayPercentage}">
                                ${this.carriedOutTodayPercentage}% <br > applicable <br> to today
                            </sl-progress-ring>
                            <p>Most commandments are able to be carried out in modern times.</p>
                        </div>
                        <h3>Location</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.carriedOutAnywherePercentage}">
                                ${this.carriedOutAnywherePercentage}% can be carried out <br>anywhere
                            </sl-progress-ring>
                            <p>Most commandments can be carried out anywhere, though some can only be carried out in Israel.</p>
                        </div>
                        <h3>Do's & Don'ts</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.positiveCmdPercentage}">
                                ${this.positiveCmdPercentage}% are <br> positive
                            </sl-progress-ring>
                            <p><sl-icon name="circle-fill" style="color: var(--tenakh-blue)"></sl-icon> Positive commandments</span> are imperatives to do something. <sl-icon name="circle-fill" style="color: var(--heifer-red)"></sl-icon> Negative commandments are prohibitions and forbidden actions.</p>
                        </div>
                        <h3>Temple</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.requireTemplePercentage}">
                                ${this.requireTemplePercentage}% require the Temple
                            </sl-progress-ring>
                            Some commandments can only be carried out in a Temple or Tabernacle with a functioning Levitical system.
                        </div>
                        <h3>Idolatry</h3>
                        <div class="stat">
                            <sl-progress-ring value="${this.idolatryPercentage}">
                                ${this.idolatryPercentage}% concern idolatry
                            </sl-progress-ring>
                            A significant number of commandments have to do with the prohibition against worshiping idols.
                        </div>
                        <h3>Religion</h3>
                        <div class="stat">
                            <div>
                                <sl-progress-ring value="${this.observedInJudaismPercentage}">
                                    ${this.observedInJudaismPercentage}% are observed in Orthodox Judaism
                                </sl-progress-ring>
                                <sl-progress-ring value="${this.observedInChristianityPercentage}">
                                    ${this.observedInChristianityPercentage}% are <br> observed in <br> Christianity
                                </sl-progress-ring>
                                <sl-progress-ring value="${this.observedInMessianicJudaismPercentage}">
                                    ${this.observedInMessianicJudaismPercentage}% are <br> observed in <br> Messianic Judaism
                                </sl-progress-ring>
                            </div>
                            <p>Of the commandments that are able to be carried out, Judaism and Christianity differ signficantly in their philosophies. Mainstream Christianity generally only keeps commandments having do to with ethics and morality, while Judaism tends to keep all commandments that don't require a functional Levitical priesthood.</i></p>
                        </div>
                    </div>
                </div>
                <div class="${this.sidebarCollapsed ? '' : 'd-none'}">
                    <sl-tooltip content="Expand the sidebar" style="font-size: 1.5em;">
                        <sl-icon-button name="chevron-bar-left" @click="${this.toggleCollapse}"></sl-icon-button>
                    </sl-tooltip>
                </div>
            </aside>
        `;
    }

    private commandmentsLoaded(cmds: Commandment[]): void {
        this.completedCount = cmds.length;
        this.completionPercentage = Math.floor(this.totalCommandmentCount / cmds.length);
        this.carriedOutTodayPercentage = Math.floor(100 * cmds.filter(cmd => cmd.canBeCarriedOutToday).length / cmds.length);
        this.carriedOutAnywherePercentage = Math.floor(100 * cmds.filter(cmd => !cmd.requiresLivingInIsrael).length / cmds.length);
        this.requireTemplePercentage = Math.floor(100 * cmds.filter(cmd => cmd.requiresTemple).length / cmds.length);
        this.observedInJudaismPercentage = Math.floor(100 * cmds.filter(cmd => cmd.jewishObservance === "binding").length / cmds.length);
        this.observedInChristianityPercentage = Math.floor(100 * cmds.filter(cmd => cmd.christianObservance === "binding").length / cmds.length);
        this.observedInMessianicJudaismPercentage = Math.floor(100 * cmds.filter(cmd => cmd.messianicObservance === "binding").length / cmds.length);
        this.idolatryPercentage = Math.floor(100 * cmds.filter(cmd => cmd.shortSummary.includes(" idol")).length / cmds.length);
        this.positiveCmdPercentage = Math.floor(100 * cmds.filter(cmd => cmd.type === "positive").length / cmds.length);
    }

    private toggleCollapse(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }
}
