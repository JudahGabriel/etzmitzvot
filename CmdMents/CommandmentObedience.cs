using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    /// <summary>
    /// The general obedience to this commandment as observed in a particular group.
    /// </summary>
    public enum CommandmentObedience
    {
        /// <summary>
        /// No obedience to the commandment is believed to be necessary.
        /// </summary>
        None,
        /// <summary>
        /// The commandment is recognized publically as binding, but not widely practiced.
        /// </summary>
        /// <remarks>Frequently, this public acknowledgement comes in the form of preaching, homilies, etc.</remarks>
        Recognized,
        /// <summary>
        /// Most in the group attempt to perform this commandment, with varying success.
        /// </summary>
        Attempted,
        /// <summary>
        /// The commandment is both acknowledged and widely obeyed.
        /// </summary>
        Obeyed
    }
}
