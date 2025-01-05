/// <reference types="d3" />

import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import { Commandment } from '../models/commandment';
import { cmdMap } from '../models/commandmentHierarchy';
import { homeStyles } from './app-home.styles';
import { sharedStyles } from '../styles/shared-styles';
import { ZoomEvent } from 'd3';
import { CommandmentObedience } from '../models/obedienceLevel';

@customElement('app-home')
export class AppHome extends LitElement {
  @state() root: Commandment | null = null;
  @state() commandmentsList: Commandment[] = [];
  @state() selectedCommandment: Commandment | null = null;
  tree: d3.layout.Tree<Commandment> | null = null;
  svgRootG: d3.Selection<Commandment> | null = null;
  diagonalLayout: d3.svg.Diagonal<d3.svg.diagonal.Link<Commandment>, Commandment> | null = null;
  zoom: d3.behavior.Zoom<Commandment> | null = null;
  commandmentHoverTimeoutHandle = 0;
  duration = 750;
  nodeWidth = 250;
  nodeHeight = 100;
  minZoom = 0.2;
  maxZoom = 5;

  static styles = [homeStyles, sharedStyles];

  firstUpdated(): void {
    cmdMap.getCommandments().then(cmds => this.commandmentsList = cmds);
    cmdMap.getRootCommandments().then(roots => {
      this.root = cmdMap.getGreatestCommandmentPlaceholder();
      this.root.children = roots;
      this.createTree();
      this.printNextCommandmentsToMap();
    });
  }

  render(): TemplateResult {
    return html`
      ${this.renderToolbar()}
      ${this.renderSelectedCommandmentDetails()}
    `;
  }

  renderToolbar(): TemplateResult {
    return html`
      <sl-button-group class="graph-toolbar" label="Graph options">
        <sl-tooltip content="View full screen">
          <sl-button @click="${this.viewFullscreen}">
            <sl-icon name="arrows-fullscreen" label="View full screen"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Expand or collapse the commandment tree">
          <sl-button @click="${this.expandCollapseRoot}">
            <sl-icon name="arrows-expand" label="Expand or collapse commandments"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Zoom in">
          <sl-button @click="${this.zoomIn}">
            <sl-icon name="zoom-in" label="Zoom in the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
        <sl-tooltip content="Zoom out">
          <sl-button @click="${this.zoomOut}">
            <sl-icon name="zoom-out" label="Zoom out the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
      </sl-button-group>
    `;
  }

  renderSelectedCommandmentDetails(): TemplateResult {
    const title = this.selectedCommandment ? this.selectedCommandment.shortSummary : "";
    const text = this.selectedCommandment ? this.selectedCommandment.text : "";
    const chapterVerse = this.selectedCommandment ? this.selectedCommandment.getBookChapterVerse() : "";
    const ancientRequirement = this.selectedCommandment?.canBeCarriedOutToday ? "Can be carried out today" : "Can't be carried out today"
    const templeRequirement = this.selectedCommandment?.requiresTemple ? "Can't be carried out without the Temple" : "Can be carried out without the Temple";
    const israelRequirement = this.selectedCommandment?.requiresLivingInIsrael ? "Can't be observed outside of Israel" : "Can be carried out anywhere";
    const jewishObservance = this.selectedCommandment?.jewishObservance !== "none" ? "Observed in Orthodox Judaism" : "Not observed in Orthodox Judaism";
    const christianObservance = this.selectedCommandment?.christianObservance !== "none" ? "Observed in Christianity" : "Not observed in Christianity";
    const messianicObservance = this.selectedCommandment?.messianicObservance !== "none" ? "Observed in Messianic Judaism" : "Not observed in Messianic Judaism";
    return html`
      <sl-drawer label="${title}" class="selected-commandment-details">
          <blockquote>
              ${text}
              <footer>${chapterVerse}</footer>
          </blockquote>
          <div class="commandment-attributes-group d-flex flex-column">
            <div class="commandment-attribute">
              <sl-tooltip content="${this.selectedCommandment?.canBeCarriedOutToday ? "This commandment can be carried out in modern times" : "This commandment cannot be carried out in modern times"}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.canBeCarriedOutToday)}
                ${ancientRequirement}
              </sl-tooltip>
            </div>
            <div class="commandment-attribute">
              <sl-tooltip content="${this.selectedCommandment?.requiresLivingInIsrael ? "This commandment can only be carried out while living in the land of Israel" : "This commandment can be carried out anywhere"}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.requiresLivingInIsrael === false)}
                ${israelRequirement}
              </sl-tooltip>
            </div>
            <div class="commandment-attribute">
              <sl-tooltip content="${this.selectedCommandment?.requiresTemple ? "This commandment requires a temple or tabernacle with a functioning Levitical system" : "This commandment can be carried out without a temple, tabernacle, or functioning Levitical system"}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.requiresTemple === false)}
                ${templeRequirement}
              </sl-tooltip>
            </div>
            <div class="commandment-attribute">
              <sl-tooltip content="${this.getCommandmentObedienceDescription(this.selectedCommandment?.jewishObservance, "Orthodox Judaism")}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.jewishObservance)}
                ${jewishObservance}
                ${this.renderObservanceLevel(this.selectedCommandment?.jewishObservance)}
              </sl-tooltip>
            </div>
            <div class="commandment-attribute">
              <sl-tooltip content="${this.getCommandmentObedienceDescription(this.selectedCommandment?.christianObservance, "Mainstream Christianity")}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.christianObservance)}
                ${christianObservance}
                ${this.renderObservanceLevel(this.selectedCommandment?.christianObservance)}
              </sl-tooltip>
            </div>
            <div class="commandment-attribute">
              <sl-tooltip content="${this.getCommandmentObedienceDescription(this.selectedCommandment?.messianicObservance, "Messianic Judaism")}" placement="left" hoist>
                ${this.renderCommandmentAttributeIcon(this.selectedCommandment?.messianicObservance)}
                ${messianicObservance}
                ${this.renderObservanceLevel(this.selectedCommandment?.messianicObservance)}
              </sl-tooltip>
            </div>
          </div>

          <h3>Hierarchy</h3>
          ${this.renderCommandmentParentAndChildren()}

        <sl-button slot="footer" variant="primary" @click="${this.closeDrawer}">Close</sl-button>
      </sl-drawer>
    `;
  }

  renderCommandmentAttributeIcon(attrValue?: true | false | null | CommandmentObedience): TemplateResult {
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

  renderCommandmentParentAndChildren(): TemplateResult {
    if (!this.selectedCommandment) {
      return html``;
    }

    return html`
      <sl-tree selection="single" @sl-selection-change="${this.commandmentHierarchyTreeNodeSelected}">
        ${this.renderCommandmentTreeItem(this.selectedCommandment.parent, this.selectedCommandment, 2)}
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

  getCommandmentObedienceDescription(level: CommandmentObedience | null | undefined, groupName: string): string {
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

  createTree() {
    if (!this.root) {
      console.warn("Can't create tree until roo commandment is set.");
      return;
    }

    var margin = { top: 50, right: 50, bottom: 20, left: 50 };
    var width = 960 - margin.right - margin.left;
    var height = 500 - margin.top - margin.bottom;

    this.tree = d3.layout.tree<Commandment>()
        .size([height, width]);

    this.diagonalLayout = d3.svg.diagonal<Commandment>()
        .projection(d => [d.x, d.y]);

    const initialScale = 1.0;
    const initialTranslateX = (window.innerWidth / 2) - 100; // We want the initial X position to be about center of the window.
    const initialTranslateY = 50;
    this.zoom = d3.behavior.zoom<Commandment>()
      .scaleExtent([this.minZoom, this.maxZoom]) // min and max zoom
      .scale(initialScale)
      .translate([initialTranslateX, initialTranslateY])
      .on("zoom", () => this.hierarchyZoomed());

    this.svgRootG = d3
        .select("body")
        .append("svg")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        .call(this.zoom)
        .append("g")
        .attr("transform", `translate(${initialTranslateX}, ${initialTranslateY}) scale(${initialScale})`); // Set the initial scale and position. This should match the call to zoom().translate(...) above.

    this.root.x0 = height / 2;
    this.root.y0 = 0;

    this.updateTree(this.root);
  }

  printNextCommandmentsToMap() {
    for (let i = 1; i <= 613; i++) {
        const existing = this.commandmentsList.filter(c => c.commandmentNumber === i);
        if (existing.length > 1) {
            console.error(`${existing.length} commandments have the same number, ${existing[0].commandmentNumber}.`, existing);
        }
        if (existing.length === 0) {
            console.log(`Next commandment to map is ${i}`);
            break;
        }
    }
  }

  updateTree(source: Commandment) {
    if (!this.tree || !this.root || !this.svgRootG || !this.diagonalLayout) {
      return;
    }
    const nonNullLayout = this.diagonalLayout;

    // Compute the new tree layout.
    const nodes = this.tree.nodes(this.root).reverse();

    const links = this.tree.links(nodes);

    const byDepthNodes: Commandment[][] = [];
    nodes.forEach((d: Commandment) => {
        d.y = d.depth * this.nodeHeight;

        const depthNodes = byDepthNodes[d.depth];
        if (!depthNodes) {
            byDepthNodes[d.depth] = [d];
        } else {
            depthNodes.push(d);
        }
    });

    // Assign node width based on the number of nodes at that depth.
    byDepthNodes.forEach((atDepthNodes) => {
        atDepthNodes.forEach((n, index: number) => {
            var totalRange = this.nodeWidth * atDepthNodes.length;
            var maxRange = totalRange / 2;
            n.x = maxRange - (this.nodeWidth * index);
        });
    });

    // Update the nodes with an ID
    const commandmentNodes = this.svgRootG.selectAll("g.node")
        .data(nodes, (d: any) => d.id || (d.id = d.commandmentNumber));

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = commandmentNodes.enter()
        .append("g")
        .attr("class", (c: Commandment) => this.getNodeClass(c))
        .attr("transform", () => "translate(" + source.x0 + "," + source.y0 + ")")
        .on("click", (cmd: Commandment) => this.commandmentNodeClicked(cmd));

    // Draw the circle of the node.
    nodeEnter.append("circle")
        .attr("r", .000006)
        .attr("class", (d: Commandment) => d.type === "positive" ? "" : "negative")
        .style("fill", (d: Commandment) => d.isExpanded ? "#fff" : "lightsteelblue");

    // Append the text summary first line.
    nodeEnter
        .append("text")
        .attr("y", (d: Commandment) => d.getShortSummaryParts().length === 1 ? -20 : -40) // -20
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text((d: Commandment) => d.getShortSummaryParts()[0])
        .style("fill-opacity", 1)
        .attr("class", "commandment-text");

    // Append text summary second line if it contains a line break.
    nodeEnter
        .filter((d: Commandment) => d.getShortSummaryParts().length > 1)
        .append("text")
        .attr("y", -20)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text((d: Commandment) => d.getShortSummaryParts()[1])
        .style("fill-opacity", 1)
        .attr("class", "commandment-text");

    // Append the book, chapter, and verse text.
    nodeEnter.append("text")
        .attr("y", 25)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text((d: Commandment) => d === this.root ? "" : d.getBookChapterVerse())
        .style("fill-opacity", 1)
        .attr("class", "commandment-text verse");

    // Transition nodes to their new position.
    var nodeUpdate = commandmentNodes.transition()
        .duration(this.duration)
        .attr("transform", (d: Commandment) => "translate(" + d.x + "," + d.y + ")");

    nodeUpdate.select("circle")
        .attr("r", 7)
        .style("fill", (d: Commandment) => d.isExpanded ? "#fff" : "lightsteelblue");

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = commandmentNodes.exit()
        .transition()
        .duration(this.duration)
        .attr("transform", () => "translate(" + source.x + "," + source.y + ")")
        .remove();

    nodeExit.select("circle")
        .attr("r", .000006);

    nodeExit.select("text")
        .style("fill-opacity", .000006);

    // Update the links…
    var link = this.svgRootG.selectAll("path.link")
        .data(links, (d: any) => d.target.id);

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", () => {
            const o = { x: source.x0, y: source.y0 };
            return nonNullLayout({ source: o, target: o } as any);
        });

    // Transition links to their new position.
    link.transition()
        .duration(this.duration)
        .attr("d", this.diagonalLayout);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(this.duration)
        .attr("d", () => {
            var o = { x: source.x, y: source.y };
            return nonNullLayout({ source: o, target: o } as any);
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach((d: Commandment) => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
  }

  toggleNodeCollapsed(cmd: Commandment) {
    cmd.isExpanded = !cmd.isExpanded;
    this.updateTree(cmd);
  }

  commandmentNodeClicked(cmd: Commandment) {
      this.selectedCommandment = cmd;
      this.shadowRoot?.querySelector("sl-drawer")?.show();
  }

    // var template = $("#mitzvotPopoverTemplate").clone().css("display", "normal").html();
    // $(node).popover({
    //     container: 'body',
    //     placement: 'auto right',
    //     trigger: 'hover',
    //     html: true,
    //     delay: 100,
    //     title: commandment.shortSummary.replace("<br />", ""),
    //     content: function () {
    //         return template
    //             .replace("{{text}}", commandment.text)
    //             .replace("{{book}}", commandment.getBookString())
    //             .replace("{{chapter}}", commandment.chapter.toString())
    //             .replace("{{verse}}", commandment.verse.toString())
    //             .replace("{{observanceJudaism}}", commandment.getObservanceText("Jews", commandment.jewishObservance))
    //             .replace("{{observanceChristianity}}", commandment.getObservanceText("Christians", commandment.christianObservance))
    //             .replace("{{observanceMessianic}}", commandment.getObservanceText("Messianics", commandment.messianicObservance))
    //     }
    // });
  //}

  getNodeClass(cmd: Commandment): string {
    if (cmd === this.root) {
        return "node root";
    }

    const isGoldenCommand = cmd.commandmentNumber === 4 || cmd.commandmentNumber === 13;
    if (isGoldenCommand) {
        return "node mitzvah golden-command";
    }

    return "node mitzvah";
  }

  hierarchyZoomed(): void {
    if (this.svgRootG) {
      const zoomEvent = d3.event as ZoomEvent;
      this.svgRootG.attr("transform", "translate(" + zoomEvent.translate + ")scale(" + zoomEvent.scale + ")");
    }
  }

  viewFullscreen(): void {
    document.querySelector("svg")?.requestFullscreen();
  }

  expandCollapseRoot(): void {
    if (this.root) {
      this.root.isExpanded = !this.root.isExpanded;
      this.updateTree(this.root);
    }
  }

  zoomIn(): void {
    this.zoomTree(0.1);
  }

  zoomOut(): void {
    this.zoomTree(-0.1);
  }

  zoomTree(zoomAmount: number): void {
    if (this.zoom && this.svgRootG) {
      const currentScale = this.zoom.scale() || 1;
      const proposedNewScale = Number((currentScale + zoomAmount).toPrecision(3));
      const canZoom = proposedNewScale >= this.minZoom && proposedNewScale <= this.maxZoom;
      const currentTranslate = this.zoom.translate() as [number, number] || [0, 0];
      if (canZoom) {
        this.zoom = this.zoom.scale(proposedNewScale);
        this.svgRootG.attr("transform", `translate(${currentTranslate[0]}, ${currentTranslate[1]}) scale(${proposedNewScale})`);
      }
    }
  }

  closeDrawer(): void {
    this.shadowRoot?.querySelector("sl-drawer")?.hide();
    this.selectedCommandment = null;
  }

  commandmentHierarchyTreeNodeSelected(e: CustomEvent): void {
    console.log("zanz!");
    const cmdId = e.detail?.getAttribute("data-cmd-id");
    const cmd = this.commandmentsList.find(c => c.commandmentNumber === Number(cmdId));
    if (cmd) {
      this.commandmentNodeClicked(cmd);
    }
  }
}
