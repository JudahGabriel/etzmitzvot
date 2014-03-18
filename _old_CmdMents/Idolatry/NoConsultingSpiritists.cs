using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoConsultingSpiritists : NoListeningToIdolatrousProphet
    {
        public NoConsultingSpiritists()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 48;
            base.ShortSummary = "No consulting spiritists.";
            base.Text = "Do not turn to mediums or seek out spiritists, for you will be defiled by them. I am the LORD your God.";
            base.Verse = 31;
        }
    }
}
