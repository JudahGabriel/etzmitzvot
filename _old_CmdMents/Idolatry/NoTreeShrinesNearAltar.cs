using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoTreeShrinesNearAltar : NoIdols
    {
        public NoTreeShrinesNearAltar()
        {
            base.AlternateText = "Do not plant any tree dedicated to Asherah beside the altar you build to the LORD your God...";
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 16;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 52;
            base.ShortSummary = "No Asherah tree shrines next to God's altar.";
            base.Text = "Do not set up any wooden Asherah pole beside the altar you build to the LORD your God...";
            base.Verse = 21;
        }
    }
}
