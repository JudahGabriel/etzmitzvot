using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents
{
    class LoveGodWithHeartSoulStrength : CommandmentBase
    {
        public LoveGodWithHeartSoulStrength()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 6;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 4;
            base.ShortSummary = "Love God with all your being.";
            base.Text = "Love the LORD your God with all your heart and with all your soul and with all your strength.";
            base.Verse = 5;
        }
    }
}
