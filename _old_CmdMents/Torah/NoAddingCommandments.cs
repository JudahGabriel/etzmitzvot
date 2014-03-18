using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    class NoAddingCommandments : KeepGodsCommandments
    {
        public NoAddingCommandments()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Recognized;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 580;
            base.ShortSummary = "No adding commandments.";
            base.Text = "See that you do all I command you; do not add to it....";
            base.Verse = 32;
        }
    }
}
