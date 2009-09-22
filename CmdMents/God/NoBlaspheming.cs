using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    class NoBlaspheming : AcknowledgeGodAsHoly
    {
        public NoBlaspheming()
        {
            base.AlternateText = "Do not revile the judges.";
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 26;
            base.ShortSummary = "No blaspheming God.";
            base.Text = "Do not blaspheme God.";
            base.Verse = 28;
        }
    }
}
