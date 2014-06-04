///<reference path='../commandmentBase.ts' />

class BringYomTeruahOfferings extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Bring additional offerings<br /> on Yom Teruah.";
        this.text = "On the first day of the seventh month you shall have a holy convocation. You shall not do any ordinary work. It is a day for you to blow the trumpets, and you shall offer a burnt offering, for a pleasing aroma to the Lord: one bull from the herd, one ram, seven male lambs a year old without blemish; also their grain offering of fine flour mixed with oil, three tenths of an ephah for the bull, two tenths for the ram, and one tenth for each of the seven lambs; with one male goat for a sin offering, to make atonement for you; besides the burnt offering of the new moon, and its grain offering, and the regular burnt offering and its grain offering, and their drink offering, according to the rule for them, for a pleasing aroma, a food offering to the Lord.";
        this.book = TorahBook.Numbers;
        this.chapter = 29;
        this.verse = 2;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on Yom Teruah (Rosh Hashana) consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 388;

        this.children = [
        ];
    }
}  