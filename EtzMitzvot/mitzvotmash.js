var app = (function () {
    function app() {
        var _this = this;
        this.duration = 750;
        this.widthPerNode = 250;
        this.heightPerNode = 100;
        this.commandmentsDoneCount = ko.observable(0);
        this.commandmentsRemainingCount = ko.computed(function () {
            return 613 - _this.commandmentsDoneCount();
        });
        this.commandmentsDonePercent = ko.computed(function () {
            return Math.round(_this.commandmentsDoneCount() / 613 * 100) + "%";
        });
        this.commandmentsRemainingPercent = ko.computed(function () {
            return Math.round(_this.commandmentsRemainingCount() / 613 * 100) + "%";
        });
        this.createTree();

        //setTimeout(() => this.createHoverTips(), 500);
        this.recenterView();
        window.onresize = function () {
            return _this.recenterView();
        };

        this.commandmentsList = this.getCommandmentsList();
        this.commandmentsDoneCount(this.commandmentsList.length);

        ko.applyBindings(this, document.querySelector("#headerContainer"));
        console.info("applied bindings", this.commandmentsDonePercent());
    }
    app.prototype.createTree = function () {
        this.root = new CommandmentBase();
        this.root.shortSummary = "The Greatest Commandments", this.root.type = 0;
        this.root.children = [new LoveGodWithHeartSoulStrength(), new LoveNeighborAsSelf()];
        this.root.getBookChapterVerse = function () {
            return "";
        };

        var treeData = [this.root];

        var margin = { top: 50, right: 120, bottom: 20, left: 1750 };
        var width = 960 - margin.right - margin.left;
        var height = 500 - margin.top - margin.bottom;

        this.tree = d3.layout.tree().size([height, width]);

        this.diagonal = d3.svg.diagonal().projection(function (d) {
            return [d.x, d.y];
        });

        this.svg = d3.select("body").append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        this.root.x0 = height / 2;
        this.root.y0 = 0;

        this.update(this.root);
    };

    app.prototype.createHoverTip = function (node, commandment) {
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
                return template.replace("{{text}}", commandment.text).replace("{{book}}", commandment.getBookString()).replace("{{chapter}}", commandment.chapter.toString()).replace("{{verse}}", commandment.verse.toString());
            }
        });
    };

    app.prototype.update = function (source) {
        var _this = this;
        // Compute the new tree layout.
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

        // Update the nodes…
        var i = 0;
        var node = this.svg.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g").attr("class", function (c) {
            return _this.getNodeClass(c);
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

        nodeEnter.append("text").attr("y", function (d) {
            return d.shortSummary.indexOf("<br />") === -1 ? -20 : -40;
        }).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
            return d.getShortSummaryParts()[0];
        }).style("fill-opacity", 1).attr("class", "commandment-text");

        // Append the 2nd half of the summary if it contains a line break.
        nodeEnter.filter(function (d) {
            return d.getShortSummaryParts().length === 2;
        }).append("text").attr("y", -20).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
            return d.getShortSummaryParts()[1];
        }).style("fill-opacity", 1).attr("class", "commandment-text");

        nodeEnter.append("text").attr("y", 25).attr("dy", ".35em").attr("text-anchor", "middle").text(function (d) {
            return d.getBookChapterVerse();
        }).style("fill-opacity", 1).attr("class", "commandment-text verse");

        var self = this;
        node.each(function (commandment) {
            self.createHoverTip(this, commandment);
        });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition().duration(this.duration).attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        nodeUpdate.select("circle").attr("r", 7).style("fill", function (d) {
            return d.isExpanded ? "#fff" : "lightsteelblue";
        });

        nodeUpdate.select("text").style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition().duration(this.duration).attr("transform", function (d) {
            return "translate(" + source.x + "," + source.y + ")";
        }).remove();

        nodeExit.select("circle").attr("r", .000006);

        nodeExit.select("text").style("fill-opacity", .000006);

        // Update the links…
        var link = this.svg.selectAll("path.link").data(links, function (d) {
            return d.target.id;
        });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g").attr("class", "link").attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return _this.diagonal({ source: o, target: o });
        });

        // Transition links to their new position.
        link.transition().duration(this.duration).attr("d", this.diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition().duration(this.duration).attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal({ source: o, target: o });
        }).remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };

    // Toggle children on click.
    app.prototype.click = function (cmd) {
        cmd.isExpanded = !cmd.isExpanded;
        this.update(cmd);
    };

    app.prototype.recenterView = function () {
        var body = document.body;
        body.scrollLeft = (body.scrollWidth / 2) - (body.clientWidth / 2);

        $("#headerContainer").width($("svg").width());
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

    app.prototype.getCommandmentsList = function () {
        var list = [];
        var nodesToCheck = [].concat(this.root.getChildrenOrHidden());
        while (nodesToCheck.length > 0) {
            var currentNode = nodesToCheck.splice(0, 1)[0];
            list.push(currentNode);
            currentNode.getChildrenOrHidden().forEach(function (c) {
                return nodesToCheck.push(c);
            });
        }

        return list;
    };

    app.prototype.scrollToTreeTop = function () {
        console.log($("#headerContainer").height());
        document.body.scrollTop = $("#headerContainer").height();
    };
    return app;
})();
var CommandmentBase = (function () {
    function CommandmentBase() {
        this.children = [];
        this.hiddenChildren = null;
    }
    CommandmentBase.prototype.getBookChapterVerse = function () {
        var bookName = this.book === 3 /* Deuteronomy */ ? "Deut." : this.book === 0 /* Exodus */ ? "Ex." : this.book === 1 /* Leviticus */ ? "Lev." : "Num.";
        return bookName + " " + this.chapter + ":" + this.verse;
    };

    CommandmentBase.prototype.getBookString = function () {
        return this.book === 3 /* Deuteronomy */ ? "Deuteronomy" : this.book === 0 /* Exodus */ ? "Exodus" : this.book === 1 /* Leviticus */ ? "Leviticus" : "Numbers";
    };

    CommandmentBase.prototype.getShortSummaryParts = function () {
        return this.shortSummary.split("<br />");
    };

    CommandmentBase.prototype.getChildrenOrHidden = function () {
        if (this.hiddenChildren) {
            return this.hiddenChildren;
        }

        if (this.children) {
            return this.children;
        }

        return [];
    };

    Object.defineProperty(CommandmentBase.prototype, "isExpanded", {
        get: function () {
            return this.hiddenChildren === null;
        },
        set: function (value) {
            if (value && this.hiddenChildren != null && this.hiddenChildren.length) {
                this.children = this.hiddenChildren;
                this.hiddenChildren = null;
            } else if (!value && !this.hiddenChildren) {
                this.hiddenChildren = this.children;
                this.children = [];
            }
        },
        enumerable: true,
        configurable: true
    });

    return CommandmentBase;
})();
///<reference path='../commandmentBase.ts' />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AcknowledgeGodAsHoly = (function (_super) {
    __extends(AcknowledgeGodAsHoly, _super);
    function AcknowledgeGodAsHoly() {
        _super.call(this);

        this.shortSummary = "Acknowledge God as holy.";
        this.text = "I must be acknowledged as holy by the Israelites.";
        this.book = 1 /* Leviticus */;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 6;

        this.children = [
            new FearGod(), new BlessGodAfterEating(), new DontCurseGod(), new DontTemptGod()
        ];
    }
    return AcknowledgeGodAsHoly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BlessGodAfterEating = (function (_super) {
    __extends(BlessGodAfterEating, _super);
    function BlessGodAfterEating() {
        _super.call(this);

        this.shortSummary = "Bless God after eating.";
        this.text = "When you have eaten and are satisfied, praise the LORD your God for the good land he has given you.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 8;
        this.verse = 10;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 85;

        this.children = [];
    }
    return BlessGodAfterEating;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var ClingToGod = (function (_super) {
    __extends(ClingToGod, _super);
    function ClingToGod() {
        _super.call(this);

        this.shortSummary = "Cling to God and serve him.";
        this.text = "Fear the LORD your God and serve him. Hold fast to him and take your oaths in his name.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 5;

        this.children = [];
    }
    return ClingToGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontCurseGod = (function (_super) {
    __extends(DontCurseGod, _super);
    function DontCurseGod() {
        _super.call(this);

        this.shortSummary = "Don't curse God.";
        this.text = "You are not to curse God, and you are not to curse a leader of your people.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 27;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 26;

        this.children = [
            new DontProfaneGodsName()
        ];
    }
    return DontCurseGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontDestroyHolyObjects = (function (_super) {
    __extends(DontDestroyHolyObjects, _super);
    function DontDestroyHolyObjects() {
        _super.call(this);

        this.shortSummary = "Don't destroy God's holy objects.";
        this.text = "You must destroy all the places where the nations you are dispossessing served their gods, whether on high mountains, on hills, or under some leafy tree. Break down their altars, smash their standing-stones to pieces, burn up their sacred poles completely and cut down the carved images of their gods. Exterminate their name from that place. But you are not to treat the LORD your God this way.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 12;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 8;

        this.children = [];
    }
    return DontDestroyHolyObjects;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontFearFalseProphet = (function (_super) {
    __extends(DontFearFalseProphet, _super);
    function DontFearFalseProphet() {
        _super.call(this);

        this.shortSummary = "Don't fear false prophets.";
        this.text = "If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken. That prophet has spoken presumptuously. Do not be afraid of him.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 22;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 45;

        this.children = [];
    }
    return DontFearFalseProphet;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontProfaneGodsName = (function (_super) {
    __extends(DontProfaneGodsName, _super);
    function DontProfaneGodsName() {
        _super.call(this);

        this.shortSummary = "Don't profane God's name.";
        this.text = "Do not profane my holy name.";
        this.book = 1 /* Leviticus */;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 7;

        this.children = [
            new DontDestroyHolyObjects()
        ];
    }
    return DontProfaneGodsName;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontProphesyFalsely = (function (_super) {
    __extends(DontProphesyFalsely, _super);
    function DontProphesyFalsely() {
        _super.call(this);

        this.shortSummary = "Don't prophesy falsely.";
        this.text = "But a prophet who presumes to speak in my name anything I have not commanded him to say, or a prophet who speaks in the name of other gods, must be put to death.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 44;

        this.children = [
            new DontFearFalseProphet()
        ];
    }
    return DontProphesyFalsely;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontTemptGod = (function (_super) {
    __extends(DontTemptGod, _super);
    function DontTemptGod() {
        _super.call(this);

        this.shortSummary = "Don't tempt God.";
        this.text = "You shall not tempt the LORD your God.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 10;

        this.children = [];
    }
    return DontTemptGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var FearGod = (function (_super) {
    __extends(FearGod, _super);
    function FearGod() {
        _super.call(this);

        this.shortSummary = "Fear the LORD your God.";
        this.text = "Fear the LORD your God.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 5;

        this.children = [
            new ClingToGod(), new ListenToGodsProphet()
        ];
    }
    return FearGod;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KnowGodExists = (function (_super) {
    __extends(KnowGodExists, _super);
    function KnowGodExists() {
        _super.call(this);

        this.shortSummary = "Know that God exists.";
        this.text = "I am the LORD your God, who brought you out of the land of Egypt, out of the abode of slavery.";
        this.book = 0 /* Exodus */;
        this.chapter = 20;
        this.verse = 2;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 1;

        this.children = [
            new KnowGodIsOne(), new AcknowledgeGodAsHoly()
        ];
    }
    return KnowGodExists;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KnowGodIsOne = (function (_super) {
    __extends(KnowGodIsOne, _super);
    function KnowGodIsOne() {
        _super.call(this);

        this.shortSummary = "Know that God is one.";
        this.text = "Hear, O Israel: The LORD our God, the LORD is one.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 3;

        this.children = [];
    }
    return KnowGodIsOne;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var ListenToGodsProphet = (function (_super) {
    __extends(ListenToGodsProphet, _super);
    function ListenToGodsProphet() {
        _super.call(this);

        this.shortSummary = "Listen to God's prophet.";
        this.text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 15;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 9;

        this.children = [
            new DontProphesyFalsely()
        ];
    }
    return ListenToGodsProphet;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var LoveGodWithHeartSoulStrength = (function (_super) {
    __extends(LoveGodWithHeartSoulStrength, _super);
    function LoveGodWithHeartSoulStrength() {
        _super.call(this);

        this.shortSummary = "Love God with all your being.";
        this.text = "Love the LORD your God with all your heart and with all your soul and with all your strength.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 5;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 4;

        this.children = [
            new KeepAllGodsCommandments(), new KnowGodExists()
        ];
    }
    return LoveGodWithHeartSoulStrength;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontBearGrudges = (function (_super) {
    __extends(DontBearGrudges, _super);
    function DontBearGrudges() {
        _super.call(this);

        this.shortSummary = "Don't bear grudges.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = 0 /* Exodus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 21;

        this.children = [
            new DontTakeRevenge()
        ];
    }
    return DontBearGrudges;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontEmbarrassOthers = (function (_super) {
    __extends(DontEmbarrassOthers, _super);
    function DontEmbarrassOthers() {
        _super.call(this);

        this.shortSummary = "Don't embarrass others.";
        this.text = "Do not hate your brother in your heart. Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 17;

        this.children = [];
    }
    return DontEmbarrassOthers;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontHateBrother = (function (_super) {
    __extends(DontHateBrother, _super);
    function DontHateBrother() {
        _super.call(this);

        this.shortSummary = "Don't hate your brother.";
        this.text = "Do not hate your brother in your heart.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 15;

        this.children = [
            new DontEmbarrassOthers(), new DontSpeakEvil(), new DontBearGrudges(), new DontOppressWeak(), new RebukeFrankly()
        ];
    }
    return DontHateBrother;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontOppressWeak = (function (_super) {
    __extends(DontOppressWeak, _super);
    function DontOppressWeak() {
        _super.call(this);

        this.shortSummary = "Don't oppress widows or orphans.";
        this.text = "Do not take advantage of a widow or an orphan. If you do and they cry out to me, I will certainly hear their cry. My anger will be aroused, and I will kill you with the sword; your wives will become widows and your children fatherless.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 18;

        this.children = [];
    }
    return DontOppressWeak;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontSpeakEvil = (function (_super) {
    __extends(DontSpeakEvil, _super);
    function DontSpeakEvil() {
        _super.call(this);

        this.shortSummary = "Don't speak evil of your brother.";
        this.text = "Do not go about spreading slander among your people.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 19;

        this.children = [];
    }
    return DontSpeakEvil;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontTakeRevenge = (function (_super) {
    __extends(DontTakeRevenge, _super);
    function DontTakeRevenge() {
        _super.call(this);

        this.shortSummary = "Don't take revenge.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 20;

        this.children = [];
    }
    return DontTakeRevenge;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var HonorYourParents = (function (_super) {
    __extends(HonorYourParents, _super);
    function HonorYourParents() {
        _super.call(this);

        this.shortSummary = "Honor your parents.";
        this.text = "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.";
        this.book = 0 /* Exodus */;
        this.chapter = 20;
        this.verse = 12;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 584;
    }
    return HonorYourParents;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var LoveNeighborAsSelf = (function (_super) {
    __extends(LoveNeighborAsSelf, _super);
    function LoveNeighborAsSelf() {
        _super.call(this);

        this.shortSummary = "Love your neighbor as yourself.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 13;

        this.children = [
            new RespectTheElderly(), new LoveSojourners(), new DontHateBrother()
        ];
    }
    return LoveNeighborAsSelf;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
// Big discussion on this here: http://judahgabriel.blogspot.com/2009/10/judaisms-alien-conversion-program.html
var LoveSojourners = (function (_super) {
    __extends(LoveSojourners, _super);
    function LoveSojourners() {
        _super.call(this);

        this.shortSummary = "Love the sojourner among you.";
        this.text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 19;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false; // Tough to say. It's intended for Israel's citizens, directing them to treat foreigners kindly.
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 14;

        this.children = [];
    }
    return LoveSojourners;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RebukeFrankly = (function (_super) {
    __extends(RebukeFrankly, _super);
    function RebukeFrankly() {
        _super.call(this);

        this.shortSummary = "Rebuke frankly.";
        this.text = "Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 16;

        this.children = [];
    }
    return RebukeFrankly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RespectTheElderly = (function (_super) {
    __extends(RespectTheElderly, _super);
    function RespectTheElderly() {
        _super.call(this);

        this.shortSummary = "Respect the elderly.";
        this.text = "Rise in the presence of the aged, show respect for the elderly and revere your God. I am the LORD.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */; // Recognized, because the majority of Jews, Messianics, and Christians don't actually rise in the presence of the aged, but do respect and honor the elderly, or at the very least teach it.
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 1 /* Recognized */;
        this.number = 23;

        this.children = [
            new RespectYourParents()
        ];
    }
    return RespectTheElderly;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RespectYourParents = (function (_super) {
    __extends(RespectYourParents, _super);
    function RespectYourParents() {
        _super.call(this);

        this.shortSummary = "Respect your parents.";
        this.text = "Each of you must respect your mother and father, and you must observe my Sabbaths. I am the Lord your God.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 3;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 585;

        this.children = [new HonorYourParents()];
    }
    return RespectYourParents;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var AfflictYourselfOnYomKippur = (function (_super) {
    __extends(AfflictYourselfOnYomKippur, _super);
    function AfflictYourselfOnYomKippur() {
        _super.call(this);

        this.shortSummary = "Afflict yourself on Yom Kippur";
        this.text = "This is to be a lasting ordinance for you: On the tenth day of the seventh month you must deny yourselves and fast.";
        this.book = 1 /* Leviticus */;
        this.chapter = 16;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 94;

        this.children = [
            new FastOnYomKippur()
        ];
    }
    return AfflictYourselfOnYomKippur;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var AppearsBeforeGodAtPilgrimFeasts = (function (_super) {
    __extends(AppearsBeforeGodAtPilgrimFeasts, _super);
    function AppearsBeforeGodAtPilgrimFeasts() {
        _super.call(this);

        this.shortSummary = "Appear at God's chosen place <br />each year for the 3 pilgrimage feasts.";
        this.text = "Three times a year all your men must appear before the Lord your God at the place he will choose: at the Festival of Unleavened Bread, the Festival of Weeks and the Festival of Tabernacles.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 16;
        this.verse = 16;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = true;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 420;

        this.children = [
            new CelebrateOnPilgrimFeasts()
        ];
    }
    return AppearsBeforeGodAtPilgrimFeasts;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BringShavuotOfferings = (function (_super) {
    __extends(BringShavuotOfferings, _super);
    function BringShavuotOfferings() {
        _super.call(this);

        this.shortSummary = "Bring additional offerings on Shavuot.";
        this.text = "On the day of firstfruits, when you present to the Lord an offering of new grain during the Festival of  Weeks, hold a sacred assembly and do no regular work. Present a burnt offering of two young  bulls, one ram and seven male lambs a year old as an aroma pleasing to the Lord. With each bull there is to be a grain offering of three-tenths of an ephah of the finest flour mixed with oil; with the ram, two-tenths; and with each of the seven lambs, one-tenth. Include one male goat to make atonement for you. Offer these together with their drink offerings, in addition to the regular burnt offering and its grain offering. Be sure the animals are without defect.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 28;
        this.verse = 26;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 386;

        this.children = [
            new BringTwoLoavesOnShavuot()
        ];
    }
    return BringShavuotOfferings;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BringSukkotOfferingsFirstDay = (function (_super) {
    __extends(BringSukkotOfferingsFirstDay, _super);
    function BringSukkotOfferingsFirstDay() {
        _super.call(this);

        this.shortSummary = "Bring additional offerings<br /> on the first day of Sukkot.";
        this.text = "‘On the fifteenth day of the seventh month, hold a sacred assembly and do no regular work. Celebrate a festival to the Lord for seven days. Present as an aroma pleasing to the Lord a food offering consisting of a burnt offering of thirteen young bulls, two rams and fourteen male lambs a year old, all without defect. With each of the thirteen bulls offer a grain offering of three-tenths of an ephah of the finest flour mixed with oil; with each of the two rams, two-tenths; and with each of the fourteen lambs, one-tenth. Include one male goat as a sin offering, in addition to the regular burnt offering with its grain offering and drink offering.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 12;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on the first day of Sukkot consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 390;

        this.children = [
            new BringSukkotOfferingsLastDay()
        ];
    }
    return BringSukkotOfferingsFirstDay;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BringSukkotOfferingsLastDay = (function (_super) {
    __extends(BringSukkotOfferingsLastDay, _super);
    function BringSukkotOfferingsLastDay() {
        _super.call(this);

        this.shortSummary = "Bring additional offerings<br /> on Shmini Atzeret.";
        this.text = "On the eighth day you are to have a festive assembly: you are not to do any kind of ordinary work; but you are to present a burnt offering, an offering made by fire, giving a fragrant aroma to Adonai — one bull, one ram, seven male lambs in their first year, without defect; with the grain and drink offerings for the bull, the ram and the lambs, according to their number, in keeping with the rule; also one male goat as a sin offering; in addition to the regular burnt offering with its grain and drink offerings.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 35;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on the last day of Sukkot consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 391;

        this.children = [];
    }
    return BringSukkotOfferingsLastDay;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BringTwoLoavesOnShavuot = (function (_super) {
    __extends(BringTwoLoavesOnShavuot, _super);
    function BringTwoLoavesOnShavuot() {
        _super.call(this);

        this.shortSummary = "Bring two loaves as a <br />wave offering on Shavuot.";
        this.text = "From wherever you live, bring two loaves made of two-tenths of an ephah of the finest flour, baked with yeast, as a wave offering of firstfruits to the Lord. Present with this bread seven male lambs, each a year old and without defect, one young bull and two rams. They will be a burnt offering to the Lord, together with their grain offerings and drink offerings—a food offering, an aroma pleasing to the Lord.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 17;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 387;

        this.children = [];
    }
    return BringTwoLoavesOnShavuot;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var BringYomTeruahOfferings = (function (_super) {
    __extends(BringYomTeruahOfferings, _super);
    function BringYomTeruahOfferings() {
        _super.call(this);

        this.shortSummary = "Bring additional offerings<br /> on Yom Teruah.";
        this.text = "On the first day of the seventh month you shall have a holy convocation. You shall not do any ordinary work. It is a day for you to blow the trumpets, and you shall offer a burnt offering, for a pleasing aroma to the Lord: one bull from the herd, one ram, seven male lambs a year old without blemish; also their grain offering of fine flour mixed with oil, three tenths of an ephah for the bull, two tenths for the ram, and one tenth for each of the seven lambs; with one male goat for a sin offering, to make atonement for you; besides the burnt offering of the new moon, and its grain offering, and the regular burnt offering and its grain offering, and their drink offering, according to the rule for them, for a pleasing aroma, a food offering to the Lord.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 2;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on Yom Teruah (Rosh Hashana) consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 388;

        this.children = [];
    }
    return BringYomTeruahOfferings;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var CelebrateOnPilgrimFeasts = (function (_super) {
    __extends(CelebrateOnPilgrimFeasts, _super);
    function CelebrateOnPilgrimFeasts() {
        _super.call(this);

        this.shortSummary = "Celebrate on the 3 pilgrimage feasts.";
        this.text = "Three times a year you are to celebrate a festival to me.";
        this.book = 0 /* Exodus */;
        this.chapter = 23;
        this.verse = 14;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Maimonides equates celebrating on these festivals with bringing a peace offering in the Tabernacle. The text, however, is more open ended, and as such, I have not limited the commandment so, and thus, allow for keeping this commandment today.";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 421;

        this.children = [
            new LiveInSukkahDuringSukkot(),
            new EatUnleavenedBreadDuringPassover(),
            new RestOnShavuot()
        ];
    }
    return CelebrateOnPilgrimFeasts;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontWorkOnShavuot = (function (_super) {
    __extends(DontWorkOnShavuot, _super);
    function DontWorkOnShavuot() {
        _super.call(this);

        this.shortSummary = "Don't work on Shavuot";
        this.text = "On that same day you are to proclaim a sacred assembly and do no regular work. This is to be a lasting ordinance for the generations to come, wherever you live.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 101;

        this.children = [
            new BringShavuotOfferings()
        ];
    }
    return DontWorkOnShavuot;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontWorkOnYomTeruah = (function (_super) {
    __extends(DontWorkOnYomTeruah, _super);
    function DontWorkOnYomTeruah() {
        _super.call(this);

        this.shortSummary = "Don't work on Yom Teruah";
        this.text = "Tell the people of Israel, ‘In the seventh month, the first of the month is to be for you a day of complete rest for remembering, a holy convocation announced with blasts on the shofar. Do not do any kind of ordinary work, and bring an offering made by fire to the LORD.’";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 25;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 103;

        this.children = [];
    }
    return DontWorkOnYomTeruah;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var EatUnleavenedBreadDuringPassover = (function (_super) {
    __extends(EatUnleavenedBreadDuringPassover, _super);
    function EatUnleavenedBreadDuringPassover() {
        _super.call(this);

        this.shortSummary = "Eat unleavened bread during <br />Passover and Unleavened Bread.";
        this.text = "On the first month you are to eat bread made without yeast, from the evening of the fourteenth day until the evening of the twenty-first day.";
        this.book = 0 /* Exodus */;
        this.chapter = 12;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 114;

        this.children = [];
    }
    return EatUnleavenedBreadDuringPassover;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var FastOnYomKippur = (function (_super) {
    __extends(FastOnYomKippur, _super);
    function FastOnYomKippur() {
        _super.call(this);

        this.shortSummary = "Fast on Yom Kippur";
        this.text = "Anyone who does not deny himself on that day must be cut off from his people.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 95;

        this.children = [];
    }
    return FastOnYomKippur;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var HearTorahAtEndOf7YearsDuringSukkot = (function (_super) {
    __extends(HearTorahAtEndOf7YearsDuringSukkot, _super);
    function HearTorahAtEndOf7YearsDuringSukkot() {
        _super.call(this);

        this.shortSummary = "Hear the Torah read in Jerusalem <br />on Sukkot following the 7th year.";
        this.text = "Then Moses commanded them: “At the end of every seven years, in the year for canceling debts, during the Festival of Sukkot, when all Israel comes to appear before the LORD your God at the place he will choose, you shall read this law before them in their hearing. Assemble the people—men, women and children, and the foreigners residing in your towns—so they can listen and learn to fear the LORD your God and follow carefully all the words of this law.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 32;
        this.verse = 12;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "The text explicitly calls for hearing the Torah in the place that God chooses (Jerusalem). However, this doesn't require living in Israel, as those outside Jerusalem (or even outside Israel) would make pilgrimage. Therefore, I've marked this commandment as not requiring living in Israel. Additionally, I've labeled this commandment as able to be kept today, even though the text calls for a reading of the Torah on the 'place God Chooses', which, if this is the Temple Mount, it would be impossible to carry out this commandment due to Islamic restrictions for non-Muslims on the Temple Mount.";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 0 /* None */;
        this.jewishObservance = 2 /* RecognizedButPrevented */; // I need to verify this. Since this is "the place God chooses" (the Temple mount), maybe this can't be carried out.
        this.number = 425;

        this.children = [];
    }
    return HearTorahAtEndOf7YearsDuringSukkot;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var LiveInSukkahDuringSukkot = (function (_super) {
    __extends(LiveInSukkahDuringSukkot, _super);
    function LiveInSukkahDuringSukkot() {
        _super.call(this);

        this.shortSummary = "Live in a sukkah during Sukkot.";
        this.text = "Live in temporary shelters for seven days: All native-born Israelites are to live in such shelters so your descendants will know that I had the Israelites live in temporary shelters when I brought them out of Egypt. I am the LORD your God.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 42;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false; // Difficult to say. See commentary.
        this.requiresTemple = false;
        this.commentary = "Can this commandment be carried out today, outside of Israel? Possibly. Living in a sukkah for 7 days in cold climates outside of Israel is an exercise in survival. :-)";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */; // I need to verify this. Since this is "the place God chooses" (the Temple mount), maybe this can't be carried out.
        this.number = 117;

        this.children = [
            new BringSukkotOfferingsFirstDay(),
            new HearTorahAtEndOf7YearsDuringSukkot()
        ];
    }
    return LiveInSukkahDuringSukkot;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RestOnShavuot = (function (_super) {
    __extends(RestOnShavuot, _super);
    function RestOnShavuot() {
        _super.call(this);

        this.shortSummary = "Rest on Shavuot";
        this.text = "On that same day you are to proclaim a sacred assembly and do no regular work. This is to be a lasting ordinance for the generations to come, wherever you live.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 100;

        this.children = [
            new DontWorkOnShavuot()
        ];
    }
    return RestOnShavuot;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var RestOnYomTeruah = (function (_super) {
    __extends(RestOnYomTeruah, _super);
    function RestOnYomTeruah() {
        _super.call(this);

        this.shortSummary = "Rest on Yom Teruah";
        this.text = "On the first day of the seventh month you are to have a day of rest, a sacred assembly commemorated with trumpet blasts.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 24;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 102;

        this.children = [
            new DontWorkOnYomTeruah()
        ];
    }
    return RestOnYomTeruah;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var SoundShofarOnYomTeruah = (function (_super) {
    __extends(SoundShofarOnYomTeruah, _super);
    function SoundShofarOnYomTeruah() {
        _super.call(this);

        this.shortSummary = "Sound the shofar on Yom Teruah";
        this.text = "In the seventh month, on the first day of the month, you are to have a holy convocation; do not do any kind of ordinary work; it is a day of blowing the shofar for you.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 1;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 116;

        this.children = [
            new RestOnYomTeruah(),
            new BringYomTeruahOfferings()
        ];
    }
    return SoundShofarOnYomTeruah;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontAddCommandments = (function (_super) {
    __extends(DontAddCommandments, _super);
    function DontAddCommandments() {
        _super.call(this);

        this.shortSummary = "Don't add commandments.";
        this.text = "See that you do all I command you; do not add to it or take away from it.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 12;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 580;

        this.children = [new DontRemoveCommandments()];
    }
    return DontAddCommandments;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var DontRemoveCommandments = (function (_super) {
    __extends(DontRemoveCommandments, _super);
    function DontRemoveCommandments() {
        _super.call(this);

        this.shortSummary = "Don't remove commandments.";
        this.text = "See that you do all I command you; do not add to it or take away from it.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 12;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 581;
    }
    return DontRemoveCommandments;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var KeepAllGodsCommandments = (function (_super) {
    __extends(KeepAllGodsCommandments, _super);
    function KeepAllGodsCommandments() {
        _super.call(this);

        this.shortSummary = "Keep all God's commandments.";
        this.text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 28;
        this.verse = 9;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 11;

        this.children = [
            new TeachYourChildrenCommandments(),
            new RememberCommandmentsThroughTassels(),
            new DontAddCommandments(),
            new AppearsBeforeGodAtPilgrimFeasts(),
            new AfflictYourselfOnYomKippur(),
            new SoundShofarOnYomTeruah()
        ];
    }
    return KeepAllGodsCommandments;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
/*
* Judaism traditionally interprets this as a negative commandment: "don't follow the lusts of your heart".
* However, looking at the surrounding verses, it appears this commandment
* is focused more on the "remember the commandments" side of things:
*
* -The preceding verse commands tassels on the garment.
* -This verse says the tassels are "so you will remember all the commands of the LORD".
* -The following verse reiterates the tassels are there "so you may remember and do all My commandments, and be holy unto the LORD".
*
* This suggests the whole purpose here is remembering God's commandments.
* Accordingly, I've defined this commandment as a positive one, "remember God's commandments through tassels".
*
*/
var RememberCommandmentsThroughTassels = (function (_super) {
    __extends(RememberCommandmentsThroughTassels, _super);
    function RememberCommandmentsThroughTassels() {
        _super.call(this);

        this.shortSummary = "Remember the commandments <br /> through tassels on your clothes.";
        this.text = "Throughout the generations to come you are to make tassels on the corners of your garments, with a blue cord on each tassel. You will have these tassels to look at and so you will remember all the commands of the Lord, that you may obey them and not prostitute yourselves by chasing after the lusts of your own hearts and eyes. Then you will remember to obey all my commands and will be consecrated to your God.";
        this.book = 2 /* Numbers */;
        this.chapter = 15;
        this.verse = 37;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 25;

        this.children = [];
    }
    return RememberCommandmentsThroughTassels;
})(CommandmentBase);
///<reference path='../commandmentBase.ts' />
var TeachYourChildrenCommandments = (function (_super) {
    __extends(TeachYourChildrenCommandments, _super);
    function TeachYourChildrenCommandments() {
        _super.call(this);

        this.shortSummary = "Teach your children <br /> the commandments.";
        this.text = "These commanmdents that I give to you this day are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 7;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 22;
    }
    return TeachYourChildrenCommandments;
})(CommandmentBase);
var CommandmentType;
(function (CommandmentType) {
    CommandmentType[CommandmentType["Positive"] = 0] = "Positive";
    CommandmentType[CommandmentType["Negative"] = 1] = "Negative";
})(CommandmentType || (CommandmentType = {}));
var CommandmentObedience;
(function (CommandmentObedience) {
    /**
    * No obedience to the commandment is believed to be necessary.
    */
    CommandmentObedience[CommandmentObedience["None"] = 0] = "None";

    /**
    * The commandment is generally recognized as binding, but not widely practiced. Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.
    */
    CommandmentObedience[CommandmentObedience["Recognized"] = 1] = "Recognized";

    /**
    * The commandment is generally recognized as binding, but the commandment is unable to be practiced for external reasons. For example, because the lack of a Temple.
    */
    CommandmentObedience[CommandmentObedience["RecognizedButPrevented"] = 2] = "RecognizedButPrevented";

    /**
    * The commandment is recognized is binding and widely applied.
    */
    CommandmentObedience[CommandmentObedience["Binding"] = 3] = "Binding";
})(CommandmentObedience || (CommandmentObedience = {}));
var TorahBook;
(function (TorahBook) {
    TorahBook[TorahBook["Exodus"] = 0] = "Exodus";
    TorahBook[TorahBook["Leviticus"] = 1] = "Leviticus";
    TorahBook[TorahBook["Numbers"] = 2] = "Numbers";
    TorahBook[TorahBook["Deuteronomy"] = 3] = "Deuteronomy";
})(TorahBook || (TorahBook = {}));
//# sourceMappingURL=mitzvotmash.js.map
