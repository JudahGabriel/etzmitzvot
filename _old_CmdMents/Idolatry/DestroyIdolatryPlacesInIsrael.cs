using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class DestroyIdolatryPlacesInIsrael : BurnIdolatrousCity
    {
        public DestroyIdolatryPlacesInIsrael()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = true;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 12;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Recognized;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 53;
            base.ShortSummary = "Destroy places of idol worship.";
            base.Text = "These are the decrees and laws you must be careful to follow in the land that the LORD, the God of your fathers, has given you to possess—as long as you live in the land. Destroy completely all the places on the high mountains and on the hills and under every spreading tree where the nations you are dispossessing worship their gods. Break down their altars, smash their sacred stones and burn their Asherah poles in the fire; cut down the idols of their gods and wipe out their names from those places.";
            base.Verse = 1;
        }
    }
}
