using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoBlaspheming : AcknowledgeGodAsHoly
    {
        public NoBlaspheming()
        {
            base.AlternateText = "Do not revile the judges.";
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 26;
            base.ShortSummary = "No blaspheming God.";
            base.Text = "Do not blaspheme God.";
            base.Verse = 28;
        }
    }
}
