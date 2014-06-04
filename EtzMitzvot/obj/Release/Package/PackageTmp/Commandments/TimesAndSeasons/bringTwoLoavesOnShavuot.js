var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BringTwoLoavesOnShavuot = (function (_super) {
    __extends(BringTwoLoavesOnShavuot, _super);
    function BringTwoLoavesOnShavuot() {
        _super.call(this);

        this.shortSummary = "Bring two loaves as a <br />wave offering on Shavuot.";
        this.text = "From wherever you live, bring two loaves made of two-tenths of an ephah of the finest flour, baked with yeast, as a wave offering of firstfruits to the Lord. Present with this bread seven male lambs, each a year old and without defect, one young bull and two rams. They will be a burnt offering to the Lord, together with their grain offerings and drink offerings—a food offering, an aroma pleasing to the Lord.";
        this.book = 1 /* Leviticus */;
        this.chapter = 23;
        this.verse = 17;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;

        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 387;

        this.children = [];
    }
    return BringTwoLoavesOnShavuot;
})(CommandmentBase);
