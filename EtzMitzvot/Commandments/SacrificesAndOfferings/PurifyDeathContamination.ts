///<reference path='../commandmentBase.ts' />

class PurifyDeathContamination extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Purify the person contaminated by death.";
        this.text = "For the unclean they shall take some ashes of the burnt sin offering, and fresh[ water shall be added in a vessel. Then a clean person shall take hyssop and dip it in the water and sprinkle it on the tent and on all the furnishings and on the persons who were there and on whoever touched the bone, or the slain or the dead or the grave. And the clean person shall sprinkle it on the unclean on the third day and on the seventh day. Thus on the seventh day he shall cleanse him, and he shall wash his clothes and bathe himself in water, and at evening he shall be clean. “If the man who is unclean does not cleanse himself, that person shall be cut off from the midst of the assembly, since he has defiled the sanctuary of the Lord. Because the water for impurity has not been thrown on him, he is unclean. And it shall be a statute forever for them.";
        this.book = TorahBook.Numbers;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentaryUrl = "http://judahgabriel.blogspot.com/2015/07/torah-tuesdays-everything-there-is-to.html";
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 392;

        this.children = [
        ];
    }
}  