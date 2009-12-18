using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoListeningToIdolatrousProphet : NoIdolatrousProphesying
    {
        public NoListeningToIdolatrousProphet()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 43;
            base.ShortSummary = "No listening to the idolatrous prophet.";
            base.Text = "[Y]ou must not listen to the words of that prophet or dreamer.";
            base.Verse = 3;
        }
    }
}
