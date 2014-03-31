var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 15;

        this.children = [
            new DontEmbarrassOthers(), new DontSpeakEvil(), new DontBearGrudges(), new DontOppressWeak(), new RebukeFrankly()
        ];
    }
    return DontHateBrother;
})(CommandmentBase);
