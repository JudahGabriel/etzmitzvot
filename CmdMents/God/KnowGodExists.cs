using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class KnowGodExists : LoveGodWithHeartSoulStrength
    {
        public KnowGodExists()
        {
            base.Book = CommandmentBook.Exodus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 20;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 1;
            base.ShortSummary = "Know that God exists.";
            base.Text = "I am ADONAI your God, who brought you out of the land of Egypt, out of the abode of slavery.";
            base.Verse = 2;
        }
    }
}
