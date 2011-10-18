using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoRegularWorkOnLastDayOfSukkot : RestOnLastDayOfSukkot
    {
        public NoRegularWorkOnLastDayOfSukkot()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Leviticus;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 23;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.Obeyed;
            this.FollowedByObservantJews = CommandmentObedience.Obeyed;
            this.Number = 107;
            this.ShortSummary = "No regular work on the last day of Sukkot.";
            this.Text = "For seven days present food offerings to the LORD, and on the eighth day hold a sacred assembly and present a food offering to the LORD. It is the closing special assembly; do no regular work.";
            this.Verse = 36;
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "Not to do prohibited labor on Shemini Atzeret.");
        }
    }
}
