﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.TimesAndSeasons
{
    class NoWorkingOnYomKippur : KeepGodsCommandments
    {
        public NoWorkingOnYomKippur()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 23;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 93;
            base.ShortSummary = "Do not work on Yom Kippur.";
            base.Text = "You shall do no work at all. This is to be a lasting ordinance for the generations to come, wherever you live.";
            base.Verse = 31; // 32 in Jewish Bibles.
        }
    }
}
