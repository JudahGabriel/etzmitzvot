using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoRegularWorkOnYomTeruah : RestOnYomTeruah
    {
        public NoRegularWorkOnYomTeruah()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 103;
            base.ShortSummary = "No regular work on Yom Teruah.";
            base.Text = "On the first day of the seventh month you are to have a day of rest, a sacred assembly commemorated with trumpet blasts. Do no regular work, but present an offering made to the LORD by fire.";
            base.Verse = 25;
        }
    }
}
