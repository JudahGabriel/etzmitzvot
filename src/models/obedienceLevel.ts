/**
 * The obedience level of a commandment.
 * none: the group does not keep it. Examples include Christians not keeping the Sabbath.
 * recognized: the group recognizes the commandment as binding, but does not widely practice it. For example, Messianic Judaism recognizes the commandment to bless God after eating, though it is not widely practiced.
 * recognizedPartial: the group recognizes the commandment as binding, but only partially practices it. For example, Orthodox Judaism recognizes the commandment to honor the elderly, but does not practice the full extent of the command which includes rising in the presence of the aged.
 * recognizedButPrevented: the group recognizes the commandment as binding, but is prevented from keeping it for external reasons. For example, Orthodox Judaism would practice commandments pertaining to Levitical sacrifices, but cannot observe them due to a lack of a Temple.
 * binding: the group widely considers the commandment binding and practices it.
 */
export type CommandmentObedience = "none" | "recognized" | "recognizedPartial" | "recognizedButPrevented" | "binding";