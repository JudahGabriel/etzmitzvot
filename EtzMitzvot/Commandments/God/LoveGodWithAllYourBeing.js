var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoveGodWithHeartSoulStrength = (function (_super) {
    __extends(LoveGodWithHeartSoulStrength, _super);
    function LoveGodWithHeartSoulStrength() {
        _super.call(this);
        this.shortSummary = "Love God with all your being.";
        this.text = "Love the LORD your God with all your heart and with all your soul and with all your strength.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 5;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 4;
        this.children = [
            new KeepAllGodsCommandments(),
            new KnowGodExists(),
            new DontHaveOtherGods()
        ];
    }
    return LoveGodWithHeartSoulStrength;
})(CommandmentBase);
