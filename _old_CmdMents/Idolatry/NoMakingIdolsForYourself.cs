using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoMakingIdolsForYourself : NoIdols
    {
        public NoMakingIdolsForYourself()
        {
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 20;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 29;
            base.ShortSummary = "No making idols for yourself.";
            base.Text = "You shall not make for yourself an idol in the form of anything in heaven above or on the earth beneath or in the waters below.";
            base.Verse = 4;
        }
    }
}
