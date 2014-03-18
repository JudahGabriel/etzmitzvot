using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CmdMents.TimesAndSeasons
{
    class RejoiceBeforeTheLordWithBranchesOnSukkot : LiveInSukkahDuringSukkot
    {
        public RejoiceBeforeTheLordWithBranchesOnSukkot()
        {
            this.AlternateText = null;
            this.Book = CommandmentBook.Leviticus;
            this.CanBeCarriedOutOnlyInIsrael = false;
            this.CanBeCarriedOutToday = true;
            this.Chapter = 23;
            this.CommandmentType = CmdMents.CommandmentType.Positive;
            this.FollowedByChristians = CommandmentObedience.None;
            this.FollowedByMessianics = CommandmentObedience.Obeyed;
            this.FollowedByObservantJews = CommandmentObedience.Obeyed;
            this.Number = 118;
            this.ShortSummary = "Rejoice before the Lord with branches from luxuriant trees on Sukkot.";
            this.Text = "On the first day you are to take branches from luxuriant trees—from palms, willows and other leafy trees—and rejoice before the LORD your God for seven days.";
            this.Verse = 40;
            this.Meta(CommandmentMetaType.MaimonidesInterpretation, "To take up a Lulav and Etrog all seven days.");
            this.Meta(CommandmentMetaType.Commentary, "Though Maimonides interprets this commandment as specifically taking up the lulav and etrog, the more important matter appears not to be the choice of plant, but rather, the act of rejoicing before the Lord with branches. It's also worth noting that in Nehemiah 8:15, when the people heard the Torah for the first time, it appears that they gathered branches not for the purpose of rejoicing (as my interpretation), nor for the purpose of waving (as Maimonides suggests), but for the purpose of building sukkot. It may well be that these rejoicing/waving/sukkot building are all mingled together, and not necessarily separate events.");
        }
    }
}
