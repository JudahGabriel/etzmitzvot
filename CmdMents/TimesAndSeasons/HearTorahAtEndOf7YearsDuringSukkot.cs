using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class HearTorahAtEndOf7YearsDuringSukkot : LiveInSukkahDuringSukkot
    {
        public HearTorahAtEndOf7YearsDuringSukkot()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Deuteronomy;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 32;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.None;
            this.FollowedByObservantJews = CommandmentObedience.None;
            this.Number = 425;
            this.ShortSummary = "Assemble the people to hear the Torah during the 7th year on Sukkot.";
            this.Text = "Then Moses commanded them: “At the end of every seven years, in the year for canceling debts, during the Festival of Tabernacles, when all Israel comes to appear before the LORD your God at the place he will choose, you shall read this law before them in their hearing. Assemble the people—men, women and children, and the foreigners residing in your towns—so they can listen and learn to fear the LORD your God and follow carefully all the words of this law.";
            this.Verse = 12;
            this.Meta(CommandmentMetaType.Commentary, "Interesting commandment indeed: when all Israel goes up to the Tabernacle for the pilgrim feasts (Unleavened Bread, Shavuot, Sukkot), on the 7th year, which apparently is a kind of Jubilee year, the Torah is to be read to all the people.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To assemble all the people on the Sukkot following the seventh year.");
        }
    }
}
