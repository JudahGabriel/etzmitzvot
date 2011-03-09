using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class DetestIdolatry : NoIdols
    {
        public DetestIdolatry()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 7;
            base.CommandmentType = CmdMents.CommandmentType.Positive;
            base.FollowedByChristians = CommandmentObedience.Obeyed;
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 54;
            base.ShortSummary = "Detest idolatry.";
            base.Text = "The images of their gods you are to burn in the fire. Do not covet the silver and gold on them, and do not take it for yourselves, or you will be ensnared by it, for it is detestable to the LORD your God. Do not bring a detestable thing into your house or you, like it, will be set apart for destruction. Regard it as vile and utterly detest it, for it is set apart for destruction.";
            base.Verse = 26;
        }
    }
}
