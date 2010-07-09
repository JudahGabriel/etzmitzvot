using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoSacredStoneCarvings : NoIdols
    {
        public NoSacredStoneCarvings()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 16;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 50;
            base.ShortSummary = "No erecting sacred stone carvings.";
            base.Text = "...and do not erect a sacred stone, for these the LORD your God hates.";
            base.Verse = 22;
        }
    }
}
