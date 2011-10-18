using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RestOnLastDayOfSukkot : RestOnFirstDayOfSukkot
    {
        public RestOnLastDayOfSukkot()
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
            this.Number = 106;
            this.ShortSummary = "Rest on the last day of Sukkot.";
            this.Text = "For seven days present food offerings to the LORD, and on the eighth day hold a sacred assembly and present a food offering to the LORD. It is the closing special assembly; do no regular work.";
            this.Verse = 36;
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To rest on Shemini Atzeret");
            this.Meta(CommandmentMetaType.Commentary, "Is Shemini Atzeret the last day of Sukkot? Or is it really the day after the last day of Sukkot? A plain reading of the text suggests there are 7 days of Sukkot (see v.36), and that Shemini Atzeret is really a seperate holy day following Sukkot. At this time, however, there is no certainty on it, with many people referring to this day as the 8th day of Sukkot. See http://en.wikipedia.org/wiki/Shemini_Atzeret#Relationship_to_Sukkot");
        }
    }
}
