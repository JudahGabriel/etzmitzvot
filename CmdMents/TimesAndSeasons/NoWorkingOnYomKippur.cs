using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.TimesAndSeasons
{
    class NoWorkingOnYomKippur : ObserveNewYearInFirstMonth
    {
        public NoWorkingOnYomKippur()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 93;
            base.ShortSummary = "No working on Yom Kippur.";
            base.Text = "You shall do no work at all. This is to be a lasting ordinance for the generations to come, wherever you live.";
            base.Verse = 31; // 32 in Jewish Bibles.
        }
    }
}
