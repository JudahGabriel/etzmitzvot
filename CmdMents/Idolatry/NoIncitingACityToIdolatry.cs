using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// No inciting a city to idolatry.
    /// </summary>
    /// <author>NET</author>
    class NoIncitingACityToIdolatry : NoEnticingOthersToIdolatry
    {
        public NoIncitingACityToIdolatry()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 13;
            base.ShortSummary = "No inciting a city to idolatry.";
            base.Text = "\"'that wicked men have arisen among you and have led the people of their town astray, saying, \"Let us go and worship other gods\" (gods you have not known),";

            base.CanBeCarriedOutToday = true;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 32;
        }

    }
}
