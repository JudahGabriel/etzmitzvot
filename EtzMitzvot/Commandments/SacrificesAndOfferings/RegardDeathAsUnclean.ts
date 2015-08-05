///<reference path='../commandmentBase.ts' />

class RegardDeathAsUnclean extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Regard as impure the person <br /> contaminated by death.";
        this.text = "This is the law when someone dies in a tent: everyone who comes into the tent and everyone who is in the tent shall be unclean seven days. And every open vessel that has no cover fastened on it is unclean. Whoever in the open field touches someone who was killed with a sword or who died naturally, or touches a human bone or a grave, shall be unclean seven days.";
        this.book = TorahBook.Numbers;
        this.chapter = 19;
        this.verse = 14;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentaryUrl = "http://judahgabriel.blogspot.com/2015/07/torah-tuesdays-everything-there-is-to.html";
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 391;

        this.children = [
            new PurifyDeathContamination()
        ];
    }
}  