///<reference path='../commandmentBase.ts' />

class DontProfaneGodsName extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't profane God's name.";
        this.text = "Do not profane my holy name.";
        this.book = TorahBook.Leviticus;
        this.chapter = 22;
        this.verse = 32;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 7;

        this.children = [
            new DontDestroyHolyObjects()
        ];
    }
} 