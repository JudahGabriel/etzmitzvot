///<reference path='../commandmentBase.ts' />

class BringShavuotOfferings extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Bring additional offerings on Shavuot.";
        this.text = "On the day of firstfruits, when you present to the Lord an offering of new grain during the Festival of  Weeks, hold a sacred assembly and do no regular work. Present a burnt offering of two young  bulls, one ram and seven male lambs a year old as an aroma pleasing to the Lord. With each bull there is to be a grain offering of three-tenths of an ephah of the finest flour mixed with oil; with the ram, two-tenths; and with each of the seven lambs, one-tenth. Include one male goat to make atonement for you. Offer these together with their drink offerings, in addition to the regular burnt offering and its grain offering. Be sure the animals are without defect.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 28;
        this.verse = 26;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 386;

        this.children = [
            new BringTwoLoavesOnShavuot()
        ];
    }
}    