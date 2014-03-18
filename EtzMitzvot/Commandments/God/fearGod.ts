///<reference path='../commandmentBase.ts' />

class FearGod extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Fear the LORD your God.";
        this.text = "Fear the LORD your God.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 10;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 5;

        this.children = [
            new ClingToGod(), new ListenToGodsProphet()
        ];
    }
} 