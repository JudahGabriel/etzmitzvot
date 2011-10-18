using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.SacrificesAndOfferings
{
    class TreatAsHolyEverythingConsecratedToGod : KeepGodsCommandments
    {
        public TreatAsHolyEverythingConsecratedToGod()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 231;
            base.ShortSummary = "Treat as holy everything consecrated to God.";
            base.Text = "But nothing that a person owns and devotes to the LORD—whether a human being or an animal or family land—may be sold or redeemed; everything so devoted is most holy to the LORD.";
            base.Verse = 28;
        }
    }
}
