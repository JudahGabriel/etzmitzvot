using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.TimesAndSeasons
{
    class ObserveNewYearInFirstMonth : KeepGodsCommandments
    {
        public ObserveNewYearInFirstMonth()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 120;
            base.ShortSummary = "Observe your new year in the first month, the month in which Passover falls.";
            base.Text = "This month is to be for you the first month, the first month of your year.";
            base.Verse = 2;
        }
    }
}
