class app {
    root: CommandmentBase;
    tree: any;
    svg: D3.Selection;
    duration = 750;
    diagonal: any;
    widthPerNode = 250;
    heightPerNode = 100;
    commandmentsList: CommandmentBase[];
    commandmentsDoneCount = ko.observable(0);
    commandmentsRemainingCount = ko.computed(() => 613 - this.commandmentsDoneCount());
    commandmentsDonePercent = ko.computed(() => Math.round(this.commandmentsDoneCount() / 613 * 100) + "%");
    commandmentsRemainingPercent = ko.computed(() => Math.round(this.commandmentsRemainingCount() / 613 * 100) + "%");

    constructor() {
        this.createTree();
        //setTimeout(() => this.createHoverTips(), 500);

        this.recenterView();
        window.onresize = () => this.recenterView();

        this.commandmentsList = this.getCommandmentsList();
        this.commandmentsDoneCount(this.commandmentsList.length);

        ko.applyBindings(this, document.querySelector("#headerContainer"));
        console.info("applied bindings", this.commandmentsDonePercent());
    }

    createTree() {
        this.root = new CommandmentBase();
        this.root.shortSummary = "The Greatest Commandments",
        this.root.type = 0;
        this.root.children = [new LoveGodWithHeartSoulStrength(), new LoveNeighborAsSelf()];
        this.root.getBookChapterVerse = () => "";

        var treeData = [this.root];

        var margin = { top: 50, right: 120, bottom: 20, left: 1550 },
            width = 960 - margin.right - margin.left,
            height = 500 - margin.top - margin.bottom;

        this.tree = d3.layout.tree()
            .size([height, width]);

        this.diagonal = d3.svg.diagonal()
            .projection(function (d) { return [d.x, d.y]; });

        this.svg = d3
            .select("body")
            .append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        this.root.x0 = height / 2;
        this.root.y0 = 0;

        this.update(this.root);
    }

    createHoverTip(node: Node, commandment: CommandmentBase) {
        var self = this;
        var template = $("#mitzvotPopoverTemplate").clone().css("display", "normal").html();

        $(node).popover({
            container: 'body',
            placement: 'auto top',
            trigger: 'hover',
            html: true,
            delay: 100,
            title: commandment.shortSummary,
            content: function () {
                return template
                    .replace("{{text}}", commandment.text)
                    .replace("{{book}}", commandment.getBookString())
                    .replace("{{chapter}}", commandment.chapter.toString())
                    .replace("{{verse}}", commandment.verse.toString());
            }
        });
    }
    
    update(source) {
        // Compute the new tree layout.
        var nodes = this.tree.nodes(this.root).reverse();
        var links = this.tree.links(nodes);

        var nodesByDepth = [];
        nodes.forEach((d) => {
            d.y = d.depth * this.heightPerNode;

            var depthNodes = nodesByDepth[d.depth];
            if (!depthNodes) {
                nodesByDepth[d.depth] = [d];
            } else {
                depthNodes.push(d);
            }
        });

        nodesByDepth.forEach((nodesAtDepth) => {
            nodesAtDepth.forEach((n, index: number) => {
                var totalRange = this.widthPerNode * nodesAtDepth.length;
                var maxRange = totalRange / 2;
                n.x = maxRange - (this.widthPerNode * index);
            });
        });

        // Update the nodes…
        var i = 0;
        var node = this.svg.selectAll("g.node")
            .data(nodes, (d) => d.id || (d.id = ++i));

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter()
            .append("g")
            .attr("class", (c: CommandmentBase) => this.getNodeClass(c))
            .attr("transform", d => "translate(" + source.x0 + "," + source.y0 + ")")
            .on("click", (cmd: CommandmentBase) => this.click(cmd));

        nodeEnter.append("circle")
            .attr("r", .000006)
            .attr("class", (d: CommandmentBase) => d.type === 0 ? "" : "negative")
            .style("fill", (d: CommandmentBase) => d.isExpanded ? "#fff" : "lightsteelblue");

        nodeEnter
            .append("text")
            .attr("y", (d: CommandmentBase) => d.shortSummary.indexOf("<br />") === -1 ? -20 : -40) // -20
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text((d: CommandmentBase) => d.getShortSummaryParts()[0])
            .style("fill-opacity", 1)
            .attr("class", "commandment-text");

        // Append the 2nd half of the summary if it contains a line break.
        nodeEnter
            .filter((d: CommandmentBase) => d.getShortSummaryParts().length === 2)
            .append("text")
            .attr("y", -20)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text((d: CommandmentBase) => d.getShortSummaryParts()[1])
            .style("fill-opacity", 1)
            .attr("class", "commandment-text");

        nodeEnter.append("text")
            .attr("y", 25)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text((d: CommandmentBase) => d.getBookChapterVerse())
            .style("fill-opacity", 1)
            .attr("class", "commandment-text verse");

        var self = this;
        node.each(function (commandment: CommandmentBase) {
            self.createHoverTip(this, commandment);
        });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(this.duration)
            .attr("transform", (d: CommandmentBase) => "translate(" + d.x + "," + d.y + ")");

        nodeUpdate.select("circle")
            .attr("r", 7)
            .style("fill", (d: CommandmentBase) => d.isExpanded ? "#fff" : "lightsteelblue");

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit()
            .transition()
            .duration(this.duration)
            .attr("transform", (d: CommandmentBase) => "translate(" + source.x + "," + source.y + ")")
            .remove();

        nodeExit.select("circle")
            .attr("r", .000006);

        nodeExit.select("text")
            .style("fill-opacity", .000006);

        // Update the links…
        var link = this.svg.selectAll("path.link")
            .data(links, (d) => d.target.id);

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", (d: CommandmentBase) => {
                var o = { x: source.x0, y: source.y0 };
                return this.diagonal({ source: o, target: o });
            });

        // Transition links to their new position.
        link.transition()
            .duration(this.duration)
            .attr("d", this.diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(this.duration)
            .attr("d", (d: CommandmentBase) => {
                var o = { x: source.x, y: source.y };
                return this.diagonal({ source: o, target: o });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach((d: CommandmentBase) => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Toggle children on click.
    click(cmd: CommandmentBase) {
        cmd.isExpanded = !cmd.isExpanded;
        this.update(cmd);
    }

    recenterView() {
        var body = document.body;
        body.scrollLeft = (body.scrollWidth / 2) - (body.clientWidth / 2);

        $("#headerContainer").width($("svg").width());
    }

    getNodeClass(cmd: CommandmentBase): string {
        if (cmd === this.root) {
            return "node";
        }

        var isGoldenCommand = cmd.number === 4 || cmd.number === 13;
        if (isGoldenCommand) {
            return "node mitzvah golden-command";
        }

        return "node mitzvah";
    }

    getCommandmentsList(): CommandmentBase[]{
        var list = [];
        var nodesToCheck: CommandmentBase[] = [].concat(this.root.getChildrenOrHidden());
        while (nodesToCheck.length > 0) {
            var currentNode = nodesToCheck.splice(0, 1)[0];
            list.push(currentNode);
            currentNode.getChildrenOrHidden().forEach(c => nodesToCheck.push(c));
        }

        return list;
    }

    scrollToTreeTop() {
        console.log($("#headerContainer").height());
        document.body.scrollTop = $("#headerContainer").height();
    }
}