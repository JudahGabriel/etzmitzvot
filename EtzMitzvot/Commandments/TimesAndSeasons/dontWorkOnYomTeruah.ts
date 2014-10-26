///<reference path='../commandmentBase.ts' />

class DontWorkOnYomTeruah extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't work on Yom Teruah";
        this.text = "Tell the people of Israel, ‘In the seventh month, the first of the month is to be for you a day of complete rest for remembering, a holy convocation announced with blasts on the shofar. Do not do any kind of ordinary work, and bring an offering made by fire to the LORD.’";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 25;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 103;

        this.children = [

        ];
    }
}  