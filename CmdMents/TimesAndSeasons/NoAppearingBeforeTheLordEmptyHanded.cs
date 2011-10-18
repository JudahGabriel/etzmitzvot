using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class NoAppearingBeforeTheLordEmptyHanded : AppearBeforeTheLordAtPilgrimFestivals
    {
        public NoAppearingBeforeTheLordEmptyHanded()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Deuteronomy;
            this.CanBeCarriedOutOnlyInIsrael = true;
            this.CanBeCarriedOutToday = false;
            this.Chapter = 16;
            this.CommandmentType = CmdMents.CommandmentType.Negative;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.None;
            this.FollowedByObservantJews = CommandmentObedience.None;
            this.Number = 423;
            this.ShortSummary = "No appearing before the LORD empty-handed and without offerings.";
            this.Text = "No one should appear before the LORD empty-handed: Each of you must bring a gift in proportion to the way the LORD your God has blessed you.";
            this.Verse = 16;
            this.Meta(CommandmentMetaType.Commentary, "The appearing before the Lord on the pilgrimage feastivals required the worshipper to bring offerings according to the way God blessed the person.");
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "Not to appear at the Temple without offerings.");
        }
    }
}
