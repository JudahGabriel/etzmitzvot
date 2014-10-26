var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RestOnYomTeruah = (function (_super) {
    __extends(RestOnYomTeruah, _super);
    function RestOnYomTeruah() {
        _super.call(this);

        this.shortSummary = "Rest on Yom Teruah";
        this.text = "On the first day of the seventh month you are to have a day of rest, a sacred assembly commemorated with trumpet blasts.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 24;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 102;

        this.children = [
            new DontWorkOnYomTeruah()
        ];
    }
    return RestOnYomTeruah;
})(CommandmentBase);
