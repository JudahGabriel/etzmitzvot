using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoYieldingToIdolators : NoLovingIdolators
    {
        public NoYieldingToIdolators()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;

            base.FollowedByChristians = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByMessianics = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByObservantJews = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.

            base.Number = 38;
            base.ShortSummary = "No yielding to idolators.";
            base.Text = "Do not yield to him or listen to him.";
            base.Verse = 8;
        }
    }
}
