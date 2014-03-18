///<reference path='../commandmentBase.ts' />

class DontFearFalseProphet extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't fear false prophets.";
        this.text = "If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken. That prophet has spoken presumptuously. Do not be afraid of him.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 18;
        this.verse = 22;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 45;

        this.children = [
        ];
    }
}