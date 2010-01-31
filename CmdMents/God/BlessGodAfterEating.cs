using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class BlessGodAfterEating : AcknowledgeGodAsHoly
    {
        public BlessGodAfterEating()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 8;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;
            base.Number = 85;
            base.ShortSummary = "Bless God after eating.";
            base.Text = "When you have eaten and are satisfied, praise the LORD your God for the good land he has given you.";
            base.Verse = 10;
        }
    }
}
