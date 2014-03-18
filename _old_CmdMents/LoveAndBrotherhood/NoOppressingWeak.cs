using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    /// <author>NET</author>
    /// <remarks>Derivation as conventionally stated should be LoveNeighborAsSelf; 
    /// the text, however, suggests deriving from LoveSojourners.</remarks>
    /// <remarks>
    /// Nate, I've changed this to derive from LoveNeighborAsSelf, as there was
    /// confusion between Jewish and Christian verse numbers. See my comment
    /// below for more information.
    /// </remarks>
    class NoOppressingWeak : LoveNeighborAsSelf
    {
        public NoOppressingWeak()
        {
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;

            // That is, "followed by X when convenient, and generally agreed to 
            //      loudly by every member of X at all times".
            base.FollowedByChristians = CommandmentObedience.Recognized;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;

            base.Number = 18;

            // CHANGED BY JUDAH: Hey Nate. The reason over the confusion here is 
            // the Jewish verse number is Ex 22:21, but in Christian Bibles, the
            // verse number is Ex 22:22. I've updated the verse below to account
            // for this.
            base.ShortSummary = "No oppressing the weak.";
            base.Text = "Do not take advantage of a widow or an orphan. If you do and they cry out to me, I will certainly hear their cry. My anger will be aroused, and I will kill you with the sword; your wives will become widows and your children fatherless.";
            base.Verse = 21;
        }
    }
}
