using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class NoSubstitutingConsecratedAnimals : ConsecrateEveryTenthAnimalToTheLord
    {
        public NoSubstitutingConsecratedAnimals()
        {
            this.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.Recognized;
            base.FollowedByObservantJews = CommandmentObedience.Recognized;
            base.Number = 440;
            base.ShortSummary = "No substituting an animal consecrated to the Lord.";
            base.Text = "They must not exchange it or substitute a good one for a bad one, or a bad one for a good one; if they should substitute one animal for another, both it and the substitute become holy.";
            base.Verse = 10;

            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "Not to substitute another beast for one set apart for sacrifice.");
            this.Meta(CommandmentMetaType.Commentary, "Offering-acceptable animals vowed to the LORD were considered holy, and as such, could not be substituted with another animal. Interestingly, even if the vowed animal was bad, blemished, weak, or otherwise lacking, it still could not be substituted for, even if the substitute was a good animal. From the moment the animal is vow, no matter its condition, it is the Lord's property.");
        }
    }
}
