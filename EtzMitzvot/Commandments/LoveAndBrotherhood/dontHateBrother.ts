///<reference path='../commandmentBase.ts' />

class DontHateBrother extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't hate your brother.";
        this.text = "Do not hate your brother in your heart.";
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
        this.number = 15;

        this.children = [
            new DontEmbarrassOthers(), new DontSpeakEvil(), new DontBearGrudges(), new DontOppressWeak(), new RebukeFrankly()
        ];
    }
}   