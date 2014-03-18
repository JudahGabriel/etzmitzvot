using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class LiveInSukkahDuringSukkot : AppearBeforeTheLordAtPilgrimFestivals
    {
        public LiveInSukkahDuringSukkot()
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
            this.Number = 117;
            this.ShortSummary = "Live in a sukkah during Sukkot.";
            this.Text = "Live in temporary shelters for seven days: All native-born Israelites are to live in such shelters so your descendants will know that I had the Israelites live in temporary shelters when I brought them out of Egypt. I am the LORD your God.’”";
            this.Verse = 42;
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To dwell in a Sukkah for the seven days of Sukkot.");
            this.Meta(CommandmentMetaType.Commentary, "It's interesting to note that this commandment applies specifically to native-born Israelites. This may excuse various Sukkot-honoring people in the diaspora from having to live in make-shift shelters for a week, which, more than inconvenient, may actually be a health concern in colder climates.");
        }
    }
}
