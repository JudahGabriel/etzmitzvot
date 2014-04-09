///<reference path='../commandmentBase.ts' />

class RespectYourParents extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Respect your parents.";
        this.text = "Each of you must respect your mother and father, and you must observe my Sabbaths. I am the Lord your God.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 3;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 585;

        this.children = [new HonorYourParents()];
    }
}   