///<reference path='../commandmentBase.ts' />

class KnowGodExists extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Know that God exists.";
        this.text = "I am the LORD your God, who brought you out of the land of Egypt, out of the abode of slavery.";
        this.book = TorahBook.Exodus;
        this.chapter = 20;
        this.verse = 2;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 1;

        this.children = [
            new KnowGodIsOne(), new AcknowledgeGodAsHoly()
        ];
    }
}