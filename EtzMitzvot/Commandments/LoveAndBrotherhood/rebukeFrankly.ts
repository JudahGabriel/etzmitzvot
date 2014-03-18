///<reference path='../commandmentBase.ts' />

class RebukeFrankly extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Rebuke frankly.";
        this.text = "Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 16;

        this.children = [
        ];
    }
}   