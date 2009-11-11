using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class ReproveTheSinner : NoHatingYourBrother
    {
        public ReproveTheSinner()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;
            base.Number = 16;
            base.ShortSummary = "Rebuke the sinner.";
            base.Text = "Rebuke your neighbor frankly so you will not share in his guilt.";
            base.Verse = 17;
        }
    }
}
