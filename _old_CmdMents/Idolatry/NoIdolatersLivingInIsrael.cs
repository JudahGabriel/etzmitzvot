using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoIdolatersLivingInIsrael : DetestIdolatry
    {
        public NoIdolatersLivingInIsrael()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Exodus;
            this.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 58;
            base.ShortSummary = "No idolaters living in Israel.";
            base.Text = "Do not let them live in your land or they will cause you to sin against me, because the worship of their gods will certainly be a snare to you.";
            base.Verse = 33;
        }
    }
}
