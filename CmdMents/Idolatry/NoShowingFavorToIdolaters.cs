using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoShowingFavorToIdolaters : NoLovingIdolators
    {
        public NoShowingFavorToIdolaters()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 7;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Recognized;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 57;
            base.ShortSummary = "No showing favor to idolaters.";
            base.Text = "...Make no treaty with them, and show them no mercy.";
            base.Verse = 2;
        }
    }
}
