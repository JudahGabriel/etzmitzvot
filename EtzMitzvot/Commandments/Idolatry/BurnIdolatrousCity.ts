///<reference path='../commandmentBase.ts' />

class BurnIdolatrousCity extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Burn the city that has <br /> turned to idol worship.";
        this.text = "Gather all the plunder of the town into the middle of the public square and completely burn the town and all its plunder as a whole burnt offering to the LORD your God. It is to remain a ruin forever, never to be rebuilt.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 13;
        this.verse = 16;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 33;

        this.children = [
        ];
    }
}