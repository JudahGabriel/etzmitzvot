using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    /// <summary>
    /// The general nature of the commandment.
    /// </summary>
    public enum CommandmentObedience
    {
        /// <summary>
        /// No obedience to the commandment is felt or believed to be necessary.
        /// </summary>
        None,
        /// <summary>
        /// The commandment is acknowledged publically as binding, but not widely practiced.
        /// </summary>
        /// <remarks>Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.</remarks>
        Acknowledged,
        /// <summary>
        /// The commandment is both acknowledged and widely obeyed.
        /// </summary>
        Obeyed
    }
}
