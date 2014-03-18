///<reference path='../commandmentBase.ts' />

// Big discussion on this here: http://judahgabriel.blogspot.com/2009/10/judaisms-alien-conversion-program.html
class LoveSojourners extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Love the sojourner among you.";
        this.text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
        this.book = TorahBook.Deuteronomy;
        this.chapter = 10;
        this.verse = 19;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false; // Tough to say. It's intended for Israel's citizens, directing them to treat foreigners kindly.
        this.requiresTemple = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 14;

        this.children = [
        ];
    }
}  