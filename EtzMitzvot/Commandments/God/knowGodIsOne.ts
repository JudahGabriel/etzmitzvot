///<reference path='../commandmentBase.ts' />

class KnowGodIsOne extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Know that God is one.";
        this.text = "Hear, O Israel: The LORD our God, the LORD is one.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 6;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 3;

        this.children = [

        ];
    }
}  