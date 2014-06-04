///<reference path='../commandmentBase.ts' />

class EatUnleavenedBreadDuringPassover extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Eat unleavened bread during <br />Passover and Unleavened Bread.";
        this.text = "On the first month you are to eat bread made without yeast, from the evening of the fourteenth day until the evening of the twenty-first day.";
        this.book = TorahBook.Exodus;
        this.chapter = 12;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 114;

        this.children = [

        ];
    }
}  