using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoMakingCovenantsWithIdolaters : NoLovingIdolators
    {
        public NoMakingCovenantsWithIdolaters()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 7;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 56;
            base.ShortSummary = "No making covenants with idolaters.";
            base.Text = "...and when the LORD your God has delivered them over to you and you have defeated them, then you must destroy them totally. Make no treaty with them, and show them no mercy.";
            base.Verse = 2;
        }
    }
}
