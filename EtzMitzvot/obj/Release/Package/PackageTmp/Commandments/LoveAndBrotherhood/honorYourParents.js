var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HonorYourParents = (function (_super) {
    __extends(HonorYourParents, _super);
    function HonorYourParents() {
        _super.call(this);

        this.shortSummary = "Honor your parents.";
        this.text = "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.";
        this.book = 0 /* Exodus */;
        this.chapter = 20;
        this.verse = 12;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 3 /* Binding */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 584;
    }
    return HonorYourParents;
})(CommandmentBase);
