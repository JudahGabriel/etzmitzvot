using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class HonorTheElderly : LoveNeighborAsSelf
    {
        public HonorTheElderly()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 23;
            base.ShortSummary = "Honor the elderly.";
            base.Text = "Rise in the presence of the aged, show respect for the elderly and revere your God. I am the LORD.";
            base.Verse = 32;
        }
    }
}
