using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RejoiceOnThePilgrimFeasts : CelebrateOnPilgrimFestivals
    {
        public RejoiceOnThePilgrimFeasts()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Deuteronomy;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 16;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.Obeyed;
            this.FollowedByObservantJews = CommandmentObedience.Obeyed;
            this.Number = 422;
            this.ShortSummary = "Rejoice on Unleavened Bread, Shavuot, and Sukkot.";
            this.Text = "Be joyful at your festival—you, your sons and daughters, your male and female servants, and the Levites, the foreigners, the fatherless and the widows who live in your towns.";
            this.Verse = 14;
            this.Meta(CommandmentMetaType.Commentary, "In addition to celebrating the pilgrim feasts, Maimonides derives another commandment for these 3 feasts: rejoice!");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To rejoice on these three Festivals (bring a peace offering).");
        }
    }
}
