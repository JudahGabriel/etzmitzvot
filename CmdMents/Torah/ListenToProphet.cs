using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    /// <author>NET</author>
    class ListenToProphet : KeepGodsCommandments
    {
        public ListenToProphet()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 18;
            base.CommandmentType = CommandmentType.Positive;
            // Depending on your interpretation; most Christians, save charismatics and Pentecostals, do not listen to present-day "prophets"
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;
            base.Number = 9;
            base.ShortSummary = "Listen to the prophet that God sends.";
            base.Text = "The LORD your God will raise up for you a prophet like me from among your own brothers. You must listen to him.";
            base.Verse = 15;
        }
    }
}
