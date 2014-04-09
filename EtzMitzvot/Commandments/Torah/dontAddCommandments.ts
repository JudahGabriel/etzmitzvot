///<reference path='../commandmentBase.ts' />

class DontAddCommandments extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't add commandments.";
        this.text = "See that you do all I command you; do not add to it or take away from it.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 12;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 580;

        this.children = [new DontRemoveCommandments()];
    }
} 