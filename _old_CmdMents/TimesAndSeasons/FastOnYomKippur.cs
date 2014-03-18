using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class FastOnYomKippur : AfflictYourselfOnYomKippur
    {
        public FastOnYomKippur()
        {
            base.AlternateText = "Anyone who does not fast on that day must be cut off from his people.";
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 95;
            base.ShortSummary = "Fast on Yom Kippur.";
            base.Text = "Anyone who does not deny himself on that day must be cut off from his people.";
            base.Verse = 29;
        }
    }
}
