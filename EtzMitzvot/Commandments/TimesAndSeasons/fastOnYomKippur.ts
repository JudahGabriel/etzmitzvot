///<reference path='../commandmentBase.ts' />

class FastOnYomKippur extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Fast on Yom Kippur";
        this.text = "Anyone who does not deny himself on that day must be cut off from his people.";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 95;

        this.children = [

        ];
    }
}  