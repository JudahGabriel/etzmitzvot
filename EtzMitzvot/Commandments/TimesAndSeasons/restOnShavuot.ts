///<reference path='../commandmentBase.ts' />

class RestOnShavuot extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Rest on Shavuot";
        this.text = "On that same day you are to proclaim a sacred assembly and do no regular work. This is to be a lasting ordinance for the generations to come, wherever you live.";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 100;

        this.children = [
            new DontWorkOnShavuot()
        ];
    }
}   