///<reference path='../commandmentBase.ts' />

class AcknowledgeGodAsHoly extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Acknowledge God as holy.";
        this.text = "I must be acknowledged as holy by the Israelites.";
        this.book = TorahBook.Leviticus;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 6;

        this.children = [
            new FearGod(), new BlessGodAfterEating(), new DontCurseGod(), new DontTemptGod()
        ];
    }
}