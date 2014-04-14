var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AfflictYourselfOnYomKippur = (function (_super) {
    __extends(AfflictYourselfOnYomKippur, _super);
    function AfflictYourselfOnYomKippur() {
        _super.call(this);

        this.shortSummary = "Afflict yourself on Yom Kippur";
        this.text = "This is to be a lasting ordinance for you: On the tenth day of the seventh month you must deny yourselves and fast.";
        this.book = 1 /* Leviticus */;
        this.chapter = 16;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 94;

        this.children = [];
    }
    return AfflictYourselfOnYomKippur;
})(CommandmentBase);
