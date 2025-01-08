import { Commandment } from "./commandment";
import { CommandmentData } from "./commandmentData";

/**
 * Utility for fetching and manipulating commandment data.
 */
class CommandmentHierarchy {
    private mitzvotFetch: Promise<Commandment[]> | null = null;

    /**
     * Gets a list containing all the commandments.
     * @returns
     */
    async getCommandments(): Promise<Commandment[]> {
        if (!this.mitzvotFetch) {
            this.mitzvotFetch = this.fetchMitzvot();
        }

        return this.mitzvotFetch;
    }

    /**
     * Gets the root commmandments; those that have no parent commandment. This will return "love God" and "love your neighbor as yourself".
     * @returns The two root commandments: love God and love your neighbor as yourself.
     */
    async getRootCommandments(): Promise<Commandment[]> {
        const mitzvot = await this.getCommandments();
        return mitzvot.filter(mitzvah => !mitzvah.parentCommmandmentNumber);
    }

    private async fetchMitzvot(): Promise<Commandment[]> {
        // First, grab the mitzvot flat list from mitzvot.json.
        const fetchResult = await fetch("/mitzvot.json");
        if (!fetchResult.ok) {
            throw new Error(`Failed to fetch mitzvot.json: ${fetchResult.statusText}`);
        }

        // Convert it to JSON. It should be an array of CommandmentData objects.
        const mitzvotData = await fetchResult.json() as CommandmentData[];
        if (mitzvotData.length === 0) {
            throw new Error("mitzvot.json appears to contain an empty array.");
        }

        // Now, convert the flat list into a tree via the .parent property, which is a number that refers to the parent's commandment number.
        // To do this efficiently, we'll use a map for quick lookups of commandment by number.
        const mitzvotMap = new Map<number, Commandment>();
        mitzvotData.forEach(data => mitzvotMap.set(data.commandmentNumber, new Commandment(data)));
        mitzvotMap.forEach(mitzvah => {
            // Find its parent if it has one. (Two commandments don't have a parent: "love God" and "love your neighbor as yourself")
            const parent = mitzvah.parentCommmandmentNumber ? mitzvotMap.get(mitzvah.parentCommmandmentNumber) : null;
            if (parent) {
                parent.children.push(mitzvah);
            }
        });

        //return mitzvotMap.values().toArray(); // Can't use mitzvotMap.values().toArray() because iOS webkit doesn't support this yet as of 2025. ;-(
        return Array.from(mitzvotMap.values());
    }

    getGreatestCommandmentPlaceholder(): Commandment {
        return new Commandment({
            book: "Genesis",
            chapter: 0,
            verse: 0,
            canBeCarriedOutToday: true,
            christianObservance: "binding",
            commandmentNumber: 0,
            commentary: "",
            commentaryUrl: "",
            jewishObservance: "binding",
            messianicObservance: "binding",
            parent: null,
            requiresLivingInIsrael: false,
            requiresTemple: false,
            shortSummary: "The Greatest Commandments",
            text: "",
            type: "positive"
        });
    }
}

export var cmdMap = new CommandmentHierarchy();