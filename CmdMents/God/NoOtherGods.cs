using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoOtherGods : LoveGodWithHeartSoulStrength
    {
        public NoOtherGods()
        {
            base.AlternateText = "You shall have no other gods besides me.";
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 20;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 2;
            base.ShortSummary = "Do not have gods besides the LORD.";
            base.Text = "You shall have no other gods before me.";
            base.Verse = 3;
        }
    }
}
