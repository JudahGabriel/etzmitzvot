///<reference path='../commandmentBase.ts' />

class DontEngageInHomosexuality extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't engage in homosexuality.";
        this.text = "You shall not lie with a male as with a woman; it is an abomination.";
        this.book = TorahBook.Leviticus;
        this.chapter = 18;
        this.verse = 22;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentaryUrl = "http://judahgabriel.blogspot.com/2015/07/torah-tuesdays-god-and-gay-rights.html";

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 122;

        this.children = [
        ];
    }
}  