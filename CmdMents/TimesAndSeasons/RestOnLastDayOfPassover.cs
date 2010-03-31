using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RestOnLastDayOfPassover : NoLeavenedBreadDuringPassover
    {
        public RestOnLastDayOfPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 98;
            base.ShortSummary = "Rest on the last day of Passover.";
            base.Text = "And on the seventh day hold a sacred assembly and do no regular work.";
            base.Verse = 8;
        }
    }
}
