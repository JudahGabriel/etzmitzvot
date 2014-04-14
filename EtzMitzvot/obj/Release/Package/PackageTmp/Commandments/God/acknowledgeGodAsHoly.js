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
