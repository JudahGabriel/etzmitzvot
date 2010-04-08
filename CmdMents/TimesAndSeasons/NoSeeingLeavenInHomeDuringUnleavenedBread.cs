using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoSeeingLeavenInHomeDuringUnleavenedBread : RemoveLeavenFromHomeOnPassover
    {
        public NoSeeingLeavenInHomeDuringUnleavenedBread()
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
            base.Number = 112;
            base.ShortSummary = "No seeing leaven in your home during Unleavened Bread.";
            base.Text = "Eat unleavened bread during those seven days; nothing with yeast in it is to be seen among you, nor shall any yeast be seen anywhere within your borders.";
            base.Verse = 7;
        }
    }
}
