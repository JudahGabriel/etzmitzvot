var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontBearGrudges = (function (_super) {
    __extends(DontBearGrudges, _super);
    function DontBearGrudges() {
        _super.call(this);
        this.shortSummary = "Don't bear grudges.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = 0 /* Exodus */;
        this.chapter = 19;
        this.verse = 18;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.type = 1 /* Negative */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 21;
        this.children = [
            new DontTakeRevenge()
        ];
    }
    return DontBearGrudges;
})(CommandmentBase);
