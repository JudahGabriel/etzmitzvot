var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HonorTheElderly = (function (_super) {
    __extends(HonorTheElderly, _super);
    function HonorTheElderly() {
        _super.call(this);

        this.shortSummary = "Honor the elderly.";
        this.text = "Rise in the presence of the aged, show respect for the elderly and revere your God. I am the LORD.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 1 /* Recognized */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 1 /* Recognized */;
        this.number = 23;

        this.children = [];
    }
    return HonorTheElderly;
})(CommandmentBase);
