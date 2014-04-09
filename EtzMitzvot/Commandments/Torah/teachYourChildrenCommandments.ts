///<reference path='../commandmentBase.ts' />

class TeachYourChildrenCommandments extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Teach them to your children.";
        this.text = "These commanmdents that I give to you this day are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 6;
        this.verse = 7;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Recognized;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 22;
    }
}  