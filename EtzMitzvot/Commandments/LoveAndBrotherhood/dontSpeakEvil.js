var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        this.children = [
        ];
    }
    return DontSpeakEvil;
})(CommandmentBase);
