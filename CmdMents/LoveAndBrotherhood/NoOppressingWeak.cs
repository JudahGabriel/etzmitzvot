using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    /// <author>NET</author>
    /// <remarks>Derivation as conventionally stated should be LoveNeighborAsSelf; 
    /// the text, however, suggests deriving from LoveSojourners.</remarks>
    class NoOppressingWeak : LoveSojourners
    {
        public NoOppressingWeak()
        {
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;

            // In this particular commandment, I assume that "followed by X" means 
            //      "followed by X when convenient, and generally agreed to loudly 
            //      by every member of X at all times".
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;

            base.Number = 18;
            base.ShortSummary = "No oppressing or mistreating the weak.";
            base.Text = @"""Do not mistreat an alien or oppress him, for you were aliens in Egypt.""";
            base.Verse = 21;
        }
    }
}
