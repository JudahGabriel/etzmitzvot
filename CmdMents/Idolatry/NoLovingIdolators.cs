using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.Idolatry
{
    class NoLovingIdolators : NoIdols
    {
        public NoLovingIdolators()
        {
            base.Book = CommandmentBook.Deuteronomy;
            base.CanBeCarriedOutToday = true;
            base.Chapter = 13;
            base.CommandmentType = CommandmentType.Negative;

            // Whether observant Jews, Christians, and Messianics observe this 
            // commandment are complex questions.
            //
            // These questions are complex for several reasons:
            //
            // 1. Different definitions of idolatry:
            //      -   Orthodox Jews would consider Christians and Messianics 
            //          idolatrous due to the divine status of Jesus/Yeshua,
            //          whereas Christians and Messianics would say Yeshua is
            //          one with God, not a distinct deity. See http://www.biblegateway.com/passage/?search=john%2010:34-38&version=NIV.
            //
            //      -   The New Testament amplifies idolatry, suggesting that sexual 
            //          immorality, greed, lust, and evil desires are also forms of idolatry.
            //          See http://www.biblegateway.com/passage/?search=colossians%203:5&version=NIV.
            //
            //      -   Some Protestant Christians would label Catholic Christians as 
            //          idolatrous for elevating Mary, Jesus' mother, as the perpetual virgin
            //          and glorified mother of heaven.
            //          Additionally, some Protestants object to the Catholic Pope's description as
            //          "vicar of Christ on earth", claiming it to be idolatrous.
            //
            // 2.   All groups, in word, reject idolatry as they define it.
            //      However, due to gray areas (see below), all groups have some 
            //      hypocrisy when it comes to practicing acts which are considred
            //      by some to be idolatrous, and still accept and love those people that
            //      carry out those acts.

            base.FollowedByChristians = CommandmentObedience.Attempted; // Tough call. I don't mean to sound biased, but I'm reminded of the vast group of "grace-only" evangelicals who believe it's proper to love *everyone*, period. For example, see http://www.christiananswers.net/q-eden/edn-f019.html where it is suggested we should always hate the sin, but love the sinner, which would imply even the idolator!
            base.FollowedByMessianics = CommandmentObedience.Attempted; // Borrowing "all grace" elements from Christianity, but with a stronger focus on the commandments, many Messianics are less likely to buy into the idea that everyone should be loved.
            base.FollowedByObservantJews = CommandmentObedience.Attempted; // I argue there are idolatrous elements of Judaism which are embraced by some Jews: whether practical Kabbalist rabbis selling magical trinkets with healing powers, to meshichist Chabadniks idolizing their Rebbe, to Talmud passages indicating white magic can be practiced if it is combatting black magic.

            base.Number = 37;
            base.ShortSummary = "No loving idolators.";
            base.Text = "If your very own brother, or your son or daughter, or the wife you love, or your closest friend secretly entices you, saying, \"Let us go and worship other gods\" (gods that neither you nor your fathers have known, gods of the peoples around you, whether near or far, from one end of the land to the other), do not yield to him or listen to him. Show him no pity. Do not spare him or shield him.";
            base.Verse = 8;
        }
    }
}
