var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RememberCommandmentsThroughTassels = (function (_super) {
    __extends(RememberCommandmentsThroughTassels, _super);
    function RememberCommandmentsThroughTassels() {
        _super.call(this);

        this.shortSummary = "Remember them through tassels.";
        this.text = "The Lord said to Moses, “Speak to the Israelites and say to them: ‘Throughout the generations to come you are to make tassels on the corners of your garments, with a blue cord on each tassel. You will have these tassels to look at and so you will remember all the commands of the Lord, that you may obey them and not prostitute yourselves by chasing after the lusts of your own hearts and eyes. Then you will remember to obey all my commands and will be consecrated to your God.";
        this.book = 2 /* Numbers */;
        this.chapter = 15;
        this.verse = 37;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 1 /* Recognized */;
        this.jewishObservance = 2 /* Binding */;
        this.number = 25;

        this.children = [];
    }
    return RememberCommandmentsThroughTassels;
})(CommandmentBase);
