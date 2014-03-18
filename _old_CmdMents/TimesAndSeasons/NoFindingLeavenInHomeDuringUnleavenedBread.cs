using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoFindingLeavenInHomeDuringUnleavenedBread : RemoveLeavenFromHomeOnPassover
    {
        public NoFindingLeavenInHomeDuringUnleavenedBread()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 113;
            base.ShortSummary = "No finding leaven in your home during Unleavened Bread.";
            base.Text = "For 7 days no yeast is to be found in your houses.";
            base.Verse = 19;
        }
    }
}
