﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    class KeepGodsCommandments : God.LoveGodWithHeartSoulStrength
    {
        public KeepGodsCommandments()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 28;
            base.CommandmentType = CommandmentType.Positive;
            // Note: No one really does keep all God's commandments, unless we add an extra category for HaMashiach
            base.FollowedByChristians = CommandmentObedience.None;      // Doesn't sound right, but is technically accurate
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;
            base.Number = 11;
            base.ShortSummary = "Keep all God's commandments.";
            base.Text = "The LORD will establish you as his holy people, as he promised you on oath, if you keep the commands of the LORD your God and walk in his ways.";
            base.Verse = 9;
        }
    }
}
