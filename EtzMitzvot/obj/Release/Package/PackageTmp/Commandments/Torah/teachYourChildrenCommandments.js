var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TeachYourChildrenCommandments = (function (_super) {
    __extends(TeachYourChildrenCommandments, _super);
    function TeachYourChildrenCommandments() {
        _super.call(this);

        this.shortSummary = "Teach them to your children.";
        this.text = "These commanmdents that I give to you this day are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 6;
        this.verse = 7;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 22;
    }
    return TeachYourChildrenCommandments;
})(CommandmentBase);
