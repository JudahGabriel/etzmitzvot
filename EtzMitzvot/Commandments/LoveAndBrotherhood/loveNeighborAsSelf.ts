///<reference path='../commandmentBase.ts' />

class LoveNeighborAsSelf extends CommandmentBase {
    constructor() {
        super();

        this.shortSummary = "Love your neighbor as yourself.";
        this.text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself.";
        this.book = TorahBook.Leviticus;
        this.chapter = 19;
        this.verse = 18;

        this.canBeCarriedOutToday = true;
        this.requiresLivingInIsrael = false;

        this.type = CommandmentType.Positive;
        this.christianObservance = CommandmentObedience.Binding;
        this.messianicObservance = CommandmentObedience.Binding;
        this.jewishObservance = CommandmentObedience.Binding;
        this.number = 13;

        this.children = [
            new HonorTheElderly(), new LoveSojourners(), new DontHateBrother()
        ];
    }
} 