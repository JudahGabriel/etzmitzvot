var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppearsBeforeGodAtPilgrimFeasts = (function (_super) {
    __extends(AppearsBeforeGodAtPilgrimFeasts, _super);
    function AppearsBeforeGodAtPilgrimFeasts() {
        _super.call(this);

        this.shortSummary = "Appear at God's chosen place <br />each year for the 3 pilgrimage feasts.";
        this.text = "Three times a year all your men must appear before the Lord your God at the place he will choose: at the Festival of Unleavened Bread, the Festival of Weeks and the Festival of Tabernacles.";
        this.book = 3 /* Deuteronomy */;
        this.chapter = 16;
        this.verse = 16;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = true;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 420;

        this.children = [
            new CelebrateOnPilgrimFeasts()
        ];
    }
    return AppearsBeforeGodAtPilgrimFeasts;
})(CommandmentBase);
