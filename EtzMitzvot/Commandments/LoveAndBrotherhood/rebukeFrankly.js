var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RebukeFrankly = (function (_super) {
    __extends(RebukeFrankly, _super);
    function RebukeFrankly() {
        _super.call(this);
        this.shortSummary = "Rebuke frankly.";
        this.text = "Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 17;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 16;
        this.children = [
        ];
    }
    return RebukeFrankly;
})(CommandmentBase);
