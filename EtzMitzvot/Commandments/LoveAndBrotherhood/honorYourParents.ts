///<reference path='../commandmentBase.ts' />

class HonorYourParents extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Honor your parents.";
        this.text = "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.";
        this.book = TorahBook.Exodus;
        this.chapter = 20;
        this.verse = 12;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 584;
    }
}  