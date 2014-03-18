using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RemoveLeavenFromHomeOnPassover : NoLeavenedBreadDuringPassover
    {
        public RemoveLeavenFromHomeOnPassover()
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
            base.Number = 109;
            base.ShortSummary = "Remove leaven from your home on Passover.";
            base.Text = "On the first day remove the yeast from your houses, for whoever eats anything with yeast in it from the first day through the seventh must be cut off from Israel.";
            base.Verse = 15;
        }
    }
}
