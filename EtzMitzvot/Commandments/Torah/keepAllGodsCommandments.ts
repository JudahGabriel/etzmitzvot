///<reference path='../commandmentBase.ts' />

class KeepAllGodsCommandments extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Keep all God's commandments.";
        this.text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 28;
        this.verse = 9;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Recognized;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 11;
    }
} 