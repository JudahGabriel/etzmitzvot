using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoMakingIdolsForDecoration : NoMakingIdolsForYourself
    {
        public NoMakingIdolsForDecoration()
        {
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 20;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 31;
            base.ShortSummary = "No making idols for decoration.";
            base.Text = "Do not make any gods to be alongside me; do not make for yourselves gods of silver or gods of gold.";
            base.Verse = 23; // Verse 20 in Hebrew bibles, 23 in Christian bibles.
        }
    }
}
