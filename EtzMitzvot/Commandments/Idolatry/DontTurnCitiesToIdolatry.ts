///<reference path='../commandmentBase.ts' />

class DontTurnCitiesToIdolatry extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't turn a city to idolatry.";
        this.text = "If you hear it said about one of the towns the LORD your God is giving you to live in that troublemakers have arisen among you and have led the people of their town astray, saying, “Let us go and worship other gods” (gods you have not known), then you must inquire, probe and investigate it thoroughly.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 13;
        this.verse = 14;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 32;

        this.children = [
            new DestroyIdolatrousWorshipPlaces()
        ];
    }
}