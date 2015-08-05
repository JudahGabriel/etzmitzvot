///<reference path='../commandmentBase.ts' />

class DontCommitAdultery extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't commit adultery.";
        this.text = "Don't have sex with your neighbor's wife and defile yourself with her.";
        this.book = TorahBook.Leviticus;
        this.chapter = 18;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentaryUrl = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 160;

        this.children = [
            
        ];
    }
}  