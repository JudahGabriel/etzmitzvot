using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.SacrificesAndOfferings
{
    class ConsecrateSubstitutedAnimals : NoSubstitutingConsecratedAnimals
    {
        public ConsecrateSubstitutedAnimals()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 27;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.None;
            base.FollowedByMessianics = CommandmentObedience.None;
            base.FollowedByObservantJews = CommandmentObedience.None;
            base.Number = 441;
            base.ShortSummary = "Consecrate animals substituted for animals vowed to the Lord.";
            base.Text = "They must not exchange it or substitute a good one for a bad one, or a bad one for a good one; if they should substitute one animal for another, both it and the substitute become holy.";
            base.Verse = 10;

            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "The new animal, in addition to the substituted one, retains consecration.");
            this.Meta(CommandmentMetaType.Commentary, "This commandment, appearing immediately after a commandment to refrain from substituting animals, appears contradictory. Maimonides indeed extracts two commandments out of this passage, and likewise extracts commandments that seem to be at odds with one another: 1) Not to substitute any animal for the vowed animal, and 2) The substituted animal must be consecrated.");
        }
    }
}
