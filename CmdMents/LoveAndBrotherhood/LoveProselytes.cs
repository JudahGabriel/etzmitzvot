using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    /// <author>NET</author>
    class LoveProselytes : LoveNeighborAsSelf
    {
        public LoveProselytes()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 10;
            base.CommandmentType = CommandmentType.Positive;

            // Hmmm... this is dicey. I really don't know that I can say off the top of my head.
            // I think, though, that this is likely to be correct.
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;

            base.Number = 14;
            base.ShortSummary = "Love converts.";
            base.Text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
            base.Verse = 19;
        }
    }
}
