using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// Burn to the ground any city that has fallen into idolatry.
    /// </summary>
    /// <author>NET</author>
    class BurnIdolatrousCity : NoIncitingACityToIdolatry
    {

        public BurnIdolatrousCity()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 16;
            base.ShortSummary = "Burn an idolatrous city to the ground.";
            base.Text = "\"'Gather all the plunder of the town into the middle of the public square and completely burn the town and all its plunder as a whole burnt offering to the LORD your God. It is to remain a ruin forever, never to be rebuilt.";

            base.CanBeCarriedOutToday = true;           // Civic duty only, however
            base.CanBeCarriedOutOnlyInIsrael = true;    // See above
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;      // Not at all certain of this. 
                                                                                // Judah's note: I agree that ultra-orthodox would like to follow this, and if they had sufficient political power, would actually carry this out. I agree with your labeling as Attempted.

            base.CommandmentType = CommandmentType.Positive;
            base.Number = 33;
        }

    }
}
