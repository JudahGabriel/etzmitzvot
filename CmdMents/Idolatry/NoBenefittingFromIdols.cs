using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoBenefittingFromIdols : NoBenefitingFromBurningIdolatrousCity
    {
        public NoBenefittingFromIdols()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 7;
            base.CommandmentType = CmdMents.CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 55;
            base.ShortSummary = "No benefitting from idols.";
            base.Text = "The images of their gods you are to burn in the fire. Do not covet the silver and gold on them, and do not take it for yourselves, or you will be ensnared by it, for it is detestable to the LORD your God.";
            base.Verse = 25;
        }
    }
}
