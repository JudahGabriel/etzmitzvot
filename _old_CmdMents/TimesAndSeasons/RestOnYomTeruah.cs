using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.TimesAndSeasons
{
    class RestOnYomTeruah : SoundTheShofarOnYomTeruah
    {
        public RestOnYomTeruah()
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
            base.Number = 102;
            base.ShortSummary = "Rest on Yom Teruah.";
            base.Text = "On the first day of the seventh month you are to have a day of rest, a sacred assembly commemorated with trumpet blasts.";
            base.Verse = 24;
        }
    }
}
