using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoSacrificesToMolech : NoWorshippingIdols
    {
        public NoSacrificesToMolech()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 18;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 49;
            base.ShortSummary = "No sacrificing your children to Molech.";
            base.Text = "'Do not give any of your children to be sacrificed to Molech, for you must not profane the name of your God. I am the LORD.";
            base.Verse = 21;
        }
    }
}
