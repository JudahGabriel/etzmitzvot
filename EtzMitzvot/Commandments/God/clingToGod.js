var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
