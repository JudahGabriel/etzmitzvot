var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FastOnYomKippur = (function (_super) {
    __extends(FastOnYomKippur, _super);
    function FastOnYomKippur() {
        _super.call(this);

        this.shortSummary = "Fast on Yom Kippur";
        this.text = "Anyone who does not deny himself on that day must be cut off from his people.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 95;

        this.children = [];
    }
    return FastOnYomKippur;
})(CommandmentBase);
