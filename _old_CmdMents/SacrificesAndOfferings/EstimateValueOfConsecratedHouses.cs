using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class EstimateValueOfConsecratedHouses : PricePersonsVowsByAgeAndGender
    {
        public EstimateValueOfConsecratedHouses()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = false;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 229;
            base.ShortSummary = "Estimate the value of houses consecrated to the Lord.";
            base.Text = "If anyone dedicates their house as something holy to the LORD, the priest will judge its quality as good or bad. Whatever value the priest then sets, so it will remain. If the one who dedicates their house wishes to redeem it, they must add a fifth to its value, and the house will again become theirs.";
            base.Verse = 14;
        }
    }
}
