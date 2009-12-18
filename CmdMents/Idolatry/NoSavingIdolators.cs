using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoSavingIdolators : NoLovingIdolators
    {
        public NoSavingIdolators()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;

            base.FollowedByChristians = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByMessianics = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.
            base.FollowedByObservantJews = CommandmentObedience.Attempted; // See comment on NoLovingIdolators.

            base.Number = 40;
            base.ShortSummary = "No saving idolators.";
            base.Text = "Do not spare him or shield him.";
            base.Verse = 8;
        }
    }
}
