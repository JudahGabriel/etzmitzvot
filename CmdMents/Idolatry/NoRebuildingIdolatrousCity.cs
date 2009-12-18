using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// No rebuilding a city that has fallen into idolatry and been destroyed.
    /// </summary>
    /// <author>NET</author>
    class NoRebuildingIdolatrousCity : BurnIdolatrousCity
    {

        public NoRebuildingIdolatrousCity()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 16;
            base.ShortSummary = "No rebuilding a destroyed idolatrous city.";
            base.Text = "\"'Gather all the plunder of the town into the middle of the public square and completely burn the town and all its plunder as a whole burnt offering to the LORD your God. It is to remain a ruin forever, never to be rebuilt.";

            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 34;
        }

    }
}
