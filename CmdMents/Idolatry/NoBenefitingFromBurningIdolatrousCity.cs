using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    /// <summary>
    /// Don't benefit from idolatry or its destruction, 
    /// specifically in the case of a destroyed idolatrous city.
    /// </summary>
    /// <author>NET</author>
    class NoBenefitingFromBurningIdolatrousCity : BurnIdolatrousCity
    {        
        public NoBenefitingFromBurningIdolatrousCity()
        {
            base.AlternateText = null;
            base.Book = CommandmentBook.Deuteronomy;
            base.Chapter = 13;
            base.Verse = 17;
            base.ShortSummary = "No benefiting from a city burned for idolatry.";
            base.Text = "\"None of those condemned things shall be found in your hands, so that the LORD will turn from his fierce anger; he will show you mercy, have compassion on you, and increase your numbers, as he promised on oath to your forefathers,";

            this.CanBeCarriedOutOnlyInIsrael = true;        // Judah added: seems to me the commandments about burning an idolatrous city apply only to "the land the Lord your God is giving to you" (Deut. 13:12). See The Greatest Commandments, Part 9 on the blog for more details.
            base.CanBeCarriedOutToday = true;               // Presumably, but only if the corresponding civic commandment is first carried out
            base.FollowedByChristians = CommandmentObedience.None;
            // Uncertain of these; in particular, assigning obedience in largely-hypothetical cases is non-trivial
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.CommandmentType = CommandmentType.Negative;
            base.Number = 35;
        }

    }
}
