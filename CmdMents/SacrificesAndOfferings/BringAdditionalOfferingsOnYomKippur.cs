using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.TimesAndSeasons;

namespace CmdMents.SacrificesAndOfferings
{
    class BringAdditionalOfferingsOnYomKippur : NoWorkingOnYomKippur
    {
        public BringAdditionalOfferingsOnYomKippur()
        {
            base.Book = CommandmentBook.Numbers;
            base.CanBeCarriedOutToday = false;
            base.Chapter = 29;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = false;
            base.FollowedByObservantJews = false;
            base.Number = 389;
            base.ShortSummary = "Bring additional offerings on Yom Kippur.";
            base.Text = "Present as an aroma pleasing to the LORD a burnt offering of one young bull, one ram and seven male lambs a year old, all without defect. 9 With the bull prepare a grain offering of three-tenths of an ephah of fine flour mixed with oil; with the ram, two-tenths; 10 and with each of the seven lambs, one-tenth. 11 Include one male goat as a sin offering, in addition to the sin offering for atonement and the regular burnt offering with its grain offering, and their drink offerings.";
            base.Verse = 8;
        }
    }
}
