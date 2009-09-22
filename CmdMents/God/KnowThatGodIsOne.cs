using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    class KnowThatGodIsOne : KnowGodExists
    {
        public KnowThatGodIsOne()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 3;
            base.ShortSummary = "Know that God is one.";
            base.Text = "Hear, O Israel: The LORD our God, the LORD is one.";
            base.Verse = 4;
        }
    }
}
