import { CommandmentType } from "./commandmentType";
import { CommandmentObedience } from "./obedienceLevel";

export interface CommandmentData {
    commandmentNumber: number;
    book: "Genesis" | "Exodus" | "Leviticus" | "Numbers" | "Deuteronomy";
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
    parent: number | null;
    commentary?: string | null;
    commentaryUrl?: string | null;
}