using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class NoSlandering : NoHatingYourBrother
    {
        public NoSlandering()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Negative;

            // Once again, we have a case of hypocrisy between acknowledgement 
            // and action. All groups acknowledge this commandment, but many 
            // are bad at following this. Still, on the whole, I consider that 
            // the majority of orthodox believers all follow the command to a 
            // considerable degree.
            base.FollowedByChristians = true;
            base.FollowedByMessianics = true;
            base.FollowedByObservantJews = true;

            base.Number = 19;
            base.ShortSummary = "No slandering your brother.";
            base.Text = @""" 'Do not go about spreading slander among your people." + "\n" +
                        @""" 'Do not do anything that endangers your neighbor's life. I am the LORD.";
            base.Verse = 16;
        }

    }
}
