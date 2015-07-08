var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KeepAllGodsCommandments = (function (_super) {
    __extends(KeepAllGodsCommandments, _super);
    function KeepAllGodsCommandments() {
        _super.call(this);
        this.shortSummary = "Keep all God's commandments.";
        this.text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 28;
        this.verse = 9;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 11;
        this.children = [
            new TeachYourChildrenCommandments(),
            new RememberCommandmentsThroughTassels(),
            new DontAddCommandments(),
            new AppearsBeforeGodAtPilgrimFeasts(),
            new AfflictYourselfOnYomKippur(),
            new SoundShofarOnYomTeruah()
        ];
    }
    return KeepAllGodsCommandments;
})(CommandmentBase);
