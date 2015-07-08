var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BringSukkotOfferingsFirstDay = (function (_super) {
    __extends(BringSukkotOfferingsFirstDay, _super);
    function BringSukkotOfferingsFirstDay() {
        _super.call(this);
        this.shortSummary = "Bring additional offerings<br /> on the first day of Sukkot.";
        this.text = "‘On the fifteenth day of the seventh month, hold a sacred assembly and do no regular work. Celebrate a festival to the Lord for seven days. Present as an aroma pleasing to the Lord a food offering consisting of a burnt offering of thirteen young bulls, two rams and fourteen male lambs a year old, all without defect. With each of the thirteen bulls offer a grain offering of three-tenths of an ephah of the finest flour mixed with oil; with each of the two rams, two-tenths; and with each of the fourteen lambs, one-tenth. Include one male goat as a sin offering, in addition to the regular burnt offering with its grain offering and drink offering.";
        this.book = 2 /* Numbers */;
        this.chapter = 29;
        this.verse = 12;
        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on the first day of Sukkot consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";
        this.type = 0 /* Positive */;
        this.christianObservance = 0 /* None */;
        this.messianicObservance = 2 /* RecognizedButPrevented */;
        this.jewishObservance = 2 /* RecognizedButPrevented */;
        this.number = 390;
        this.children = [
            new BringSukkotOfferingsLastDay()
        ];
    }
    return BringSukkotOfferingsFirstDay;
})(CommandmentBase);
