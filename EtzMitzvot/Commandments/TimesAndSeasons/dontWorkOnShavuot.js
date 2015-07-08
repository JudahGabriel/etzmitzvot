var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontWorkOnShavuot = (function (_super) {
    __extends(DontWorkOnShavuot, _super);
    function DontWorkOnShavuot() {
        _super.call(this);
        this.shortSummary = "Don't work on Shavuot";
        this.text = "On that same day you are to proclaim a sacred assembly and do no regular work. This is to be a lasting ordinance for the generations to come, wherever you live.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 21;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.type = 1 /* Negative */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 101;
        this.children = [
            new BringShavuotOfferings()
        ];
    }
    return DontWorkOnShavuot;
})(CommandmentBase);
