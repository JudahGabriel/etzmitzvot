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
    /// <remarks>
    /// Judah's response: 
    /// 
    /// The base commandment is now NoWorshippingIdols, and the old base, NoIncitingToIdolatry,
    /// is now the more specific NoIncitingCityToIdolatry.
    /// NoIncitingCityToIdolatry now derives from this commandment.
    /// </remarks>
    class NoEnticingOthersToIdolatry : NoWorshippingIdols
    {
        
        public NoEnticingOthersToIdolatry()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 11;
            base.ShortSummary = "No enticing others to worship idols.";
            base.Text = "\"Then all Israel will hear and be afraid, and no one among you will do such an evil thing again.";

            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            // Knowingly disobeying this specific commandment seems very unlikely, but the more general applications are not so widely obeyed
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 36;
        }

    }
}
