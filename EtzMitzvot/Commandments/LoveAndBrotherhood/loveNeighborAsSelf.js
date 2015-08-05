var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoveNeighborAsSelf = (function (_super) {
    __extends(LoveNeighborAsSelf, _super);
    function LoveNeighborAsSelf() {
        _super.call(this);
        this.shortSummary = "Love your neighbor as yourself.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 18;
        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 13;
        this.children = [
            new RespectTheElderly(),
            new LoveSojourners(),
            new DontHateBrother(),
            new MarrySpouse()
        ];
    }
    return LoveNeighborAsSelf;
})(CommandmentBase);
