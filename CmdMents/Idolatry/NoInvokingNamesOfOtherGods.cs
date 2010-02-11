using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoInvokingNamesOfOtherGods : NoIdolatrousProphesying
    {
        public NoInvokingNamesOfOtherGods()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 46;
            base.ShortSummary = "No invoking the names of other gods.";
            base.Text = "Do not invoke the names of other gods; do not let them be heard on your lips.";
            base.Verse = 13;
        }
    }
}
