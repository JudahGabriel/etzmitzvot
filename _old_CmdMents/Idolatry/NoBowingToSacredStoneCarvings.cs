using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoBowingToSacredStoneCarvings : NoSacredStoneCarvings
    {
        public NoBowingToSacredStoneCarvings()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 26;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 51;
            base.ShortSummary = "No bowing to sacred stone carvings.";
            base.Text = "Do not make idols or set up an image or a sacred stone for yourselves, and do not place a carved stone in your land to bow down before it. I am the LORD your God.";
        }
    }
}
