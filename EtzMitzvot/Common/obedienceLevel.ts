enum CommandmentObedience {
    /**
     * No obedience to the commandment is believed to be necessary.
     */
    None,
    /**
     * The commandment is generally recognized as binding, but not widely practiced. Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.
     */
    Recognized,
    /**
     * The commandment is generally recognized as binding, but the commandment is unable to be practiced for external reasons. For example, because the lack of a Temple.
     */
    RecognizedButPrevented,
    /**
     * The commandment is recognized is binding and widely applied.
     */
    Binding,
}