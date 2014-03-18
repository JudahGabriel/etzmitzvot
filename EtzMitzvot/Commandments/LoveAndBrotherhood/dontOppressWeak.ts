///<reference path='../commandmentBase.ts' />

class DontOppressWeak extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't oppress widows or orphans.";
        this.text = "Do not take advantage of a widow or an orphan. If you do and they cry out to me, I will certainly hear their cry. My anger will be aroused, and I will kill you with the sword; your wives will become widows and your children fatherless.";
        this.book = TorahBook.Exodus;
        this.chapter = 22;
        this.verse = 21;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 18;

        this.children = [
        ];
    }
}  