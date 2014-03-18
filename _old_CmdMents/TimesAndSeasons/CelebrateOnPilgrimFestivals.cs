using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class CelebrateOnPilgrimFestivals : AppearBeforeTheLordAtPilgrimFestivals
    {
        public CelebrateOnPilgrimFestivals()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Exodus;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 23;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.Obeyed;
            this.FollowedByObservantJews = CommandmentObedience.Obeyed;
            this.Number = 421;
            this.ShortSummary = "Celebrate on Unleavened Bread, Shavuot, and Sukkot.";
            this.Text = "Three times a year you are to celebrate a festival to me.";
            this.Verse = 14;
            this.Meta(CommandmentMetaType.Commentary, "Maimonides equates celebrating on these festivals with bringing a peace offering in the Tabernacle. Though this was part of the celebration, I have not limited the commandment so, and thus, allow for keeping this commandment today.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To celebrate on these three Festivals (bring a peace offering).");
        }
    }
}
