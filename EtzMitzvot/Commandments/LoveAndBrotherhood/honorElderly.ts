///<reference path='../commandmentBase.ts' />

class HonorTheElderly extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Honor the elderly.";
        this.text = "Rise in the presence of the aged, show respect for the elderly and revere your God. I am the LORD.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Recognized; // Recognized, because the majority of Jews, Messianics, and Christians don't actually rise in the presence of the aged, but do respect and honor the elderly, or at the very least teach it.
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Recognized;
        this.number = 23;

        this.children = [
        ];
    }
} 