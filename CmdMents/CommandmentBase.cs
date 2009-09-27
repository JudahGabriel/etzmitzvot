using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;

namespace CmdMents
{
    abstract class CommandmentBase
    {
        const string quote = "\"";

        /// <summary>
        /// The Scripture text.
        /// </summary>
        /// <value>The text.</value>
        /// <author>JGH</author>
        public string Text { get; set; }
        /// <summary>
        /// The book of the Torah the commandment is defined in.
        /// </summary>
        /// <value>The book.</value>
        /// <author>JGH</author>
        public CommandmentBook Book { get; set; }
        /// <summary>
        /// The chapter the commandment is defined in.
        /// </summary>
        /// <value>The chapter.</value>
        /// <author>JGH</author>
        public int Chapter { get; set; }
        /// <summary>
        /// The verse the commandment is defined in.
        /// </summary>
        /// <value>The verse.</value>
        /// <author>JGH</author>
        public int Verse { get; set; }
        /// <summary>
        /// Whether it is physically possible for the commandment to be be carried out in modern times.
        /// </summary>
        /// <value>
        /// 	<c>true</c> if this instance can be carried out today; otherwise, <c>false</c>.
        /// </value>
        /// <author>JGH</author>
        public bool CanBeCarriedOutToday { get; set; }
        /// <summary>
        /// Whether the commandment generally is followed by Messianics.
        /// </summary>
        /// <value>
        /// 	<c>true</c> if [followed by messianics]; otherwise, <c>false</c>.
        /// </value>
        /// <author>JGH</author>
        public bool FollowedByMessianics { get; set; }
        /// <summary>
        /// Whether the commandment generally is followed by various streams of Orthodox Judaism.
        /// </summary>
        /// <value>
        /// 	<c>true</c> if [followed by observant jews]; otherwise, <c>false</c>.
        /// </value>
        /// <author>JGH</author>
        public bool FollowedByObservantJews { get; set; }
        /// <summary>
        /// Whether hte commandment generally is followed by Christians.
        /// </summary>
        /// <value>
        /// 	<c>true</c> if [followed by christians]; otherwise, <c>false</c>.
        /// </value>
        /// <author>JGH</author>
        public bool FollowedByChristians { get; set; }
        /// <summary>
        /// A short one-liner describing the commandment. Example: "Know that God exists."
        /// </summary>
        /// <value>The short summary.</value>
        /// <author>JGH</author>
        public string ShortSummary { get; set; }
        /// <summary>
        /// Whether the commandment is a positive (e.g. "You shall...") or negative (e.g. "You shall not...").
        /// </summary>
        /// <value>The type of the commandment.</value>
        /// <author>JGH</author>
        public CommandmentType CommandmentType { get; set; }
        /// <summary>
        /// The number of the commandment as found in Maimonides' traditional listing of the 613 commandments.
        /// 
        /// See http://en.wikipedia.org/wiki/613_commandments#Maimonides.27_list
        /// </summary>
        /// <value>The number.</value>
        /// <author>JGH</author>
        public int Number { get; set; }
        /// <summary>
        /// An alternative text or different reading from older or different scrolls.
        /// This may be null.
        /// </summary>
        /// <value>The alternate text.</value>
        /// <author>JGH</author>
        public string AlternateText { get; set; }


        public override string ToString()
        {
            return string.Format("{0}{1}\\r\\n{2} {3}:{4}{0}",
                quote, ShortSummary, Book, Chapter, Verse);
        }

        private string GetColorString()
        {
            var color = this.CanBeCarriedOutToday ? NormalColor : NotFollowableColor;
            return "[color=\"" + color + "\"]";
        }

        private static string NormalColor
        {
            get { return "0.603 0.258 1.000"; }
        }

        private static string NotFollowableColor
        {
            get { return "0.000 1.000 1.000"; }
        }

        public string GetLocation()
        {
            return string.Format("{0} {1}:{2}",
                Book, Chapter, Verse);
        }

        public string GetDotHierarchyString()
        {
            Type baseType = this.GetType().BaseType;
            if (!typeof(CommandmentBase).IsAssignableFrom(baseType))
            {
                throw new InvalidOperationException("This type derives from a non-commandment type.");
            }

            if (baseType == typeof(CommandmentBase))
            {
                return this.ToString() + " " + this.GetColorString();
            }

            var baseTypeInstance = CreateInstance(baseType);
            return string.Format("{0} -> {1} {2}",
                baseTypeInstance, this, this.GetColorString());
        }

        public static CommandmentBase CreateInstance(Type commandmentType)
        {
            return (CommandmentBase)Activator.CreateInstance(commandmentType);
        }
    }
}
