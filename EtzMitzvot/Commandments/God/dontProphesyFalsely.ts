///<reference path='../commandmentBase.ts' />

class DontProphesyFalsely extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't prophesy falsely.";
        this.text = "But a prophet who presumes to speak in my name anything I have not commanded him to say, or a prophet who speaks in the name of other gods, must be put to death.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 18;
        this.verse = 20;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 44;

        this.children = [
            new DontFearFalseProphet()
        ];
    }
} 