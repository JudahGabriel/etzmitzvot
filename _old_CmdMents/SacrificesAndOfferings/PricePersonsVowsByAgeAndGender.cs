using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.SacrificesAndOfferings
{
    class PricePersonsVowsByAgeAndGender : TreatAsHolyEverythingConsecratedToGod
    {
        public PricePersonsVowsByAgeAndGender()
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
            base.Number = 227;
            base.ShortSummary = "Price a person's vows to the Lord by age and gender.";
            base.Text = "If anyone makes a special vow to dedicate a person to the LORD by giving the equivalent value, set the value of a male between the ages of twenty and sixty at fifty shekels of silver, according to the sanctuary shekel; for a female, set her value at thirty shekels; for a person between the ages of five and twenty, set the value of a male at twenty shekels and of a female at ten shekels; for a person between one month and five years, set the value of a male at five shekels of silver and that of a female at three shekels of silver; for a person sixty years old or more, set the value of a male at fifteen shekels and of a female at ten shekels. If anyone making the vow is too poor to pay the specified amount, the person being dedicated is to be presented to the priest, who will set the value according to what the one making the vow can afford.";
            base.Verse = 2;
        }
    }
}
