///<reference path='../commandmentBase.ts' />

class DestroyIdolatrousWorshipPlaces extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Destroy places of idol worship.";
        this.text = "These are the decrees and laws you must be careful to follow in the land that the LORD, the God of your fathers, has given you to possess—as long as you live in the land. Destroy completely all the places on the high mountains and on the hills and under every spreading tree where the nations you are dispossessing worship their gods. Break down their altars, smash their sacred stones and burn their Asherah poles in the fire; cut down the idols of their gods and wipe out their names from those places.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 12;
        this.verse = 1;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 53;

        this.children = [
            new BurnIdolatrousCity()
        ];
    }
}