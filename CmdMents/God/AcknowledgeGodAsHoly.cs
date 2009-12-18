using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class AcknowledgeGodAsHoly : KnowGodExists
    {
        public AcknowledgeGodAsHoly()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 6;
            base.ShortSummary = "Acknowledge God as holy.";
            base.Text = "I must be acknowledged as holy by the Israelites.";
            base.Verse = 32;
        }
    }
}
