var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CelebrateOnPilgrimFeasts = (function (_super) {
    __extends(CelebrateOnPilgrimFeasts, _super);
    function CelebrateOnPilgrimFeasts() {
        _super.call(this);
        this.shortSummary = "Celebrate on the 3 pilgrimage feasts.";
        this.text = "Three times a year you are to celebrate a festival to me.";
        this.book = 0 /* Exodus */;
        this.chapter = 23;
        this.verse = 14;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Maimonides equates celebrating on these festivals with bringing a peace offering in the Tabernacle. The text, however, is more open ended, and as such, I have not limited the commandment so, and thus, allow for keeping this commandment today.";
        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 421;
        this.children = [
            new LiveInSukkahDuringSukkot(),
            new EatUnleavenedBreadDuringPassover(),
            new RestOnShavuot()
        ];
    }
    return CelebrateOnPilgrimFeasts;
})(CommandmentBase);
