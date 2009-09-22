using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoTemptingGod : AcknowledgeGodAsHoly
    {
        public NoTemptingGod()
        {
            base.AlternateText = "You shall not test the LORD your God.";
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 10;
            base.ShortSummary = "No tempting God.";
            base.Text = "You shall not tempt the LORD your God.";
            base.Verse = 16;
        }
    }
}
