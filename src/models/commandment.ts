import { CommandmentData } from "./commandmentData";
import { CommandmentType } from "./commandmentType";
import { CommandmentObedience } from "./obedienceLevel";
import { TorahBook } from "./torahBook";

export class Commandment {
    commandmentNumber: number;
    book: TorahBook;
    chapter: number;
    verse: number;
    type: CommandmentType;
    christianObservance: CommandmentObedience;
    messianicObservance: CommandmentObedience;
    jewishObservance: CommandmentObedience;
    shortSummary: string;
    text: string;
    canBeCarriedOutToday: boolean;
    requiresLivingInIsrael: boolean;
    requiresTemple: boolean;
    commentary?: string | null;
    commentaryUrl?: string | null;
    children: Commandment[] = [];
    parentCommmandmentNumber: number | null = null;

    // View model data, used for rendering the commandment in the UI.
    hiddenChildren: Commandment[] | null = null;
    parent: Commandment | undefined;
    x = 0;
    y = 0;
    x0: number | undefined = 0;
    y0: number | undefined = 0;
    depth: number = 0;
    // --------------------------------------------------------------

    constructor (data: Partial<CommandmentData>) {
        this.commandmentNumber = data.commandmentNumber || 0;
        this.book = data.book || "Genesis";
        this.chapter = data.chapter || 0;
        this.verse = data.verse || 0;
        this.type = data.type || "positive";
        this.christianObservance = data.christianObservance || "none";
        this.messianicObservance = data.messianicObservance || "none";
        this.jewishObservance = data.jewishObservance || "none";
        this.shortSummary = data.shortSummary || "";
        this.text = data.text || "";
        this.canBeCarriedOutToday = data.canBeCarriedOutToday || false;
        this.requiresLivingInIsrael = data.requiresLivingInIsrael || false;
        this.requiresTemple = data.requiresTemple || false;
        this.commentary = data.commentary;
        this.commentaryUrl = data.commentaryUrl;
        this.parentCommmandmentNumber = data.parent || null;
    }

    getBookChapterVerse(): string {
        const bookAbbreviation = this.getBookAbbreviation();
        return `${bookAbbreviation} ${this.chapter}:${this.verse}`;
    }

    getBookAbbreviation() {
        switch (this.book) {
            case "Genesis": return "Gen.";
            case "Exodus": return "Ex.";
            case "Leviticus": return "Lev.";
            case "Numbers": return "Num.";
            case "Deuteronomy": return "Deut.";
            default: return "";
        }
    }

    /**
     * Gets the short summary. If the short summary is more than 20 characters, it will be broken into two parts.
     */
    getShortSummaryParts(): string[]{
        const breakpoint = 20;
        if (this.shortSummary.length <= breakpoint) {
            return [this.shortSummary];
        }

        // Break after the first space after the 25th character.
        const spaceIndex = this.shortSummary.indexOf(" ", breakpoint);
        if (spaceIndex === -1) {
            return [this.shortSummary];
        }
        return [this.shortSummary.substring(0, spaceIndex), this.shortSummary.substring(spaceIndex + 1)];
    }

    getObservanceText(group: string, observance: CommandmentObedience): string {
        return observance === "none" ? `<span class="text-danger">Disregarded. ${group} do not keep it.</span>` :
               observance === "recognized" ? `<span class="text-warning">Recognized. ${group} recognize it as binding, but do not widely practice it.</span>` :
               observance === "recognizedButPrevented" ? `<span class="text-warning">Accepted. ${group} consider it binding, but can't practice it for external reasons.</span>` :
               `<span class="text-success">Binding. ${group} consider it binding and widely practice it.</span>`;
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