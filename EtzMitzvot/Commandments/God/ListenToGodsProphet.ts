///<reference path='../commandmentBase.ts' />

class ListenToGodsProphet extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Listen to God's prophet.";
        this.text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 18;
        this.verse = 15;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 9;

        this.children = [
            new DontProphesyFalsely()
        ];
    }
} 