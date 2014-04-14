///<reference path='../commandmentBase.ts' />

/*
 * Judaism traditionally interprets this as a negative commandment: "don't follow the lusts of your heart".
 * However, looking at the surrounding verses, it appears this commandment
 * is focused more on the "remember the commandments" side of things:
 * 
 * -The preceding verse commands tassels on the garment.
 * -This verse says the tassels are "so you will remember all the commands of the LORD".
 * -The following verse reiterates the tassels are there "so you may remember and do all My commandments, and be holy unto the LORD".
 * 
 * This suggests the whole purpose here is remembering God's commandments.
 * Accordingly, I've defined this commandment as a positive one, "remember God's commandments through tassels".
 *
 */
class RememberCommandmentsThroughTassels extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Remember the commandments <br /> through tassels on your clothes.";
        this.text = "Throughout the generations to come you are to make tassels on the corners of your garments, with a blue cord on each tassel. You will have these tassels to look at and so you will remember all the commands of the Lord, that you may obey them and not prostitute yourselves by chasing after the lusts of your own hearts and eyes. Then you will remember to obey all my commands and will be consecrated to your God.";
        this.book = TorahBook.Numbers;
        this.chapter = 15;
        this.verse = 37;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Recognized;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 25;

        this.children = [];
    }
}  