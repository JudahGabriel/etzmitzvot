using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoPityingIdolators : NoLovingIdolators
    {
        public NoPityingIdolators()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;

            base.FollowedByChristians = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByMessianics = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByObservantJews = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.

            base.Number = 39;
            base.ShortSummary = "No pitying idolators.";
            base.Text = "Show him no pity.";
            base.Verse = 8;
        }
    }
}
