///<reference path='../commandmentBase.ts' />

class CelebrateOnPilgrimFeasts extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Celebrate on the 3 pilgrimage feasts.";
        this.text = "Three times a year you are to celebrate a festival to me.";
        this.book = TorahBook.Exodus;
        this.chapter = 23;
        this.verse = 14;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;
        this.requiresTemple = false;
        this.commentary = "Maimonides equates celebrating on these festivals with bringing a peace offering in the Tabernacle. The text, however, is more open ended, and as such, I have not limited the commandment so, and thus, allow for keeping this commandment today.";

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.None;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 421;

        this.children = [
            new LiveInSukkahDuringSukkot(),
            new EatUnleavenedBreadDuringPassover(),
            new RestOnShavuot()
        ];
    }
}  