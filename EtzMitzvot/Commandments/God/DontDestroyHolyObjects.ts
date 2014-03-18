///<reference path='../commandmentBase.ts' />

class DontDestroyHolyObjects extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't destroy God's holy objects.";
        this.text = "You must destroy all the places where the nations you are dispossessing served their gods, whether on high mountains, on hills, or under some leafy tree. Break down their altars, smash their standing-stones to pieces, burn up their sacred poles completely and cut down the carved images of their gods. Exterminate their name from that place. But you are not to treat the LORD your God this way.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 12;
        this.verse = 4;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Recognized;
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 8;

        this.children = [
        ];
    }
} 