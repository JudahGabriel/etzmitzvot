using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoRegularWorkOnFirstDayOfSukkot : RestOnFirstDayOfSukkot
    {
        public NoRegularWorkOnFirstDayOfSukkot()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Leviticus;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 23;
            this.CommandmentType = CmdMents.CommandmentType.Negative;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.Obeyed;
            this.FollowedByObservantJews = CommandmentObedience.Obeyed;
            this.Number = 105;
            this.ShortSummary = "No regular work on the first day of Sukkot.";
            this.Text = "“Say to the Israelites: ‘On the fifteenth day of the seventh month the LORD’s Festival of Tabernacles begins, and it lasts for seven days. The first day is a sacred assembly; do no regular work.";
            this.Verse = 35;
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "Not to do prohibited labor on Sukkot.");
        }
    }
}
