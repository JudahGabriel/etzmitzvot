﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoProfaningGodsName : NoBlaspheming
    {
        public NoProfaningGodsName()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 22;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 7;
            base.ShortSummary = "No profaning God's name.";
            base.Text = "Do not profane my holy name.";
            base.Verse = 32;
        }
    }
}
