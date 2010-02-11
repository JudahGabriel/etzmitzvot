using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoFearingFalseProphet : NoProphesyingFalselyInGodsName
    {
        public NoFearingFalseProphet()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 18;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 45;
            base.ShortSummary = "No fearing the prophet who speaks falsely in God's name.";
            base.Text = "If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken. That prophet has spoken presumptuously. Do not be afraid of him.";
            base.Verse = 22;
        }
    }
}
