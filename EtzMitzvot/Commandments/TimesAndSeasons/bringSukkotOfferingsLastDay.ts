///<reference path='../commandmentBase.ts' />

class BringSukkotOfferingsLastDay extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Bring additional offerings<br /> on Shmini Atzeret.";
        this.text = "On the eighth day you are to have a festive assembly: you are not to do any kind of ordinary work; but you are to present a burnt offering, an offering made by fire, giving a fragrant aroma to Adonai — one bull, one ram, seven male lambs in their first year, without defect; with the grain and drink offerings for the bull, the ram and the lambs, according to their number, in keeping with the rule; also one male goat as a sin offering; in addition to the regular burnt offering with its grain and drink offerings.";
        this.book = TorahBook.Numbers;
        this.chapter = 29;
        this.verse = 35;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentary = "The additional offerings to be brought on the last day of Sukkot consist of animal sacrifices and food offerings. This requires the presence of a Temple or tabernacle in which to offfer these sacrifices, as well as a priesthood to serve in God's house. Since neither exists, I've deemed this commandment as requiring living in Israel, requiring a Temple, and thus cannot be carried out today.";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 391;

        this.children = [
        ];
    }
}  