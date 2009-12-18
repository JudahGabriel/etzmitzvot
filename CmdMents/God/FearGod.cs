using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class FearGod : AcknowledgeGodAsHoly
    {
        public FearGod()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 10;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Obeyed;    // Modulo occasional quirks
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 5;
            base.ShortSummary = "Fear the LORD your God";
            base.Text = "Fear the LORD your God.";
            base.Verse = 20;
        }
    }
}
