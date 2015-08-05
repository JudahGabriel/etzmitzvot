///<reference path='../commandmentBase.ts' />

class DontMakeIdolsForYourself extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't make idols for yourself.";
        this.text = "You shall not make for yourself an image in the form of anything in heaven above or on the earth beneath or in the waters below.";
        this.book = TorahBook.Exodus;
        this.chapter = 20;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;
        this.commentaryUrl = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 29;

        this.children = [
            new DontWorshipIdols()
        ];
    }
}