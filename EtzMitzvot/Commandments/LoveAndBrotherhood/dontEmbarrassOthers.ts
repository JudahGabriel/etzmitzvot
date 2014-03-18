///<reference path='../commandmentBase.ts' />

class DontEmbarrassOthers extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't embarrass others.";
        this.text = "Do not hate your brother in your heart. Rebuke your neighbor frankly so you will not share in his guilt.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 17;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 17;

        this.children = [
        ];
    }
}   