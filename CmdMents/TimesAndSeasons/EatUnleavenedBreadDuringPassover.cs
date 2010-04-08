using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class EatUnleavenedBreadDuringPassover : ObserveNewYearInFirstMonth
    {
        public EatUnleavenedBreadDuringPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 114;
            base.ShortSummary = "Eat unleavened bread during Passover and Unleavened Bread.";
            base.Text = "On the first month you are to eat bread made without yeast, from the evening of the fourteenth day until the evening of the twenty-first day.";
            base.Verse = 18;
        }
    }
}
