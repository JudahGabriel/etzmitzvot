using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// No proseletizing others to worship of idols.
    /// </summary>
    /// <author>NET</author>
    /// <remarks>This seems redundant relative to its base; should we reinterpret this?</remarks>
    class NoIdolMissionizing : NoIncitingToIdolatry
    {
        
        public NoIdolMissionizing()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 11;
            base.ShortSummary = "No proseletizing others to idol worship.";
            base.Text = "\"Then all Israel will hear and be afraid, and no one among you will do such an evil thing again.";

            base.CanBeCarriedOutToday = true;
            // Knowingly disobeying this specific commandment seems very unlikely, but the more general applications are not so widely obeyed
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 36;
        }

    }
}
