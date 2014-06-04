///<reference path='../commandmentBase.ts' />

class BringTwoLoavesOnShavuot extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Bring two loaves as a <br />wave offering on Shavuot.";
        this.text = "From wherever you live, bring two loaves made of two-tenths of an ephah of the finest flour, baked with yeast, as a wave offering of firstfruits to the Lord. Present with this bread seven male lambs, each a year old and without defect, one young bull and two rams. They will be a burnt offering to the Lord, together with their grain offerings and drink offerings—a food offering, an aroma pleasing to the Lord.";
        this.book = TorahBook.Leviticus;
        this.chapter = 23;
        this.verse = 17;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 387;

        this.children = [
        ];
    }
}    