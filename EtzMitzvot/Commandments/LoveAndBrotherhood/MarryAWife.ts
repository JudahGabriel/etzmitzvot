///<reference path='../commandmentBase.ts' />

class MarryAWife extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Marry a wife through <br /> betrothal and wedding contract.";
        this.text = "If any man takes a wife and goes in to her...";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 22;
        this.verse = 13;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.None;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 122;

        this.children = [
            new DontEngageInHomosexuality()
        ];
    }
}  