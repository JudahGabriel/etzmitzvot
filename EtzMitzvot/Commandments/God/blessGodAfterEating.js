var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        this.children = [
        ];
    }
    return BlessGodAfterEating;
})(CommandmentBase);
