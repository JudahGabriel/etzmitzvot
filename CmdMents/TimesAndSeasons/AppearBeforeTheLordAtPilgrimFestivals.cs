using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class AppearBeforeTheLordAtPilgrimFestivals : ObserveNewYearInFirstMonth
    {
        public AppearBeforeTheLordAtPilgrimFestivals()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Deuteronomy;
            this.CanBeCarriedOutOnlyInIsrael = true;
            this.CanBeCarriedOutToday = false;
            this.Chapter = 16;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.None;
            this.FollowedByObservantJews = CommandmentObedience.None;
            this.Number = 420;
            this.ShortSummary = "Appear before the LORD during Unleavened Bread, Shavuot, and Sukkot.";
            this.Text = "Three times a year all your men must appear before the LORD your God at the place he will choose: at the Festival of Unleavened Bread, the Festival of Weeks and the Festival of Tabernacles.";
            this.Verse = 16;
            this.Meta(CommandmentMetaType.Commentary, "Though the text literally commands appearing before the LORD, it's assumed the appearance before the Lord is before the Tabernacle/Temple. Maimonides comes to this conclusion as well, and as such, I've marked this commandment as not able to follow today, given the lack of a Tabernacle.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To be seen at the Temple on Passover, Shavuot, and Sukkot.");
        }
    }
}
