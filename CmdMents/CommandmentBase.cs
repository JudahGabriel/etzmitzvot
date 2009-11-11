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
        const string centeredLineSeparator = "\\n", rightJustifiedLineSeparator = "\\r", leftJustifiedLineSeparator = "\\l";

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
        /// One of the values of <see cref="CommandmentObedience" /> corresponding
        /// to the level of obedience generally observed among Messianics.
        /// </value>
        /// <author>JGH, NET</author>
        public CommandmentObedience FollowedByMessianics { get; set; }
        /// <summary>
        /// Whether the commandment generally is followed by various streams of Orthodox Judaism.
        /// </summary>
        /// <value>
        /// One of the values of <see cref="CommandmentObedience" /> corresponding
        /// to the level of obedience generally observed among observant Jews.
        /// </value>
        /// <author>JGH, NET</author>
        public CommandmentObedience FollowedByObservantJews { get; set; }
        /// <summary>
        /// Whether the commandment generally is followed by Christians.
        /// </summary>
        /// <value>
        /// One of the values of <see cref="CommandmentObedience" /> corresponding
        /// to the level of obedience generally observed among Christians.
        /// </value>
        /// <author>JGH, NET</author>
        public CommandmentObedience FollowedByChristians { get; set; }
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

        /// <summary>
        /// A human-readable description of this commandment.
        /// </summary>
        /// <returns>A quoted string with a summary and originating location.</returns>
        public override string ToString()
        {
            return quote + ShortSummary + centeredLineSeparator + GetLocation() + quote;
        }

        /// <summary>
        /// The DOT color attribute string applicable to this commandment.
        /// </summary>
        /// <returns>A DOT color attribute string with the appropriate instructions.</returns>
        private string GetColorString()
        {
            var color = this.CanBeCarriedOutToday ? NormalColor : NotFollowableColor;
            return "color = \"" + color + "\"";
        }

        private static string NormalColor
        {
            get { return "0.603 0.258 1.000"; }
        }

        private static string NotFollowableColor
        {
            get { return "0.000 1.000 1.000"; }
        }

        /// <summary>
        /// The DOT label attribute string applicable to this commandment.
        /// </summary>
        /// <returns>A DOT label attribute string with the appropriate instructions.</returns>
        private string GetLabelString()
        {
            return "label = " + this.ToString();
        }

        /// <summary>
        /// The originating location of this commandment.
        /// </summary>
        /// <returns>A string in the format 'Book ch:v', 
        /// with the corresponding book name, chapter, and verse information.</returns>
        public string GetLocation()
        {
            return string.Format("{0} {1}:{2}",
                Book, Chapter, Verse);
        }

        // TODO (NET 2009-10-11): Make naming consistent with methods in Program
        /// <summary>
        /// The DOT parent -> descendant directed edge instructions for this commandment.
        /// </summary>
        /// <returns>A string containing the DOT instructions for the appropriate directed edge.</returns>
        /// <remarks>Use <seealso cref="GetDotNodeDefinitionString"/> to emit definitions.</remarks>
        public string GetDotHierarchyString()
        {
            Type baseType = this.GetType().BaseType;
            if (!typeof(CommandmentBase).IsAssignableFrom(baseType))
            {
                throw new InvalidOperationException("This type derives from a non-commandment type.");
            }

            if (baseType == typeof(CommandmentBase))
            {
                return null;
            }

            var baseTypeInstance = CreateInstance(baseType);
            return string.Format("{0} -> {1}",
                baseTypeInstance.GetNodeName(), this.GetNodeName());
        }

        /// <summary>
        /// The DOT node definition instructions for this commandment.
        /// </summary>
        /// <returns>A string containing the DOT instructions to define the node.</returns>
        /// <remarks>Use <seealso cref="GetDotHierarchyString"/> to emit hierarchies.</remarks>
        public string GetDotNodeDefinitionString()
        {
            return string.Format("{0} [{1}, {2}]",
                this.GetNodeName(), this.GetLabelString(), this.GetColorString());
        }

        /// <summary>
        /// The machine-readable name of this node.
        /// </summary>
        /// <returns>A string with no spaces or illegal DOT ID characters.</returns>
        /// <remarks>Currently returns the name of the node's declaring type.</remarks>
        public string GetNodeName()
        {
            return this.GetType().Name;
        }

        public static CommandmentBase CreateInstance(Type commandmentType)
        {
            return (CommandmentBase)Activator.CreateInstance(commandmentType);
        }
    }
}
