using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class KeepGodsCommandments : LoveGodWithHeartSoulStrength
    {
        public KeepGodsCommandments()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 28;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 10;
            base.ShortSummary = "Keep all God's commandments.";
            base.Text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
            base.Verse = 9;
        }
    }
}
