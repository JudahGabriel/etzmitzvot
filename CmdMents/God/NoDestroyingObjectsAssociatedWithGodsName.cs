using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.God
{
    class NoDestroyingObjectsAssociatedWithGodsName : NoProfaningGodsName
    {
        public NoDestroyingObjectsAssociatedWithGodsName()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.Chapter = 12;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;  // Or perhaps more accurately, this interpretation is not widely held
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 8;
            base.ShortSummary = "No destroying objects associated with God's name.";
            base.Text = "These are the decrees and laws you must be careful to follow in the land that the LORD, the God of your fathers, has given you to possess—as long as you live in the land. Destroy completely all the places on the high mountains and on the hills and under every spreading tree where the nations you are dispossessing worship their gods. Break down their altars, smash their sacred stones and burn their Asherah poles in the fire; cut down the idols of their gods and wipe out their names from those places. You must not worship the LORD your God in their way.";
            base.Verse = 4;
        }
    }
}
