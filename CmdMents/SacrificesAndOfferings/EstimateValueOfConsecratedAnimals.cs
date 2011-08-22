using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class EstimateValueOfConsecratedAnimals : PricePersonsVowsByAgeAndGender
    {
        public EstimateValueOfConsecratedAnimals()
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
            base.Number = 228;
            base.ShortSummary = "Estimate the value of animals consecrated to the Lord.";
            base.Text = "If what they vowed is an animal that is acceptable as an offering to the LORD, such an animal given to the LORD becomes holy. They must not exchange it or substitute a good one for a bad one, or a bad one for a good one; if they should substitute one animal for another, both it and the substitute become holy. If what they vowed is a ceremonially unclean animal—one that is not acceptable as an offering to the LORD—the animal must be presented to the priest, who will judge its quality as good or bad. Whatever value the priest then sets, that is what it will be. If the owner wishes to redeem the animal, a fifth must be added to its value.";
            base.Verse = 9;
        }
    }
}
