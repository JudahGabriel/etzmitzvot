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
    commentary: string;

    x: number;
    y: number;
    x0: number;
    y0: number;

    private hiddenChildren: CommandmentBase[] = null;

    getBookChapterVerse() {
        var bookName = this.book === TorahBook.Deuteronomy ? "Deut." :
            this.book === TorahBook.Exodus ? "Ex." :
            this.book === TorahBook.Leviticus ? "Lev." :
            "Num.";
        return bookName + " " + this.chapter + ":" + this.verse;
    }

    getBookString(): string {
        return this.book === TorahBook.Deuteronomy ? "Deuteronomy" :
            this.book === TorahBook.Exodus ? "Exodus" :
            this.book === TorahBook.Leviticus ? "Leviticus" :
            "Numbers";
    }

    getShortSummaryParts(): string[]{
        return this.shortSummary.split("<br />");
    }

    getChildrenOrHidden(): CommandmentBase[] {
        if (this.hiddenChildren) {
            return this.hiddenChildren;
        } 

        if (this.children) {
            return this.children;
        }

        return [];
    }

    get isExpanded(): boolean {
        return this.hiddenChildren === null;
    }

    set isExpanded(value: boolean) {
        if (value && this.hiddenChildren != null && this.hiddenChildren.length) {
            this.children = this.hiddenChildren;
            this.hiddenChildren = null;
        } else if (!value && !this.hiddenChildren) {
            this.hiddenChildren = this.children;
            this.children = [];
        }
    }
}