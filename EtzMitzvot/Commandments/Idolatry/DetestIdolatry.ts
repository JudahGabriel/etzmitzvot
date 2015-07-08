///<reference path='../commandmentBase.ts' />

class DetestIdolatry extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Detest idolatry.";
        this.text = "The images of their gods you are to burn in the fire. Do not covet the silver and gold on them, and do not take it for yourselves, or you will be ensnared by it, for it is detestable to the LORD your God. Do not bring a detestable thing into your house or you, like it, will be set apart for destruction. Regard it as vile and utterly detest it, for it is set apart for destruction.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 7;
        this.verse = 26;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 54;

        this.children = [
            new DontInquireIntoIdolatry(), new DontBenefitFromIdols()
        ];
    }
}