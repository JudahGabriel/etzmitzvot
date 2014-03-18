///<reference path='../commandmentBase.ts' />

class DontSpeakEvil extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't speak evil of your brother.";
        this.text = "Do not go about spreading slander among your people.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 16;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 19;

        this.children = [
        ];
    }
}   