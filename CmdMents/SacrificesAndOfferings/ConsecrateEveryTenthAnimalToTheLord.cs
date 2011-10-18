using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class ConsecrateEveryTenthAnimalToTheLord : PricePersonsVowsByAgeAndGender
    {
        public ConsecrateEveryTenthAnimalToTheLord()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 429;
            base.ShortSummary = "Consecrate every tenth animal as holy to the Lord.";
            base.Text = "Every tithe of the herd and flock—every tenth animal that passes under the shepherd’s rod—will be holy to the LORD. No one may pick out the good from the bad or make any substitution. If anyone does make a substitution, both the animal and its substitute become holy and cannot be redeemed.";
            base.Verse = 32;

            this.Meta(CommandmentMetaType.Commentary, "Every 10th animal in the herd or flock is to be holy, consecrated to the Lord. What this appears to mean in the context of Leviticus 27 is that consecrated items firstly belong to God, and if the owner wishes to redeem them -- that is, reclaim ownership -- he must pay a price, usually a higher price than originally set. This commandment is really a specialization of the preceding commandment, for which Maimonides doesn't list an explicit command: 'A tithe of everything from the land, whether grain from the soil or fruit from the trees, belongs to the LORD; it is holy to the LORD.'");
        }
    }
}
