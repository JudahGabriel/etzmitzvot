using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// Commandment not to bow to idols.
    /// </summary>
    /// <author>JGH</author>
    class NoBowingToIdols : NoWorshippingIdols
    {
        public NoBowingToIdols()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 20;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 27;
            base.ShortSummary = "No bowing to idols.";
            base.Text = "You shall not bow down to them or worship them; for I, the LORD your God, am a jealous God, punishing the children for the sin of the fathers to the third and fourth generation of those who hate me, but showing love to a thousand generations of those who love me and keep my commandments.";
            base.Verse = 5;
        }
    }
}
