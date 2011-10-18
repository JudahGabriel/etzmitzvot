using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class BringAdditionalOfferingsOnFirstDayOfSukkot : LiveInSukkahDuringSukkot
    {
        public BringAdditionalOfferingsOnFirstDayOfSukkot()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Numbers;
            this.CanBeCarriedOutOnlyInIsrael = true;
            this.CanBeCarriedOutToday = false;
            this.Chapter = 29;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.None;
            this.FollowedByObservantJews = CommandmentObedience.None;
            this.Number = 390;
            this.ShortSummary = "Bring additional offerings on the first day of Sukkot.";
            this.Text = "On the fifteenth day of the seventh month, hold a sacred assembly and do no regular work. Celebrate a festival to the LORD for seven days. 13 Present as an aroma pleasing to the LORD a food offering consisting of a burnt offering of thirteen young bulls, two rams and fourteen male lambs a year old, all without defect.";
            this.Verse = 13;
            this.Meta(CommandmentMetaType.Commentary, "Nearly all of Numbers 29 deals with the Sukkot offerings as part of the celebration of Sukkot, including detailed lists of animals and grains to bring on each day of the feast.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To bring additional offerings on Sukkot.");
        }
    }
}
