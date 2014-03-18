using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    class TeachYourChildrenTorah : KeepGodsCommandments
    {
        public TeachYourChildrenTorah()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 22;
            base.ShortSummary = "Teach your children Torah.";
            base.Text = "Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.";
            base.Verse = 7;
        }
    }
}
