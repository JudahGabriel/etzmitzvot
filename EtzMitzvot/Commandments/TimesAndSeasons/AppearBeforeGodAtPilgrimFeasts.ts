///<reference path='../commandmentBase.ts' />

class AppearsBeforeGodAtPilgrimFeasts extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Appear at God's chosen place <br />each year for the 3 pilgrimage feasts.";
        this.text = "Three times a year all your men must appear before the Lord your God at the place he will choose: at the Festival of Unleavened Bread, the Festival of Weeks and the Festival of Tabernacles.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 16;
        this.verse = 16;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = true;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 420;

        this.children = [
            new CelebrateOnPilgrimFeasts()
        ];
    }
}  