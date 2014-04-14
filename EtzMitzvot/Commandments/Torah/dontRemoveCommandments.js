var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
