using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoProfaningGodsName : NoBlaspheming
    {
        public NoProfaningGodsName()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 7;
            base.ShortSummary = "No profaning God's name.";
            base.Text = "Do not profane my holy name.";
            base.Verse = 32;
        }
    }
}
