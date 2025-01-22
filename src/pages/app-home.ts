/// <reference types="d3" />

import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

import '../components/commandment-detail';
import { Commandment } from '../models/commandment';
import { cmdMap } from '../models/commandmentHierarchy';
import { homeStyles } from './app-home.styles';
import { sharedStyles } from '../styles/shared-styles';
import { ZoomEvent } from 'd3';
import { alertService } from '../services/alert-service';

@customElement('app-home')
export class AppHome extends LitElement {
  @state() root: Commandment | null = null;
  @state() commandmentsList: Commandment[] = [];
  @state() selectedCommandment: Commandment | null = null;
  tree: d3.layout.Tree<Commandment> | null = null;
  svgRootG: d3.Selection<Commandment> | null = null;
  diagonalLayout: d3.svg.Diagonal<d3.svg.diagonal.Link<Commandment>, Commandment> | null = null;
  zoom: d3.behavior.Zoom<Commandment> | null = null;
  isIOS = /iPad|iPhone/.test(navigator.userAgent);
  isMobile = matchMedia("(max-width: 760px)").matches;
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
      <div class="svg-container">
        ${this.renderToolbar()}
        <svg></svg>
      </div>
      <cmd-detail .commandment="${this.selectedCommandment}" @sl-hide="${this.resetSelectedCommandment}" @cmd-expand-toggled="${this.toggleNodeCollapsed}"></cmd-detail>>
    `;
  }

  renderToolbar(): TemplateResult {
    // Unfortunately iOS doesn't support the full screen API even though the API is present. Hide it.
    const viewFullScreenClass = this.isIOS ? "d-none" : "";

    // On mobile, we can get a bit stuck on scrolling because the SVG takes over panning. So, we'll add a scroll to top button.
    const scrollToTopClass = this.isMobile ? "" : "d-none";
    return html`
      <sl-button-group class="graph-toolbar" label="Graph options">
        <sl-tooltip content="View full screen" class="${viewFullScreenClass}">
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
        <sl-tooltip content="Scroll to top" class="${scrollToTopClass}">
          <sl-button @click="${this.scrollToTop}">
            <sl-icon name="arrow-up-square" label="Zoom out the tree"></sl-icon>
          </sl-button>
        </sl-tooltip>
      </sl-button-group>
    `;
  }

  createTree() {
    if (!this.root) {
      alertService.showError("Can't create tree until root commandment is set.");
      return;
    }

    const svg = this.shadowRoot?.querySelector("svg");
    if (!svg) {
      alertService.showError("Unable to find SVG for rendering.");
      return;
    }

    const margin = { top: 50, right: 50, bottom: 20, left: 50 };
    const width = 960 - margin.right - margin.left;
    const height = 500 - margin.top - margin.bottom;

    this.tree = d3.layout.tree<Commandment>()
        .size([height, width]);

    this.diagonalLayout = d3.svg.diagonal<Commandment>()
        .projection(d => [d.x, d.y]);

    const initialScale = 1.0;
    const initialTranslateX = (svg.clientWidth / 2) - 100; // We want the initial X position to be about center of the window.
    const initialTranslateY = 100; // We want the initial Y position of the root node to be 50, but on mobile we want it about 100 so it's not hidden by the toolbar.
    this.zoom = d3.behavior.zoom<Commandment>()
      .scaleExtent([this.minZoom, this.maxZoom]) // min and max zoom
      .scale(initialScale)
      .translate([initialTranslateX, initialTranslateY])
      .on("zoom", () => this.hierarchyZoomed());

    this.svgRootG = d3
        // .select("body")
        // .append("svg")
        .select(svg)
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
        //.style("fill", (d: Commandment) => d.isExpanded ? "#fff" : "lightsteelblue");

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
        .attr("r", 7);
        //.style("fill", (d: Commandment) => d.isExpanded ? "#fff" : "lightsteelblue");

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

  toggleNodeCollapsed(cmd: Commandment | null) {
    if (cmd) {
      cmd.isExpanded = !cmd.isExpanded;
      this.updateTree(cmd);
    }
  }

  commandmentNodeClicked(cmd: Commandment) {
      this.selectedCommandment = cmd;

      // Exit full screen if we're in it, otherwise we won't see anything.
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => console.warn("Failed to exit full screen."));
      }
  }

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
    this.shadowRoot?.querySelector("svg")?.requestFullscreen();
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

  scrollToTop(): void {
    window.document.body.scrollTo({ top: 0, behavior: "smooth" });
  }

  resetSelectedCommandment(): void {
    this.selectedCommandment = null;
  }
}
