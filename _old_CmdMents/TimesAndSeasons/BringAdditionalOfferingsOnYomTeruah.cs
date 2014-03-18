using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class BringAdditionalOfferingsOnYomTeruah : SoundTheShofarOnYomTeruah
    {
        public BringAdditionalOfferingsOnYomTeruah()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Numbers;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = false;
            base.Chapter = 29;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 388;
            base.ShortSummary = "Bring additional offerings on Yom Teruah.";
            base.Text = "As an aroma pleasing to the LORD, prepare a burnt offering of one young bull, one ram and seven male lambs a year old, all without defect. With the bull prepare a grain offering of three-tenths of an ephah [a] of fine flour mixed with oil; with the ram, two-tenths; and with each of the seven lambs, one-tenth. Include one male goat as a sin offering to make atonement for you. These are in addition to the monthly and daily burnt offerings with their grain offerings and drink offerings as specified. They are offerings made to the LORD by fire—a pleasing aroma.";
            base.Verse = 2;
        }
    }
}
