var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontOppressWeak = (function (_super) {
    __extends(DontOppressWeak, _super);
    function DontOppressWeak() {
        _super.call(this);

        this.shortSummary = "Don't oppress widows or orphans.";
        this.text = "Do not take advantage of a widow or an orphan. If you do and they cry out to me, I will certainly hear their cry. My anger will be aroused, and I will kill you with the sword; your wives will become widows and your children fatherless.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 18;

        this.children = [];
    }
    return DontOppressWeak;
})(CommandmentBase);
