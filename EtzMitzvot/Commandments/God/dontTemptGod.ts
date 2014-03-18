///<reference path='../commandmentBase.ts' />

class DontTemptGod extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't tempt God.";
        this.text = "You shall not tempt the LORD your God.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 6;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 10;

        this.children = [
            
        ];
    }
}  