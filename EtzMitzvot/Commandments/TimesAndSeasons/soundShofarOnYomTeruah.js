var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SoundShofarOnYomTeruah = (function (_super) {
    __extends(SoundShofarOnYomTeruah, _super);
    function SoundShofarOnYomTeruah() {
        _super.call(this);

        this.shortSummary = "Sound the shofar on Yom Teruah";
        this.text = "In the seventh month, on the first day of the month, you are to have a holy convocation; do not do any kind of ordinary work; it is a day of blowing the shofar for you.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 1;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 3 /* Binding */;
        this.jewishObservance = 3 /* Binding */;
        this.number = 116;

        this.children = [
            new RestOnYomTeruah(),
            new BringYomTeruahOfferings()
        ];
    }
    return SoundShofarOnYomTeruah;
})(CommandmentBase);
