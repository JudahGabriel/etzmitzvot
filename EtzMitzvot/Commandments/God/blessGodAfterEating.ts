///<reference path='../commandmentBase.ts' />

class BlessGodAfterEating extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Bless God after eating.";
        this.text = "When you have eaten and are satisfied, praise the LORD your God for the good land he has given you.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 8;
        this.verse = 10;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 85;

        this.children = [
            
        ];
    }
} 