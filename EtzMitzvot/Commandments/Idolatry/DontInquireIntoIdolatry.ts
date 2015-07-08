///<reference path='../commandmentBase.ts' />

class DontInquireIntoIdolatry extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't inquire into idolatry.";
        this.text = "Do not turn to idols or make gods of cast metal for yourselves. I am the LORD your God.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 24;

        this.children = [
            new DontWorshipIdols()
        ];
    }
}