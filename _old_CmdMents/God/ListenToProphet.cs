using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.God;

namespace CmdMents.God
{
    /// <author>NET</author>
    class ListenToProphet : FearGod // Changed by Judah: changed base calls from KeepAllGodsCommandments to FearGod.
    {
        public ListenToProphet()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 18;
            base.CommandmentType = CommandmentType.Positive;
            // Depending on your interpretation; most Christians, save charismatics and Pentecostals, do not listen to present-day "prophets"
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 9;
            base.ShortSummary = "Listen to the prophet that God sends.";
            base.Text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
            base.Verse = 15;
        }
    }
}
