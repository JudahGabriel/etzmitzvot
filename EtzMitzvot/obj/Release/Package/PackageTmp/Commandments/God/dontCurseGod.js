var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DontCurseGod = (function (_super) {
    __extends(DontCurseGod, _super);
    function DontCurseGod() {
        _super.call(this);

        this.shortSummary = "Don't curse God.";
        this.text = "You are not to curse God, and you are not to curse a leader of your people.";
        this.book = 0 /* Exodus */;
        this.chapter = 22;
        this.verse = 27;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 1 /* Negative */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 26;

        this.children = [
            new DontProfaneGodsName()
        ];
    }
    return DontCurseGod;
})(CommandmentBase);
