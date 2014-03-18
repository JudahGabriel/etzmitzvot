using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class NoEmbarrassingOthers : NoHatingYourBrother
    {
        public NoEmbarrassingOthers()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 17;
            base.ShortSummary = "No embarrassing others.";
            base.Text = "'Do not hate your brother in your heart. Rebuke your neighbor frankly so you will not share in his guilt.";
            base.Verse = 17;
        }
    }
}
