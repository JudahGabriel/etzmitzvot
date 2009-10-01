using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class AfflictYourselfOnYomKippur : NoWorkingOnYomKippur
    {
        public AfflictYourselfOnYomKippur()
        {
            base.AlternateText = "This is to be a lasting ordinance for you: On the tenth day of the seventh month you must deny yourselves and fast.";
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 16;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 94;
            base.ShortSummary = "Afflict yourselves on Yom Kippur.";
            base.Text = "This is to be a lasting ordinance for you: On the tenth day of the seventh month you must deny yourselves.";
            base.Verse = 29;
        }
    }
}
