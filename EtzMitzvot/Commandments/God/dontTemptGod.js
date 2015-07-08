var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontTemptGod = (function (_super) {
    __extends(DontTemptGod, _super);
    function DontTemptGod() {
        _super.call(this);
        this.shortSummary = "Don't tempt God.";
        this.text = "You shall not tempt the LORD your God.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 16;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 10;
        this.children = [
        ];
    }
    return DontTemptGod;
})(CommandmentBase);
