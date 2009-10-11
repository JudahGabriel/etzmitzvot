using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    /// <author>NET</author>
    class LoveJews : LoveNeighborAsSelf
    {
        public LoveJews()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Positive;
            // Unfortunately, I'm afraid this cannot be argued:
            //   many, if not most, Christians have in fact disobeyed this historically
            base.FollowedByChristians = false;          
            base.FollowedByMessianics = true;           // To the best of my knowledge
            base.FollowedByObservantJews = true;
            base.Number = 13;
            base.ShortSummary = "Love (other) Jews as yourself.";
            base.Text = "\"'Do not seek revenge or bear a grudge against one of your people, but love your neighbor as yourself. I am the LORD.";
            base.Verse = 18;
        }
    }
}
