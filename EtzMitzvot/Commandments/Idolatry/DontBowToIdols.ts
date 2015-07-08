///<reference path='../commandmentBase.ts' />

class DontBowToIdols extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't bow to idols.";
        this.text = "You shall not bow down to them or worship them; for I, the LORD your God, am a jealous God, punishing the children for the sin of the fathers to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments.";
        this.book = TorahBook.Exodus;
        this.chapter = 20;
        this.verse = 5;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 27;

        this.children = [
        ];
    }
}