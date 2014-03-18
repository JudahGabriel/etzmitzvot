using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoRegularWorkOnFirstDayOfPassover : RestOnFirstDayOfPassover
    {
        public NoRegularWorkOnFirstDayOfPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 97;
            base.ShortSummary = "No regular work on the first day of Passover.";
            base.Text = "On the first day hold a sacred assembly and do no regular work.";
            base.Verse = 7;
        }
    }
}
