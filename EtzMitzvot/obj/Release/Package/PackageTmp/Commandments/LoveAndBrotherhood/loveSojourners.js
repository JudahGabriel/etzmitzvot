var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoveSojourners = (function (_super) {
    __extends(LoveSojourners, _super);
    function LoveSojourners() {
        _super.call(this);

        this.shortSummary = "Love the sojourner among you.";
        this.text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 10;
        this.verse = 19;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 14;

        this.children = [];
    }
    return LoveSojourners;
})(CommandmentBase);
