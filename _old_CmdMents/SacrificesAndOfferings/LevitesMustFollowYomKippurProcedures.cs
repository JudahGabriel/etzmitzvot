using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.TimesAndSeasons;

namespace CmdMents.SacrificesAndOfferings
{
    class LevitesMustFollowYomKippurProcedures : NoWorkingOnYomKippur
    {
        public LevitesMustFollowYomKippurProcedures()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = false;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.Chapter = 16;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 400;
            base.ShortSummary = "Levites must follow the sacrificial procedure for Yom Kippur.";
            base.Text = "This is how Aaron is to enter the sanctuary area: with a young bull for a sin offering and a ram for a burnt offering. 4 He is to put on the sacred linen tunic, with linen undergarments next to his body; he is to tie the linen sash around him and put on the linen turban. These are sacred garments; so he must bathe himself with water before he puts them on. 5 From the Israelite community he is to take two male goats for a sin offering and a ram for a burnt offering.";
            base.Verse = 3;
        }
    }
}
