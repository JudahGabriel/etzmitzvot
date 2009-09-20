using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    class NoRemovingCommandments : KeepGodsCommandments
    {
        public NoRemovingCommandments()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 14;
            base.ShortSummary = "No removing commandments.";
            base.Text = "See that you do all I command you; do not add to it or take away from it.";
            base.Verse = 32;
        }
    }
}
