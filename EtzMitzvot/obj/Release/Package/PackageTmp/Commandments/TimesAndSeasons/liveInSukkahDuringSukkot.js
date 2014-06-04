var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LiveInSukkahDuringSukkot = (function (_super) {
    __extends(LiveInSukkahDuringSukkot, _super);
    function LiveInSukkahDuringSukkot() {
        _super.call(this);

        this.shortSummary = "Live in a sukkah during Sukkot.";
        this.text = "Live in temporary shelters for seven days: All native-born Israelites are to live in such shelters so your descendants will know that I had the Israelites live in temporary shelters when I brought them out of Egypt. I am the LORD your God.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 42;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Can this commandment be carried out today, outside of Israel? Possibly. Living in a sukkah for 7 days in cold climates outside of Israel is an exercise in survival. :-)";

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 117;

        this.children = [
            new BringSukkotOfferingsFirstDay(),
            new HearTorahAtEndOf7YearsDuringSukkot()
        ];
    }
    return LiveInSukkahDuringSukkot;
})(CommandmentBase);
