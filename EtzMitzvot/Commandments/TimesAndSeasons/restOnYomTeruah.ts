///<reference path='../commandmentBase.ts' />

class RestOnYomTeruah extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Rest on Yom Teruah";
        this.text = "On the first day of the seventh month you are to have a day of rest, a sacred assembly commemorated with trumpet blasts.";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 24;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 102;

        this.children = [
            new DontWorkOnYomTeruah()
        ];
    }
}  