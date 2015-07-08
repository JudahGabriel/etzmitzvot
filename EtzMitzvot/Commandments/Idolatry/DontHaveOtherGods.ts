///<reference path='../commandmentBase.ts' />

class DontHaveOtherGods extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Don't have gods besides the LORD.";
        this.text = "You shall have no other gods before me.";
        this.book = TorahBook.Exodus;
        this.chapter = 20;
        this.verse = 3;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Negative;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 2;

        this.children = [
            new DetestIdolatry()
        ];
    }
}