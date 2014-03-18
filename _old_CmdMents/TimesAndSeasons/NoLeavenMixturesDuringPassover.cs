using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoLeavenMixturesDuringPassover : NoEatingLeavenDuringPassover
    {
        public NoLeavenMixturesDuringPassover()
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
            base.Number = 111;
            base.ShortSummary = "No eating mixtures containing leaven during Passover and Unleavened Bread.";
            base.Text = "Eat nothing made with yeast. Wherever you live, you must eat unleavened bread.";
            base.Verse = 20;
        }
    }
}
