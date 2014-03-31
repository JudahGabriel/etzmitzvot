var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ListenToGodsProphet = (function (_super) {
    __extends(ListenToGodsProphet, _super);
    function ListenToGodsProphet() {
        _super.call(this);

        this.shortSummary = "Listen to the prophet that God sends.";
        this.text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 18;
        this.verse = 15;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 9;

        this.children = [
            new DontProphesyFalsely()
        ];
    }
    return ListenToGodsProphet;
})(CommandmentBase);
