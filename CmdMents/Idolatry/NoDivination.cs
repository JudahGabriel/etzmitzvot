using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoDivination : NoIdolatrousProphesying
    {
        public NoDivination()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 60;
            base.ShortSummary = "No divination.";
            base.Text = "...Do no practice divination or seek omens.";
            base.Verse = 26;
        }
    }
}
