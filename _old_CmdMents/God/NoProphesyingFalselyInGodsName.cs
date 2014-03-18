using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CmdMents.Torah;

namespace CmdMents.God
{
    class NoProphesyingFalselyInGodsName : ListenToProphet
    {
        public NoProphesyingFalselyInGodsName()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 18;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Attempted;
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;
            base.Number = 44;
            base.ShortSummary = "No prophesying falsely in God's name.";
            base.Text = "But a prophet who presumes to speak in my name anything I have not commanded him to say, or a prophet who speaks in the name of other gods, must be put to death.";
            base.Verse = 20;
        }
    }
}
