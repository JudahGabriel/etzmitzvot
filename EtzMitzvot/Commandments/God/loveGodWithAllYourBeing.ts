///<reference path='../commandmentBase.ts' />

class LoveGodWithHeartSoulStrength extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Love God with all your being.";
        this.text = "Love the LORD your God with all your heart and with all your soul and with all your strength.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 6;
        this.verse = 5;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 4;

        this.children = [
            new KeepAllGodsCommandments(),
            new KnowGodExists(),
            new DontHaveOtherGods()
        ];
    }
}