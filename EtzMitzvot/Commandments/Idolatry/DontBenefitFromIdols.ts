///<reference path='../commandmentBase.ts' />

class DontBenefitFromIdols extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't benefit from idols.";
        this.text = "The images of their gods you are to burn in the fire. Do not covet the silver and gold on them, and do not take it for yourselves, or you will be ensnared by it, for it is detestable to the LORD your God.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 7;
        this.verse = 25;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 25;

        this.children = [
            new DontBenefitFromBurnedIdolatrousCity()
        ];
    }
}