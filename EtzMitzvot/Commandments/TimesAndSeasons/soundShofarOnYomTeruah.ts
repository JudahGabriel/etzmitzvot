///<reference path='../commandmentBase.ts' />

class SoundShofarOnYomTeruah extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Sound the shofar on Yom Teruah";
        this.text = "In the seventh month, on the first day of the month, you are to have a holy convocation; do not do any kind of ordinary work; it is a day of blowing the shofar for you.";
        this.book = TorahBook.Numbers;
        this.chapter = 29;
        this.verse = 1;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 116;

        this.children = [
            new RestOnYomTeruah(),
            new BringYomTeruahOfferings()
        ];
    }
}  