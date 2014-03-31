class CommandmentBase {
    children: CommandmentBase[] = [];
    book: TorahBook;
    chapter: number;
    verse: number;
    type: CommandmentType;
    christianObservance: CommandmentObedience;
    messianicObservance: CommandmentObedience;
    jewishObservance: CommandmentObedience;
    number: number;
    shortSummary: string;
    text: string;
    canBeCarriedOutToday: boolean;
    requiresLivingInIsrael: boolean;
    requiresTemple: boolean;

    getBookChapterVerse() {
        var bookName = this.book === TorahBook.Deuteronomy ? "Deut." :
            this.book === TorahBook.Exodus ? "Ex." :
            this.book === TorahBook.Leviticus ? "Lev." :
            "Num.";
        return bookName + " " + this.chapter + ":" + this.verse;
    }
}