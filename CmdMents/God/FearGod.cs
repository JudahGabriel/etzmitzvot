using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    class FearGod : AcknowledgeGodAsHoly
    {
        public FearGod()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 8;
            base.ShortSummary = "Fear the LORD your God";
            base.Text = "Fear the LORD your God.";
            base.Verse = 13;
        }
    }
}
