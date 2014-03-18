///<reference path='../commandmentBase.ts' />

class DontBearGrudges extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't bear grudges.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
        this.book = TorahBook.Exodus;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 21;

        this.children = [
            new DontTakeRevenge()
        ];
    }
}  