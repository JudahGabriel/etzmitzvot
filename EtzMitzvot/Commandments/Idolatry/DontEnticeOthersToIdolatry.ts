///<reference path='../commandmentBase.ts' />

class DontEnticeOthersToIdolatry extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't entice others to worship idols.";
        this.text = "If your very own brother, or your son or daughter, or the wife you love, or your closest friend secretly entices you, saying, “Let us go and worship other gods” (gods that neither you nor your ancestors have known, gods of the peoples around you, whether near or far, from one end of the land to the other), do not yield to them or listen to them. Show them no pity. Do not spare them or shield them. You must certainly put them to death. Your hand must be the first in putting them to death, and then the hands of all the people. Stone them to death, because they tried to turn you away from the Lord your God, who brought you out of Egypt, out of the land of slavery. Then all Israel will hear and be afraid, and no one among you will do such an evil thing again.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 13;
        this.verse = 6;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Maimonides lists Deut 13:12 as the commandment, but that merely contains a the \"Israel will fear\" verse. Verses 6-12 contains the full command to not turn others to idolatry.";

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 36;

        this.children = [
            new DontTurnCitiesToIdolatry(), new DontSetupStatuesForWorship()
        ];
    }
}