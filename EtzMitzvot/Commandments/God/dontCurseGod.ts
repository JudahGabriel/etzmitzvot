///<reference path='../commandmentBase.ts' />

class DontCurseGod extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't curse God.";
        this.text = "You are not to curse God, and you are not to curse a leader of your people.";
        this.book = TorahBook.Exodus;
        this.chapter = 22;
        this.verse = 27;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 26;

        this.children = [
            new DontProfaneGodsName()
        ];
    }
} 