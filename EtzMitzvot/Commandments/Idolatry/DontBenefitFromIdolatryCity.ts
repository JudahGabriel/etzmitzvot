///<reference path='../commandmentBase.ts' />

class DontBenefitFromBurnedIdolatrousCity extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't benefit from the <br /> city burned for idolatry.";
        this.text = "You are to gather all the plunder of the town into the middle of the public square and completely burn the town and all its plunder as a whole burnt offering to the Lord your God. That town is to remain a ruin forever, never to be rebuilt. None of those condemned things shall be found in your hands, so that the LORD will turn from his fierce anger; he will show you mercy, have compassion on you, and increase your numbers, as he promised on oath to your forefathers";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 13;
        this.verse = 17;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 35;

        this.children = [
        ];
    }
}