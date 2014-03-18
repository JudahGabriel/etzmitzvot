using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.TimesAndSeasons
{
    class SoundTheShofarOnYomTeruah : ObserveNewYearInFirstMonth
    {
        public SoundTheShofarOnYomTeruah()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Numbers;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 29;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 116;
            base.ShortSummary = "Sound the shofar on Yom Teruah.";
            base.Text = "On the first day of the seventh month hold a sacred assembly and do no regular work. It is a day for you to sound the trumpets.";
            base.Verse = 1;
        }
    }
}
