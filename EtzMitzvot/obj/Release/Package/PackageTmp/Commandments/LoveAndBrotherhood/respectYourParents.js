var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RespectYourParents = (function (_super) {
    __extends(RespectYourParents, _super);
    function RespectYourParents() {
        _super.call(this);

        this.shortSummary = "Respect your parents.";
        this.text = "Each of you must respect your mother and father, and you must observe my Sabbaths. I am the Lord your God.";
        this.book = 1 /* Leviticus */;
        this.chapter = 19;
        this.verse = 3;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 2 /* Binding */;
        this.messianicObservance = 2 /* Binding */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 585;

        this.children = [new HonorYourParents()];
    }
    return RespectYourParents;
})(CommandmentBase);
