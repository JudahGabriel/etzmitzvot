var CommandmentObedience;
(function (CommandmentObedience) {
    /*
    * No obedience to the commandment is believed to be necessary.
    */
    CommandmentObedience[CommandmentObedience["None"] = 0] = "None";

    /*
    * The commandment is generally recognized as binding, but not widely practiced. Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.
    */
    CommandmentObedience[CommandmentObedience["Recognized"] = 1] = "Recognized";

    /*
    * Most in the group attempt to perform this commandment, with varying success.
    */
    CommandmentObedience[CommandmentObedience["Attempted"] = 2] = "Attempted";

    /*
    * The commandment is both acknowledged and widely obeyed.
    */
    CommandmentObedience[CommandmentObedience["Obeyed"] = 3] = "Obeyed";
})(CommandmentObedience || (CommandmentObedience = {}));
//# sourceMappingURL=obedienceLevel.js.map
