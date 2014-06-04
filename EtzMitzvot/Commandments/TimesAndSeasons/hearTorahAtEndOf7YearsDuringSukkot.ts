///<reference path='../commandmentBase.ts' />

class HearTorahAtEndOf7YearsDuringSukkot extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Hear the Torah read in Jerusalem <br />on Sukkot following the 7th year.";
        this.text = "Then Moses commanded them: “At the end of every seven years, in the year for canceling debts, during the Festival of Sukkot, when all Israel comes to appear before the LORD your God at the place he will choose, you shall read this law before them in their hearing. Assemble the people—men, women and children, and the foreigners residing in your towns—so they can listen and learn to fear the LORD your God and follow carefully all the words of this law.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 32;
        this.verse = 12;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "The text explicitly calls for hearing the Torah in the place that God chooses (Jerusalem). However, this doesn't require living in Israel, as those outside Jerusalem (or even outside Israel) would make pilgrimage. Therefore, I've marked this commandment as not requiring living in Israel. Additionally, I've labeled this commandment as able to be kept today, even though the text calls for a reading of the Torah on the 'place God Chooses', which, if this is the Temple Mount, it would be impossible to carry out this commandment due to Islamic restrictions for non-Muslims on the Temple Mount.";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.None;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented; // I need to verify this. Since this is "the place God chooses" (the Temple mount), maybe this can't be carried out.
        this.number = 425;

        this.children = [

        ];
    }
}  