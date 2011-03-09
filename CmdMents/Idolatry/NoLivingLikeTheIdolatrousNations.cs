using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoLivingLikeTheIdolatrousNations : DetestIdolatry
    {
        public NoLivingLikeTheIdolatrousNations()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 20;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 59;
            base.ShortSummary = "No living like the idolatrous nations.";
            base.Text = "You must not live according to the customs of the nations I am going to drive out before you. Because they did all these things, I abhorred them.";
            base.Verse = 23;
        }
    }
}
