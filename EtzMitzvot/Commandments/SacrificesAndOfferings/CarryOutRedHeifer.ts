///<reference path='../commandmentBase.ts' />

class CarryOutRedHeifer extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "The priest must carry out <br /> the Red Heifer procedure.";
        this.text = "Tell the people of Israel to bring you a red heifer without defect, in which there is no blemish, and on which a yoke has never come. And you shall give it to Eleazar the priest, and it shall be taken outside the camp and slaughtered before him. And Eleazar the priest shall take some of its blood with his finger, and sprinkle some of its blood toward the front of the tent of meeting seven times. And the heifer shall be burned in his sight. Its skin, its flesh, and its blood, with its dung, shall be burned. And the priest shall take cedarwood and hyssop and scarlet yarn, and throw them into the fire burning the heifer. Then the priest shall wash his clothes and bathe his body in water, and afterward he may come into the camp. But the priest shall be unclean until evening. The one who burns the heifer shall wash his clothes in water and bathe his body in water and shall be unclean until evening. And a man who is clean shall gather up the ashes of the heifer and deposit them outside the camp in a clean place. And they shall be kept for the water for impurity for the congregation of the people of Israel; it is a sin offering. And the one who gathers the ashes of the heifer shall wash his clothes and be unclean until evening. And this shall be a perpetual statute for the people of Israel, and for the stranger who sojourns among them.";
        this.book = TorahBook.Numbers;
        this.chapter = 19;
        this.verse = 2;

        this.canBeCarriedOutToday = false;
        this.requiresLivingInIsrael = true;
        this.requiresTemple = true;
        this.commentaryUrl = "http://judahgabriel.blogspot.com/2015/07/torah-tuesdays-everything-there-is-to.html";
        this.commentary = null;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.RecognizedButPrevented;
        this.jewishObservance = CommandmentObedience.RecognizedButPrevented;
        this.number = 390;

        this.children = [
            new RegardDeathAsUnclean()
        ];
    }
}  