using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Torah
{
    /// <remarks>
    /// Judaism traditionally interprets this as a negative commandment: "don't follow the lusts of your heart".
    /// However, looking at the surrounding verses, it appears this commandment
    /// is focused more on the "remember the commandments" side of things:
    /// 
    /// -The preceding verse commands tassels on the garment.
    /// -This verse says the tassels are "so you will remember all the commands of the LORD".
    /// -The following verse reiterates the tassels are there "so you may remember and do all My commandments, and be holy unto the LORD".
    /// 
    /// This suggests the whole purpose here is remembering God's commandments.
    /// Accordingly, I've defined this commandment as a positive one, "remember God's commandments through tassels".
    /// </remarks>
    /// <author>JGH</author>
    class RememberCommandmentsThroughTassels : KeepGodsCommandments
    {
        public RememberCommandmentsThroughTassels()
        {
            base.Book = CommandmentBook.Numbers;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 15;
            base.CommandmentType = CommandmentType.Positive;
            base.FollowedByChristians = false;
            base.FollowedByMessianics = false; // Heh. Tough call, but I think a majority of practicing Messianics do not wear fringes.
            base.FollowedByObservantJews = true;
            base.Number = 25;
            base.ShortSummary = "Remember the commandments through tassels on your garment.";
            base.Text = "You will have these tassels to look at and so you will remember all the commands of the LORD, that you may obey them and not prostitute yourselves by going after the lusts of your own hearts and eyes.";
            base.Verse = 39;
        }
    }
}
