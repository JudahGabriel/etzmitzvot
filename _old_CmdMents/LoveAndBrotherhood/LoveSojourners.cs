using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    /// <author>NET</author>
    /// <revision author="JGH" date="10/22/09">
    /// Renamed class from "LoveProselytes" to "LoveSojourners", and updated short summary to reflect this.
    /// Big discussion on the reasoning behind this: http://judahgabriel.blogspot.com/2009/10/judaisms-alien-conversion-program.html
    /// </revision>
    class LoveSojourners : LoveNeighborAsSelf
    {
        public LoveSojourners()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 10;
            base.CommandmentType = CommandmentType.Positive;

            // Hmmm... this is dicey. I really don't know that I can say off the top of my head.
            // I think, though, that this is likely to be correct.
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            // NET: I'm not too sure about this one. Comments?
            base.FollowedByObservantJews = CommandmentObedience.Recognized;

            base.Number = 14;
            base.ShortSummary = "Love the sojourner."; // Changed by Judah from "love converts" to "love sojourners". I know Judaism traditionally treats "alien among you" as converts, however, the text here betrays this interpretation. http://judahgabriel.blogspot.com/2009/10/judaisms-alien-conversion-program.html
            base.Text = "And you are to love those who are aliens, for you yourselves were aliens in Egypt.";
            base.Verse = 19;
        }
    }
}
