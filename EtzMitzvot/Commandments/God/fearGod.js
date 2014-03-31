var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 5;

        this.children = [
            new ClingToGod(), new ListenToGodsProphet()
        ];
    }
    return FearGod;
})(CommandmentBase);
