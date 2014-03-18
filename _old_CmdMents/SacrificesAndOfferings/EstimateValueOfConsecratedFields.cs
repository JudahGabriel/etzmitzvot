using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class EstimateValueOfConsecratedFields : PricePersonsVowsByAgeAndGender
    {
        public EstimateValueOfConsecratedFields()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 230;
            base.ShortSummary = "Estimate the value of fields consecrated to the Lord.";
            base.Text = "‘If anyone dedicates to the LORD part of their family land, its value is to be set according to the amount of seed required for it—fifty shekels of silver to a homer of barley seed. If they dedicate a field during the Year of Jubilee, the value that has been set remains. But if they dedicate a field after the Jubilee, the priest will determine the value according to the number of years that remain until the next Year of Jubilee, and its set value will be reduced. If the one who dedicates the field wishes to redeem it, they must add a fifth to its value, and the field will again become theirs. If, however, they do not redeem the field, or if they have sold it to someone else, it can never be redeemed. When the field is released in the Jubilee, it will become holy, like a field devoted to the LORD; it will become priestly property.";
            base.Verse = 16;
        }
    }
}
