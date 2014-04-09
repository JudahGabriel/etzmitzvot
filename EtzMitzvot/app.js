var app = (function () {
    function app() {
        var _this = this;
        this.duration = 750;
        this.widthPerNode = 250;
        this.heightPerNode = 100;
        this.createTree();
        setTimeout(function () {
            return _this.createHoverTips();
        }, 500);
        this.recenterView();
        window.onresize = function () {
            return _this.recenterView();
        };
    }
    app.prototype.createTree = function () {
        this.root = new CommandmentBase();
        this.root.shortSummary = "The Greatest Commandments", this.root.type = 0;
        this.root.children = [new LoveGodWithHeartSoulStrength(), new LoveNeighborAsSelf()];
        this.root.getBookChapterVerse = function () {
            return "";
        };

        var treeData = [this.root];

        var margin = { top: 50, right: 120, bottom: 20, left: 1250 }, width = 960 - margin.right - margin.left, height = 500 - margin.top - margin.bottom;

        this.tree = d3.layout.tree().size([height, width]);

        this.diagonal = d3.svg.diagonal().projection(function (d) {
            return [d.x, d.y];
        });

        this.svg = d3.select("body").append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        this.root.x0 = height / 2;
        this.root.y0 = 0;

        this.update(this.root);
    };

    app.prototype.createHoverTips = function () {
        var self = this;
        var template = $("#mitzvotPopoverTemplate").clone().css("display", "normal").html();

        $(".mitzvah").popover({
            container: 'body',
            placement: 'auto top',
            trigger: 'hover',
            html: true,
            delay: 100,
            title: function () {
                var node = this;
                var mitzvotNumber = parseInt(node.attributes['data-mitzvot-number'].value, 10);
                var commandment = self.findCommandmentByNumber(mitzvotNumber);
                return commandment.shortSummary;
            },
            content: function () {
                var node = this;
                var mitzvotNumber = parseInt(node.attributes['data-mitzvot-number'].value, 10);
                var commandment = self.findCommandmentByNumber(mitzvotNumber);
                return template.replace("{{text}}", commandment.text).replace("{{book}}", commandment.getBookString()).replace("{{chapter}}", commandment.chapter.toString()).replace("{{verse}}", commandment.verse.toString());
            }
        });
    };

    app.prototype.findCommandmentByNumber = function (commandmentNumber) {
        var nodesToCheck = [this.root];
        while (nodesToCheck.length > 0) {
            var lastIndex = nodesToCheck.length - 1;
            var current = nodesToCheck[lastIndex];
            if (current.number === commandmentNumber) {
                return current;
            }
            nodesToCheck.splice(lastIndex, 1);
            if (current.children && current.children.length) {
                nodesToCheck = nodesToCheck.concat(current.children);
            }
        }

        return null;
    };

    app.prototype.update = function (source) {
        var _this = this;
        var nodes = this.tree.nodes(this.root).reverse();
        var links = this.tree.links(nodes);

        var nodesByDepth = [];
        nodes.forEach(function (d) {
            d.y = d.depth * _this.heightPerNode;

            var depthNodes = nodesByDepth[d.depth];
            if (!depthNodes) {
                nodesByDepth[d.depth] = [d];
            } else {
                depthNodes.push(d);
            }
        });

        nodesByDepth.forEach(function (nodesAtDepth) {
            nodesAtDepth.forEach(function (n, index) {
                var totalRange = _this.widthPerNode * nodesAtDepth.length;
                var maxRange = totalRange / 2;
                n.x = maxRange - (_this.widthPerNode * index);
            });
        });

        var i = 0;
        var node = this.svg.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

        var nodeEnter = node.enter().append("g").attr("class", function (c) {
            return _this.getNodeClass(c);
        }).attr("data-mitzvot-number", function (c) {
            return c.number;
        }).attr("transform", function (d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        }).on("click", function (cmd) {
            return _this.click(cmd);
        });

        nodeEnter.append("circle").attr("r", .000006).attr("class", function (d) {
            return d.type === 0 ? "" : "negative";
        }).style("fill", function (d) {
            return d.isExpanded ? "#fff" : "lightsteelblue";
        });

        nodeEnter.append("text").attr("y", -20).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
            return d.shortSummary;
        }).style("fill-oopacity", 1).attr("class", "commandment-text");

        nodeEnter.append("text").attr("y", 25).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
            return d.getBookChapterVerse();
        }).style("fill-opacity", 1).attr("class", "commandment-text verse");

        var nodeUpdate = node.transition().duration(this.duration).attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        nodeUpdate.select("circle").attr("r", 7).style("fill", function (d) {
            return d.isExpanded ? "#fff" : "lightsteelblue";
        });

        nodeUpdate.select("text").style("fill-opacity", 1);

        var nodeExit = node.exit().transition().duration(this.duration).attr("transform", function (d) {
            return "translate(" + source.x + "," + source.y + ")";
        }).remove();

        nodeExit.select("circle").attr("r", .000006);

        nodeExit.select("text").style("fill-opacity", .000006);

        var link = this.svg.selectAll("path.link").data(links, function (d) {
            return d.target.id;
        });

        link.enter().insert("path", "g").attr("class", "link").attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return _this.diagonal({ source: o, target: o });
        });

        link.transition().duration(this.duration).attr("d", this.diagonal);

        link.exit().transition().duration(this.duration).attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal({ source: o, target: o });
        }).remove();

        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };

    app.prototype.click = function (cmd) {
        cmd.isExpanded = !cmd.isExpanded;
        this.update(cmd);
    };

    app.prototype.recenterView = function () {
        var body = document.body;
        body.scrollLeft = (body.scrollWidth / 2) - (body.clientWidth / 2);
    };

    app.prototype.getNodeClass = function (cmd) {
        if (cmd === this.root) {
            return "node";
        }

        var isGoldenCommand = cmd.number === 4 || cmd.number === 13;
        if (isGoldenCommand) {
            return "node mitzvah golden-command";
        }

        return "node mitzvah";
    };
    return app;
})();
