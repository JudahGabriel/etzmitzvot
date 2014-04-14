var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
