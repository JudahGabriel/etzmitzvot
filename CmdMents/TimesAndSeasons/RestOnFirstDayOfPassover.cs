using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RestOnFirstDayOfPassover : NoLeavenedBreadDuringPassover
    {
        public RestOnFirstDayOfPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 96;
            base.ShortSummary = "Rest on the first day of Passover.";
            base.Text = "On the first day hold a sacred assembly and do no regular work.";
            base.Verse = 7;
        }
    }
}
