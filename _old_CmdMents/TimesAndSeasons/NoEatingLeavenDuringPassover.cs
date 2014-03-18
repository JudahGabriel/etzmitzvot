using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoEatingLeavenDuringPassover : NoLeavenedBreadDuringPassover
    {
        public NoEatingLeavenDuringPassover()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 110;
            base.ShortSummary = "No eating leaven during Passover and Unleavened Bread.";
            base.Text = "Then Moses said to the people, \"Commemorate this day, the day you came out of Egypt, out of the land of slavery, because the LORD brought you out of it with a mighty hand. Eat nothing containing yeast.\"";
            base.Verse = 3;
        }
    }
}
