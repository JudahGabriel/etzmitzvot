using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class KnowThatGodIsOne : KnowGodExists
    {
        public KnowThatGodIsOne()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 3;
            base.ShortSummary = "Know that God is one.";
            base.Text = "Hear, O Israel: The LORD our God, the LORD is one.";
            base.Verse = 4;
        }
    }
}
