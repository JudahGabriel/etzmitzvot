using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.LoveAndBrotherhood
{
    class NoEvilSpeaking : NoHatingYourBrother
    {
        public NoEvilSpeaking()
        {
            base.Book = CommandmentBook.Leviticus;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 19;
            base.CommandmentType = CommandmentType.Negative;

            base.FollowedByChristians = CommandmentObedience.Recognized;       // Not certain about Christians' avoidance of lashon hara, though
            base.FollowedByMessianics = CommandmentObedience.Attempted;
            base.FollowedByObservantJews = CommandmentObedience.Attempted;

            base.Number = 19;
            base.ShortSummary = "No speaking evil of your brother.";
            base.Text = @""" 'Do not go about spreading slander among your people." + "\n" +
                        @""" 'Do not do anything that endangers your neighbor's life. I am the LORD.";
            base.Verse = 16;
        }

    }
}
