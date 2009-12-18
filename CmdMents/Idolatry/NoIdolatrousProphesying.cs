using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoIdolatrousProphesying : NoWorshippingIdols
    {
        public NoIdolatrousProphesying()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutOnlyInIsrael = false;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;
            base.FollowedByChristians = CommandmentObedience.Obeyed; // Of course, one might argue there are false prophets among Evangelical groups, but I am not convinced of idolatrous prophesying, let alone the few false prophets representing the whole.
            base.FollowedByMessianics = CommandmentObedience.Obeyed;
            base.FollowedByObservantJews = CommandmentObedience.Obeyed;
            base.Number = 42;
            base.ShortSummary = "No idolatrous prophesying.";
            base.Text = "If a prophet, or one who foretells by dreams, appears among you and announces to you a miraculous sign or wonder, and if the sign or wonder of which he has spoken takes place, and he says, \"Let us follow other gods\" (gods you have not known) \"and let us worship them,\" you must not listen to the words of that prophet or dreamer.";
            base.Verse = 1;
        }
    }
}
