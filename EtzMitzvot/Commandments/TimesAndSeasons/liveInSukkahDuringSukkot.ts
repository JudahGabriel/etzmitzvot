///<reference path='../commandmentBase.ts' />

class LiveInSukkahDuringSukkot extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Live in a sukkah during Sukkot.";
        this.text = "Live in temporary shelters for seven days: All native-born Israelites are to live in such shelters so your descendants will know that I had the Israelites live in temporary shelters when I brought them out of Egypt. I am the LORD your God.";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 42;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false; // Difficult to say. See commentary.
        this.requiresTemple = false;
        this.commentary = "Can this commandment be carried out today, outside of Israel? Possibly. Living in a sukkah for 7 days in cold climates outside of Israel is an exercise in survival. :-)";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Binding; // I need to verify this. Since this is "the place God chooses" (the Temple mount), maybe this can't be carried out.
        this.number = 117;

        this.children = [
            new BringSukkotOfferingsFirstDay(),
            new HearTorahAtEndOf7YearsDuringSukkot()
        ];
    }
}  