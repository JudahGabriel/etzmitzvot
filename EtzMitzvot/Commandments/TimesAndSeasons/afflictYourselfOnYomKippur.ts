///<reference path='../commandmentBase.ts' />

class AfflictYourselfOnYomKippur extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Afflict yourself on Yom Kippur";
        this.text = "This is to be a lasting ordinance for you: On the tenth day of the seventh month you must deny yourselves and fast.";
        this.book = TorahBook.Leviticus;
        this.chapter = 16;
        this.verse = 29;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 94;

        this.children = [
            new FastOnYomKippur()
        ];
    }
} 