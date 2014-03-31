var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 44;

        this.children = [
            new DontFearFalseProphet()
        ];
    }
    return DontProphesyFalsely;
})(CommandmentBase);
