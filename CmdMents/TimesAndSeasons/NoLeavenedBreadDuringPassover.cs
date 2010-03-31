using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoLeavenedBreadDuringPassover : ObserveNewYearInFirstMonth
    {
        public NoLeavenedBreadDuringPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 16;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 108;
            base.ShortSummary = "No eating leavened bread during Passover.";
            base.Text = "Do not eat it with bread made with yeast, but for seven days eat unleavened bread, the bread of affliction, because you left Egypt in haste—so that all the days of your life you may remember the time of your departure from Egypt.";
            base.Verse = 3;
        }
    }
}
