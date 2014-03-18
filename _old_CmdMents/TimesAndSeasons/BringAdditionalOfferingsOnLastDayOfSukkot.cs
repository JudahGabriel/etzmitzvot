using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class BringAdditionalOfferingsOnLastDayOfSukkot : BringAdditionalOfferingsOnFirstDayOfSukkot
    {
        public BringAdditionalOfferingsOnLastDayOfSukkot()
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
            this.Number = 391;
            this.ShortSummary = "Bring additional offerings on the last day of Sukkot.";
            this.Text = "Present as an aroma pleasing to the LORD a food offering consisting of a burnt offering of one bull, one ram and seven male lambs a year old, all without defect. With the bull, the ram and the lambs, offer their grain offerings and drink offerings according to the number specified. 38 Include one male goat as a sin offering, in addition to the regular burnt offering with its grain offering and drink offering.";
            this.Verse = 35;
            this.Meta(CommandmentMetaType.Commentary, "As with the first day of Sukkot, on Shemini Atzeret (which may be referred to either as the 8th day of Sukkot, or a separate holiday follow Sukkot, additional offerings are to be brought. I've deemed this commandment only followable in Israel (or at least, where the Tabernacle/Temple resides), and finally, not able to be carried out today due to lack of a tabernacle in which to bring the offering.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To bring additional offerings on Shmini Atzeret.");
        }
    }
}
