var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RestOnShavuot = (function (_super) {
    __extends(RestOnShavuot, _super);
    function RestOnShavuot() {
        _super.call(this);

        this.shortSummary = "Rest on Shavuot";
        this.text = "On that same day you are to proclaim a sacred assembly and do no regular work. This is to be a lasting ordinance for the generations to come, wherever you live.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 100;

        this.children = [
            new DontWorkOnShavuot()
        ];
    }
    return RestOnShavuot;
})(CommandmentBase);
