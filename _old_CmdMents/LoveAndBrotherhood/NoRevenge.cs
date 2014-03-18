using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class NoRevenge : NoHatingYourBrother
    {
        public NoRevenge()
        {
            base.Book = CommandmentBook.Leviticus;
            base.Chapter = 19;
            base.ShortSummary = "No taking revenge on your brother.";
            base.Text = @""" 'Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
            base.Verse = 18;

            // One last time, difference between observance and acceptance.
            // On the whole, though, a better track record of observance here.
            base.CanBeCarriedOutToday = true;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 20;
        }

    }
}
