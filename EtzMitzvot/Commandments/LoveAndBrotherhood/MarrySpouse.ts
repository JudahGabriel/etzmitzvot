///<reference path='../commandmentBase.ts' />

class MarrySpouse extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Marry a spouse.";
        this.text = "If any man takes a wife and goes in to her...";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 22;
        this.verse = 13;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentaryUrl = "http://judahgabriel.blogspot.com/2015/07/torah-tuesdays-get-hitched.html";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 122;

        this.children = [
            new DontEngageInHomosexuality(), new DontCommitAdultery()
        ];
    }
}  