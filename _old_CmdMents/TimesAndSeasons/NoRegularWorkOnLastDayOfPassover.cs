using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoRegularWorkOnLastDayOfPassover : RestOnLastDayOfPassover
    {
        public NoRegularWorkOnLastDayOfPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 99;
            base.ShortSummary = "No regular work on the last day of Passover.";
            base.Text = "And on the seventh day hold a sacred assembly and do no regular work.";
            base.Verse = 8;
        }
    }
}
