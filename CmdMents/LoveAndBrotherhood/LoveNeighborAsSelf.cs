using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    class LoveNeighborAsSelf : CommandmentBase
    {
        public LoveNeighborAsSelf()
        {
            this.Book = CommandmentBook.Leviticus;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 19;
            this.CommandmentType = CommandmentType.Positive;
            this.FollowedByChristians = true;
            this.FollowedByMessianics = true;
            this.FollowedByObservantJews = true;
            this.Number = 13;
            this.ShortSummary = "Love others as yourself.";
            this.Text = "Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself.";
            this.Verse = 18;
        }
    }
}
