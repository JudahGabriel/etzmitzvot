///<reference path='../commandmentBase.ts' />

class DontSetupStatuesForWorship extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't setup idolatrous statues or poles.";
        this.text = "Do not setup any wooden Asherah pole beside the alter you build to the LORD your God, and do not erect a sacred stone, for these the LORD your God hates.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 16;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Maimonides interprets this as 'Not to erect a pillar in a public place of worship.' This is a narrow interpretation that limits the activity to public places of worship. I've summarized the commandment in a broader fashion that remains true to the text: do not erect idolatrous statues or poles.";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 50;

        this.children = [
        ];
    }
}