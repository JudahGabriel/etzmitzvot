import { LitElement, PropertyValueMap, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import { sharedStyles } from '../styles/shared-styles';
import { commandmentDetailStyles } from './commandment-detail.styles';
import { Commandment } from '../models/commandment';
import { CommandmentObedience } from '../models/obedienceLevel';
import { repeat } from 'lit/directives/repeat.js';

@customElement('cmd-detail')
export class CommandmentDetail extends LitElement {
    @property({ type: Object }) commandment: Commandment | null = null;

    static styles = [commandmentDetailStyles, sharedStyles];

    protected updated(changedProps: PropertyValueMap<this>): void {
        if (changedProps.has("commandment")) {
            const drawer = this.shadowRoot?.querySelector("sl-drawer");
            this.commandment ? drawer?.show() : drawer?.hide();
        }
    }

    render(): TemplateResult {
        return html`
            <sl-drawer label="${this.commandment?.shortSummary || ""}">
                ${this.renderCore()}
            </sl-drawer>
        `;
    }

    renderCore(): TemplateResult {
        const cmd = this.commandment;
        if (!cmd) {
            return html``;
        }

        const ancientRequirement = cmd.canBeCarriedOutToday ? "Can be carried out today" : "Can't be carried out today"
        const templeRequirement = cmd.requiresTemple ? "Can't be carried out without the Temple" : "Can be carried out without the Temple";
        const israelRequirement = cmd.requiresLivingInIsrael ? "Can't be observed outside of Israel" : "Can be carried out anywhere";

        const jewishObservance = this.getCommandmentObedienceTitle(cmd.jewishObservance, "Orthodox Judaism");
        const christianObservance = this.getCommandmentObedienceTitle(cmd.christianObservance, "Christianity");
        const messianicObservance = this.getCommandmentObedienceTitle(cmd.messianicObservance, "Messianic Judaism");
        return html`
            <blockquote>
                ${cmd.text}
                <footer>${cmd.getBookChapterVerse()}</footer>
            </blockquote>
            <div class="commandment-attributes-group d-flex flex-column">
                <div class="commandment-attribute">
                <sl-tooltip content="${cmd.canBeCarriedOutToday ? "This commandment can be carried out in modern times" : "This commandment cannot be carried out in modern times"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.canBeCarriedOutToday)}
                    ${ancientRequirement}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${cmd.requiresLivingInIsrael ? "This commandment can only be carried out while living in the land of Israel" : "This commandment can be carried out anywhere, not dependent on living in the land of Israel"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.requiresLivingInIsrael === false)}
                    ${israelRequirement}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${cmd.requiresTemple ? "This commandment requires a temple or tabernacle with a functioning Levitical system" : "This commandment can be carried out without a temple, tabernacle, or functioning Levitical system"}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.requiresTemple === false)}
                    ${templeRequirement}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(cmd.jewishObservance, "Orthodox Judaism")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.jewishObservance)}
                    ${jewishObservance}
                    ${this.renderObservanceLevel(cmd.jewishObservance)}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(cmd.christianObservance, "Mainstream Christianity")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.christianObservance)}
                    ${christianObservance}
                    ${this.renderObservanceLevel(cmd.christianObservance)}
                </sl-tooltip>
                </div>
                <div class="commandment-attribute">
                <sl-tooltip content="${this.getCommandmentObedienceDetail(cmd.messianicObservance, "Messianic Judaism")}" placement="left" hoist>
                    ${this.renderCommandmentAttributeIcon(cmd.messianicObservance)}
                    ${messianicObservance}
                    ${this.renderObservanceLevel(cmd.messianicObservance)}
                </sl-tooltip>
                </div>
            </div>

            <h3>Hierarchy</h3>
            ${this.renderCommandmentParentAndChildren(cmd)}

            <sl-button slot="footer" variant="primary" @click="${this.closeDrawer}">Close</sl-button>
        `;
    }

    renderCommandmentAttributeIcon(attrValue?: true | false | CommandmentObedience): TemplateResult {
        const isGreenCheck = attrValue === true || attrValue === "binding";
        const isRedX = attrValue === false || attrValue === "none";
        const iconName = isGreenCheck ? "check2-circle" : isRedX ? "x-circle" : "circle-half";
        const colorClass = isGreenCheck ? "text-success" : isRedX ? "text-danger" : "text-warning";
        return html`
          <sl-icon name="${iconName}" class="${colorClass}"></sl-icon>
        `;
    }

    renderObservanceLevel(level?: CommandmentObedience) {
        const starCount = this.getStarLevel(level);
        const icons = [
            starCount > 0 ? "star-fill" : "star",
            starCount >= 1 ? "star-fill" : "star",
            starCount >= 2 ? "star-fill" : "star",
            starCount >= 3 ? "star-fill" : "star",
            starCount >= 4 ? "star-fill" : "star",
        ]
        return html`
          <div class="d-flex">
            <sl-icon name="${icons[0]}"></sl-icon>
            <sl-icon name="${icons[1]}"></sl-icon>
            <sl-icon name="${icons[2]}"></sl-icon>
            <sl-icon name="${icons[3]}"></sl-icon>
            <sl-icon name="${icons[4]}"></sl-icon>
          </div>
        `;
    }

    getStarLevel(level?: CommandmentObedience): number {
        switch (level) {
            case "none":
                return 0;
            case "recognized":
                return 1;
            case "recognizedPartial":
                return 2;
            case "recognizedButPrevented":
                return 3;
            case "binding":
                return 4;
            default:
                return 0;
        }
    }

    renderCommandmentParentAndChildren(cmd: Commandment): TemplateResult {
        return html`
          <sl-tree selection="single" @sl-selection-change="${this.commandmentHierarchyTreeNodeSelected}">
            ${this.renderCommandmentTreeItem(cmd.parent, cmd, 2)}
          </sl-tree>
        `;
      }

      renderCommandmentTreeItem(cmd: Commandment | null | undefined, selected: Commandment, childGenerationsToRender: number): TemplateResult {
        if (!cmd) {
          return html``;
        }

        return html`
            <sl-tree-item expanded ?selected="${selected === cmd}" data-cmd-id="${cmd.commandmentNumber}">
              <sl-icon name="plus-square" slot="expand-icon"></sl-icon>
              <sl-icon name="dash-square" slot="collapse-icon"></sl-icon>
              ${cmd.shortSummary}

              ${childGenerationsToRender > 0 ? html`
                ${repeat(cmd.children || [], c => c.commandmentNumber, c => this.renderCommandmentTreeItem(c, selected, childGenerationsToRender - 1))}
              ` : html``}
            </sl-tree-item>
          `;
      }

    getCommandmentObedienceDetail(level: CommandmentObedience | null | undefined, groupName: string): string {
        switch (level) {
            case "none":
                return `${groupName} does not widely practice this commandment nor recognize it as binding.`;
            case "recognized":
                return `${groupName} recognizes this commandment as binding, but does not widely practice it or all the aspects of the commandment as laid out in the text.`;
            case "recognizedPartial":
                return `${groupName} recognizes this commandment as binding, but practices only some of the aspects of the commandment.`;
            case "recognizedButPrevented":
                return `${groupName} considers this commandment binding, but is prevented from keeping it for external reasons.`;
            case "binding":
                return `${groupName} considers this commandment binding and widely practices it.`;
            default:
                return "";
        }
    }

    getCommandmentObedienceTitle(level: CommandmentObedience, group: string): string {
        switch (level) {
            case "none":
                return `Not observed in ${group}`;
            case "recognized":
            case "recognizedPartial":
            case "recognizedButPrevented":
                return `Partially observed in ${group}`;
            case "binding":
                return `Observed in ${group}`;
            default:
                return "";
        }
    }

    commandmentHierarchyTreeNodeSelected(e: CustomEvent): void {
        if (!this.commandment) {
            return;
        }

        const cmdIdStr = e.detail?.selection ? e.detail.selection[0].getAttribute("data-cmd-id") : null;
        const cmdId = cmdIdStr ? Number(cmdIdStr) : null;
        const cmd = cmdId ? this.commandment.getDescendant(cmdId) || this.commandment.getAncestor(cmdId) || this.commandment.getSibling(cmdId) : null;
        if (cmd) {
            this.commandment = cmd;
        }
    }

    closeDrawer(): void {
        this.shadowRoot?.querySelector("sl-drawer")?.hide();
        this.commandment = null;
    }
}